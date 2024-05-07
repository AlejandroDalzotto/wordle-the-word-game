"use client";

import { isValidWord } from "@/lib/actions";
import { compareWords, isValidKey } from "@/lib/utils";
import { useWordleStore } from "@/stores/wordle-store";
import { useEffect } from "react"
import { toast } from "sonner";

interface Props {
  children: React.ReactNode
}

export default function WordleProvider({ children }: Props) {

  // Store actions.
  const init = useWordleStore((state) => state.init)
  const onBackspace = useWordleStore((state) => state.onBackspace)
  const onDefeat = useWordleStore((state) => state.onDefeat)
  const onVictory = useWordleStore((state) => state.onVictory)
  const onTyping = useWordleStore((state) => state.onTyping)
  const updateQwerty = useWordleStore((state) => state.updateQwerty)

  // Store states.
  const gameState = useWordleStore((state) => state.gameState)
  const guess = useWordleStore((state) => state.guess)
  const currentWord = useWordleStore((state) => state.currentWord)
  const currentRow = useWordleStore((state) => state.currentRow)
  const board = useWordleStore((state) => state.board)

  // Init not the store but actually the word to guess.
  useEffect(() => {
    init()
  }, [init])

  // Listen key events
  useEffect(() => {
    const handleKeyDown = async (e: KeyboardEvent) => {
      e.preventDefault()

      if (gameState === "playing" && guess) {

        if (e.key === "Enter" && board[currentRow].every(v => v.value !== " ")) {

          // Validate if the word is in the json's word.
          const parsedWord = currentWord.map(letter => letter.value).join("")
          const isValid = await isValidWord(parsedWord)
          if (!isValid) {
            toast.error("Not in word list")
            return;
          }

          const comparedWord = compareWords(guess, currentWord)
          updateQwerty(comparedWord)

          // If the typed word is equals to the secret word then user win
          if (comparedWord.every(letter => letter.color === "green")) {
            onVictory(comparedWord)
          } else {
            // If not, user lose
            onDefeat(comparedWord)
          }

          return;
        }
        
        // If enter is pressed and there's not enough letters.
        if (e.key === "Enter" && board[currentRow].some(v => v.value === " ")) {
          toast.error("Not enough letters")
          return;
        }

        // Validate if backspace is pressed
        if (e.key === "Backspace") {
          onBackspace();
          return;
        }

        // If key pressed is neither Enter or Backspace, fill the current column with the value
        if (isValidKey(e.key) && currentWord[4].value === " ") {
          onTyping(e.key);
          return;
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [board, currentRow, currentWord, gameState, guess, onBackspace, onDefeat, onTyping, onVictory, updateQwerty])

  return (children);
}
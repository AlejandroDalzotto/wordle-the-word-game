"use client";

import { isValidWord } from "@/lib/actions";
import { compareWords } from "@/lib/utils";
import { useWordleStore } from "@/stores/wordle-store";
import { toast } from "sonner";

export default function EnterButton() {

  const board = useWordleStore(state => state.board)
  const currentRow = useWordleStore(state => state.currentRow)
  const currentWord = useWordleStore(state => state.currentWord)
  const guess = useWordleStore(state => state.guess)
  const updateQwerty = useWordleStore(state => state.updateQwerty)
  const onVictory = useWordleStore(state => state.onVictory)
  const onDefeat = useWordleStore(state => state.onDefeat)

  const handleClick = async () => {

    if (board[currentRow].every(v => v.value !== " ")) {

      // Validate if the word is in the json's word.
      const parsedWord = currentWord.map(letter => letter.value).join("")
      const isValid = await isValidWord(parsedWord)
      if (!isValid) {
        toast.error("Not in word list")
        return;
      }

      const comparedWord = compareWords(guess!, currentWord)
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

    // // If enter is pressed and there's not enough letters.
    if (board[currentRow].some(v => v.value === " ")) {
      toast.error("Not enough letters")
      return;
    }

  }

  return (
    <button
      onClick={handleClick}
      className="grid p-2 text-2xl font-bold rounded-md select-none bg-neutral-800 md:p-4 md:aspect-square place-content-center">
      <svg className="w-8 h-8 fill-white">
        <use xlinkHref="/sprites.svg#send"></use>
      </svg>

    </button>
  )
}
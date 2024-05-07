import type { Letter, Word } from "./types";

export const isValidKey = (key: string): boolean => {
  const regexp = new RegExp(/^[A-z]$/)

  return regexp.test(key);
}

export const compareWords = (wordSecret: Word, inputUser: Word): Word => {
  const result: Word = [];
  const unmatched: string[] = []

  // Mark correct letters in correct positions
  for (let i = 0; i < wordSecret.length; i++) {
    if (inputUser[i] && inputUser[i].value === wordSecret[i].value) {
      result.push({ value: inputUser[i].value, color: "green" });
    } else {
      result.push({ value: inputUser[i].value, color: "gray" })
      unmatched.push(wordSecret[i].value)
    }
  }

  for (let i = 0; i < wordSecret.length; i++) {

    if (result[i].color === "gray" && unmatched.includes(inputUser[i].value)) {
      result[i].color = "yellow"

      const indexToDelete = unmatched.findIndex((letter) => letter === result[i].value)

      unmatched.splice(indexToDelete, 1)
    }

  }

  return result;
};

export const generateQwerty = (): Letter[][] => {

  const firstRow: Letter[] = "qwertyuiop".split("").map(letter => ({ value: letter, color: "neutral" }))
  const secondRow: Letter[] = "asdfghjkl".split("").map(letter => ({ value: letter, color: "neutral" }))
  const thirdRow: Letter[] = "zxcvbnm".split("").map(letter => ({ value: letter, color: "neutral" }))

  return [
    firstRow,
    secondRow,
    thirdRow,
  ]
}

export const updateKeyboard = (word: Word, keyboard: Letter[][]): Letter[][] => {
  // Loop through all the elements of the keyboard.
  const updatedKeyboard: Letter[][] = keyboard.map(row =>
    // Loop through all the elements of the row.
    row.map(key => {

      // find the specific letter in the word.
      const isKeyInWord = word.find(letter => letter.value === key.value && key.color !== "green")

      if (isKeyInWord) {
        return isKeyInWord
      }

      return key

    })
  );
  return updatedKeyboard;
}

export const generateUUID = () => {
  const uuid = crypto.randomUUID();
  return uuid;
}
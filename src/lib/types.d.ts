/**
 * for `Wordle`
 * 
 * The colors that will be printed the cells when user writes a word.
 * - `green` means the letter is in the word and in a corrrect position.
 * - `yellow` means the letter is in the word but in the incorrect position.
 * - `gray` is the default value.
 * - `neutral` means the letter is not in the word. 
 */
export type CellColor = "green" | "yellow" | "gray" | "neutral";

/**
 * for `Wordle`
 * 
 * The object that represents one letter of the word.
 */
export type Letter = {
  value: string;
  color: CellColor;
}

export type Word = Letter[]
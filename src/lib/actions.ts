"use server";
import { promises as fs } from 'fs';
import { join } from 'path';
import type { Word } from './types';

const wordsPath = join(process.cwd(), "public", "words.json")

export const getWord = async () => {

  const file = await fs.readFile(wordsPath, 'utf8');
  const words: Set<string> = new Set(JSON.parse(file));

  const randIndex = Math.floor(Math.random() * words.size);
  const rawWord = Array.from(words).at(randIndex);
  if (!rawWord) {
    throw new Error("Error finding the word")
  }
  const word: Word = rawWord.split("").map((letter) => ({ value: letter, color: "neutral" }));

  return word;
}

export const isValidWord = async (word: string) => {

  const file = await fs.readFile(wordsPath, 'utf8');
  const words: Set<string> = new Set(JSON.parse(file));

  return words.has(word);
}
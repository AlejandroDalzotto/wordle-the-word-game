"use server";
import { promises as fs, readdir } from 'fs';
import { join } from 'path';
import type { Word } from './types';

export const getWord = async () => {

  const filePath = join(process.cwd(), "src", "app", "words.json")
  readdir(filePath, { withFileTypes: true }, (err, files) => {

    if (err) return;

    console.log({ files })

  })

  const file = await fs.readFile(filePath, 'utf8');
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
  const filePath = join(process.cwd(), "src", "app", "words.json")

  const file = await fs.readFile(filePath, 'utf8');
  const words: Set<string> = new Set(JSON.parse(file));

  return words.has(word);
}
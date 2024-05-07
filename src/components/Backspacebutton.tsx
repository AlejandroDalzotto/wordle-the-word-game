"use client";

import { useWordleStore } from "@/stores/wordle-store";

export default function BackspaceButton() {

  const onBackspace = useWordleStore(state => state.onBackspace)

  return (
    <button
      onClick={() => onBackspace()}
      className="grid p-2 text-2xl font-bold rounded-md select-none bg-neutral-800 md:p-4 md:aspect-square place-content-center">
      <svg className="w-8 h-8 fill-white">
        <use xlinkHref="/sprites.svg#go-back"></use>
      </svg>

    </button>
  )
}
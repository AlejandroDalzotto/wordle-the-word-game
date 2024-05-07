"use client";

import { useWordleStore } from "@/stores/wordle-store";
import useSound from "use-sound";
import clsx from "clsx";

export default function ResetWordleButton() {

  const [playOnDown] = useSound("/audio/pop-down.mp3", { volume: 0.5 })
  const [playOnUp] = useSound("/audio/pop-up-on.mp3", { volume: 0.5 })

  const reset = useWordleStore((state) => state.reset)
  const gameState = useWordleStore((state) => state.gameState)

  return (
    gameState === "idle" ? (
      <button
        onMouseDown={() => playOnDown()}
        onMouseUp={() => {
          playOnUp()
          reset()
        }}
        className={clsx(
          "relative grid place-content-center border border-neutral-700 px-6 py-3 transition-all rounded-lg",
          { "active:scale-90 hover:bg-black/5 dark:hover:bg-white/5 hover:scale-105": gameState === "idle" }
        )}>
          reset game
      </button>
    ) : null
  )
}
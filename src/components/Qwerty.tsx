"use client";

import clsx from "clsx";
import { useWordleStore } from "@/stores/wordle-store";
import { generateUUID } from "@/lib/utils";
import BackspaceButton from "./Backspacebutton";
import EnterButton from "./EnterButton";

export default function Qwerty() {

  const qwerty = useWordleStore(state => state.qwerty)
  const onTyping = useWordleStore(state => state.onTyping)

  return (
    <div className="flex flex-col items-center w-full gap-y-2">
      {
        qwerty.map((row, rowIndex) => {
          return (
            <div className="flex gap-x-2" key={generateUUID()}>
              {rowIndex + 1 === qwerty.length ? (
                <BackspaceButton />
              ) : null}
              {
                row.map((letter) => {

                  return (
                    <button
                      onClick={() => onTyping(letter.value)}
                      className={clsx(
                        "select-none p-2 md:p-4 md:aspect-square w-full text-2xl uppercase font-bold grid place-content-center rounded-md",
                        { "bg-neutral-800": letter.color === "neutral" },
                        { "bg-yellow-500": letter.color === "yellow" },
                        { "bg-green-500": letter.color === "green" },
                        { "bg-neutral-950": letter.color === "gray" },
                      )} key={generateUUID()}>
                      {letter.value}
                    </button>
                  )
                })
              }
              {rowIndex + 1 === qwerty.length ? (
                <EnterButton />
              ) : null}
            </div>
          )
        })
      }
    </div>
  )
}
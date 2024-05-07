"use client";

import { useWordleStore } from "@/stores/wordle-store";

export default function TotalProgressWordle({
  total
}: {
  total: number
}) {
  const current = useWordleStore(state => state.records)

  return (
    <p className="select-none transition-transform text-neutral-800 dark:text-white font-bold italic">
      {current.length} / {total}
    </p>
  )
}
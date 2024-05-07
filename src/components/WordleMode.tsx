import Qwerty from "./Qwerty";
import ResetWordleButton from "./ResetButton";
import Board from "./Board";

export default function WordleMode() {

  return (
    <section className="relative flex flex-col items-center outline-none">
      <Board />
      <article className="grid w-full my-8 place-content-center">

        <ResetWordleButton />

      </article>
      <article className="relative w-full">
        <Qwerty />
      </article>
    </section>
  )
}
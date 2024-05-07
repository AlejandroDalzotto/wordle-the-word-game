import WordleMode from "@/components/WordleMode";
import WordleProvider from "@/providers/WordleProvider";

export default function Home() {
  return (
    <WordleProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <header className="flex flex-col items-center justify-center gap-y-8">
          <h1 className="text-4xl font-bold">Wordle</h1>
        </header>
        <WordleMode />
      </main>
    </WordleProvider>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Homepage</h1>

      <Link href="/count">
        <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Go to Counter Page
        </button>
      </Link>

      <Link href="/visual">
        <button className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition">
          Go to Visual Page
        </button>
      </Link>
    </main>
  );
}

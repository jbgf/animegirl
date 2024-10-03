'use client';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <h1 className="text-4xl font-bold mb-8 text-white">Anime Girl Wallpaper Generator</h1>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        {session ? (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Welcome, {session.user?.name}!</h2>
            <p className="text-gray-700 mb-4">Click the button below to generate your personalized anime girl wallpaper!</p>

            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300 mb-4">
              Generate Wallpaper
            </button>

            <button onClick={() => signOut()} className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sign In</h2>
            <p className="text-gray-700 mb-4">Please sign in with your Google account to use the wallpaper generator.</p>
            <button onClick={() => signIn('google')} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Sign in with Google
            </button>
          </>
        )}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-white opacity-75">
          Powered by advanced AI technology to create one-of-a-kind anime girl wallpapers
        </p>
      </div>
    </main>
  );
}

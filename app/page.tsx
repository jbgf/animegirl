
import Content from "./content";

export default function Home() {

  return (

    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <h1 className="text-4xl font-bold mb-8 text-white">Anime Girl Wallpaper Generator</h1>

      <Content />
      <div className="mt-12 text-center">
        <p className="text-sm text-white opacity-75">
          Powered by advanced AI technology to create one-of-a-kind anime girl wallpapers
        </p>
      </div>
    </main>


  );
}

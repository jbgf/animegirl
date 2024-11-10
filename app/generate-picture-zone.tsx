
import { signIn, auth, signOut } from "@/auth";

export default function GeneratePictureZone() {
    //  const session = await auth()
    /** mock data logined */
    const session = 1;
    return (

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
            {session ? (
                <>
                    {/* <h2 className="text-2xl font-semibold mb-4 text-gray-800">Welcome, {session.user?.name}!</h2> */}
                    <p className="text-gray-700 mb-4">Click the button below to generate your personalized anime girl wallpaper!</p>

                    <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300 mb-4">
                        Generate Wallpaper
                    </button>
                    {/**
                    <button onClick={async () => {
                        "use server"
                        await signOut()
                    }} className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                        Sign Out
                    </button>*/}
                </>
            ) : (
                <>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sign In</h2>
                    <p className="text-gray-700 mb-4">Please sign in with your Google account to use the wallpaper generator.</p>
                        <form
                            action={async () => {
                                "use server"
                                await signIn("google")
                            }}
                        >
                            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300" type="submit">Signin with Google</button>
                        </form>   {/* <button onClick={async () => {
                            "use server"
                            await signIn('google')
                        }} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                        Sign in with Google
                    </button> */}
                </>
            )}
        </div>

    );
}

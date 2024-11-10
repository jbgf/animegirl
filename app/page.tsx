'use client'
import { useState } from 'react'
import { motion } from "framer-motion"

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const generateWallpaper = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://api.btstu.cn/sjbz/?lx=dongman')
      if (!response.ok) throw new Error('Failed to fetch image')

      const imageBlob = await response.blob()
      const url = URL.createObjectURL(imageBlob)
      setImageUrl(url)
    } catch (error) {
      console.error('Error generating wallpaper:', error)
    } finally {
      setLoading(false)
    }
  }

  const downloadImage = async () => {
    if (!imageUrl) return

    try {
      const link = document.createElement('a')
      link.href = imageUrl
      link.download = 'anime-wallpaper.jpg'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading image:', error)
    }
  }

  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section with Background Image */}
      <div
        className="hero min-h-[60vh] relative"
        style={{
          backgroundImage: 'url(/images/bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="hero-content text-center relative z-10">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-4 text-white">
              Anime Girl Wallpaper Generator
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Create beautiful anime girl wallpapers instantly. Generate unique and stunning anime girl art for your devices.
            </p>
            <button
              onClick={generateWallpaper}
              disabled={loading}
              className="btn btn-lg glass bg-purple-600 hover:bg-purple-700 text-white border-none transition-colors duration-300"
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Generating...
                </>
              ) : (
                'Generate Wallpaper'
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {imageUrl && (
        <div className="container mx-auto px-4 py-8 -mt-20 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card bg-base-100 shadow-xl overflow-hidden"
          >
            <div className="card-body">
              <h2 className="card-title text-gray-800">Your Generated Wallpaper</h2>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={imageUrl}
                  alt="Generated anime wallpaper"
                  className="w-full h-auto"
                />
              </div>
              <button
                onClick={downloadImage}
                className="btn btn-success btn-lg mt-4"
              >
                Download Wallpaper
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Why Choose Our Anime Girl Generator</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="card-body">
              <h3 className="card-title text-gray-800">Beautiful Anime Girls</h3>
              <p className="text-gray-600">Generate stunning anime girl artwork with diverse styles and expressions</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="card-body">
              <h3 className="card-title text-gray-800">High Quality Art</h3>
              <p className="text-gray-600">Create high-resolution anime girl wallpapers perfect for any device</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="card-body">
              <h3 className="card-title text-gray-800">Instant Generation</h3>
              <p className="text-gray-600">Get your perfect anime girl wallpaper in seconds</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="grid gap-6 max-w-2xl mx-auto">
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="card-body">
              <h3 className="card-title text-gray-800">What types of anime girl wallpapers can I create?</h3>
              <p className="text-gray-600">Our AI generates a wide variety of beautiful anime girl wallpapers, including casual, fantasy, and school-style anime girls.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="card-body">
              <h3 className="card-title text-gray-800">Are these anime girl wallpapers free to use?</h3>
              <p className="text-gray-600">Yes! All generated anime girl wallpapers are free to download and use as your personal device wallpaper.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-200 text-gray-600">
        <div className="max-w-2xl text-center">
          <p>© 2024 Anime Girl Wallpaper Generator. Create beautiful anime girl art for your desktop, phone, and tablet.</p>
          <p className="mt-2 text-sm">Generate unique anime girl wallpapers with our AI-powered tool.</p>
        </div>
      </footer>
    </div>
  )
}

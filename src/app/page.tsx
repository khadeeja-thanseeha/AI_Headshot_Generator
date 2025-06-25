import Image from "next/image";

export default function Home() {
  const shots = [1, 2, 3, 4, 5, 6].map((i) => `/avatars/${i}.png`);

  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      {/* Hero Section */}
      <section className="py-20 text-center px-6 bg-white border-b border-gray-200">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Inspire. Design. Share.
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover beautiful shots shared by creative professionals around the world.
        </p>
        <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition">
          Explore Gallery
        </button>
        
      </section>

      {/* Horizontal Scroll Section */}
<section className="py-16 px-6 bg-white">
  <h2 className="text-2xl font-semibold text-center text-black mb-8">
    Featured Shots
  </h2>

  <div className="overflow-x-auto scrollbar-hide">
    <div className="flex space-x-6 w-max px-2 scroll-x-auto">
      {shots.map((src, idx) => (
  <div
    key={idx}
    className="min-w-[300px] rounded-xl overflow-hidden shadow hover:shadow-xl transition border border-gray-100"
  >
    <Image
      src={src}
      alt={`Shot ${idx + 1}`}
      width={400}
      height={300}
      className="object-cover w-full h-100"
    />
  </div>
))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#061d26] text-white text-center">
        <h2 className="text-3xl font-bold">Ready to share your work?</h2>
        <p className="mt-3 text-gray-300">Join the creative community today and start posting your shots.</p>
        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full text-lg">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 px-6 border-t border-green-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} PicAI — All Rights Reserved</p>
          <div className="flex space-x-4 mt-2 sm:mt-0 text-sm">
            <a href="#" className="hover:text-green-400">About</a>
            <a href="#" className="hover:text-green-400">Contact</a>
            <a href="#" className="hover:text-green-400">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

"use client";

export default function FormsPage() {
  return (
    <div className="min-h-screen bg-[#f8f7ef] flex flex-col">
      {/* Navbar */}
      <header className="bg-[#061d26] text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-green-400 font-medium">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21.75 5.25a17.13 17.13 0 01-5.04 1.32A8.42 8.42 0 0022 3a16.92 16.92 0 01-5.34 2.06 8.38 8.38 0 00-14.28 7.64A23.76 23.76 0 013 6.25"
            />
          </svg>
          PICAI
        </div>
        <button className="text-sm border border-white px-3 py-1 rounded hover:bg-white hover:text-[#061d26] transition">
          Sign Out
        </button>
      </header>

      {/* Content */}
      <main className="flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
          How it works
        </h1>
        <p className="text-gray-600 text-center max-w-xl mb-6">
          Creating your professional headshots is easy. All you need to do is upload some photos of yourself. We'll take care of the rest!
        </p>

        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full text-center">
          <button className="bg-[#061d26] text-white py-2 px-6 rounded mb-6 hover:bg-black transition">
            Click here to start!
          </button>
        {/* Image below the button */}
        <div className="my-6">
            <img
                src="https://shots.best/_next/image?url=%2FForm1.png&w=640&q=75"
                alt="how it works visual guide"
                className="rounded-md mx-auto"
            />
        </div>
        </div>
      </main>
    </div>
  );
}

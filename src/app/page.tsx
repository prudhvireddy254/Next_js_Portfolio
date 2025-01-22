import Navbar from "./components/Navbar";
import Footer from "./components/footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg text-center max-w-xl">
          I am a software developer with expertise in React, Next.js, and
          Tailwind CSS. I love building interactive and user-friendly
          applications.
        </p>
      </main>
      <Footer />
    </>
  );
}

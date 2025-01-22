import Link from "next/link";

export default function Navbar(){
    return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <div className="font-bold text-lg">My Portfolio</div>
       <div className="space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
       </div>
    </nav>
    );
}
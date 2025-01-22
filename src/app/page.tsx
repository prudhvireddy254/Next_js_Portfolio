import Link from "next/link";
import Navbar from "./components/navbar";
export default function About() {
  return (
    <>
    <Navbar/>
      <main>
        <h1>Hello I am Software developer </h1>
        <Link href="/users"> press here</Link>
      </main>
    </>
  );
}

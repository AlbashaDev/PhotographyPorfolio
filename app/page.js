import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-5">
      <h1>Hello there!!!</h1>
      <h2>
        Site is currently underdevelopment, if you would like book a session or
        discuss a request write me at:{" "}
        <a
          href="malito:albashahmad.se@gmail.com?subject: Inquiry!"
          className="text-blue-700	no-underline hover:underline"
        >
          albashahmad.se@gmail.com
        </a>
      </h2>
    </main>
  );
}

import Heading from "@/Components/Heading/Heading";
import Image from "next/image";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Heading />
          Hello next hero <br></br>
          This is another line
          <button>
            Call me
          </button>
      </main>
  );
}

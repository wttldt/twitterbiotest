import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-10 h-9 bg-black rounded-full">
          <span className="text-3xl" style={{ marginTop: "5px" }}>
            😒
          </span>
        </div>
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          g2tp.org
        </h1>
      </Link>
      <div className="ml-auto">
        <Link href="/" className="flex items-center space-x-3">
          <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
            Donate
          </h1>
          <div className="flex items-center justify-center w-10 h-9 bg-black rounded-full">
            <span className="text-3xl" style={{ marginTop: "5px" }}>
              😍
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}

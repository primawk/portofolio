import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-col p-5">
      <Link href={"/"} className="text-stone-400">
        Prima Kuntoro
      </Link>
      <Link href={"/projects"}>Projects</Link>
      <div>About</div>
    </div>
  );
}

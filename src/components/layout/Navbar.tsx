import SearchBar from "../ui/SearchBar";
import Image from "next/image";
import Link from "next/link";
import { IoPersonCircle } from "react-icons/io5";

export default function Navbar() {
  return (
    <section className="w-screen p-2 h-16 bg-sky-400">
      <div className="w-full mx-auto max-w-screen-xl items-center flex justify-between">
        <div className="flex items-center  gap-4 w-fit">
          <h1 className="text-3xl font-bold ">illustraLine</h1>
          <SearchBar></SearchBar>
        </div>
        <div className="flex items-center gap-4">
          <ul className="flex gap-4 text-xl items-center font-bold ">
            <li className="text-slate-700 hover:text-black">
              <Link href="/courses">Courses</Link>
            </li>
            <li className="text-slate-700 hover:text-black">
              <Link href="/dashboard/user">Dashboard</Link>
            </li>
          </ul>

          <div className="flex items-center bg-slate-300 p-2 rounded-lg gap-1 w-fit ">
            <span>Username</span>
            <span>
              <IoPersonCircle size={30} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

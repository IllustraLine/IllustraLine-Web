import SearchBar from "../ui/SearchBar";
import Image from "next/image";
import Link from "next/link";
import { IoPersonCircle } from "react-icons/io5";
import { Button } from "../ui/button";

const onLogin = false;

export default function Navbar() {
  return (
    <nav className="fixed top-0 h-16 w-screen bg-white p-2 shadow-sm">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between">
        <div className="flex w-fit items-center gap-4">
          <Link href="/" className="text-3xl font-bold">
            illustraLine
          </Link>
          <SearchBar></SearchBar>
        </div>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-4 text-xl font-bold">
            <li className="text-slate-700 hover:text-black">
              <Link href="/courses">Courses</Link>
            </li>
            <li className="text-slate-700 hover:text-black">
              <Link href="/dashboard/user">Dashboard</Link>
            </li>
          </ul>

          {onLogin ? (
            <div className="flex w-fit items-center gap-1 rounded-lg border-2 border-pink-200 bg-slate-100 p-2">
              <span>Username</span>
              <span>
                <IoPersonCircle size={30} />
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button className="border-2 border-pink-200" variant="outline">
                  Login
                </Button>
              </Link>
              <span>or</span>
              <Link href="/register">
                <Button className="bg-pink-200 text-pink-700"> Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

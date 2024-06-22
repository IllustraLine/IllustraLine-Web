import SearchBar from "../ui/SearchBar";
import Image from "next/image";
import Link from "next/link";
import { IoPersonCircle } from "react-icons/io5";
import { Button } from "../ui/button";

const onLogin = false;

export default function Navbar() {
  return (
    <nav className="w-screen p-2 h-16 shadow-md fixed top-0 bg-pink-50">
      <div className="w-full mx-auto max-w-screen-xl items-center flex justify-between">
        <div className="flex items-center  gap-4 w-fit">
          <Link href="/" className="text-3xl font-bold ">
            illustraLine
          </Link>
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

          {onLogin ? (
            <div className="flex items-center bg-slate-100 border-pink-200 border-2  p-2 rounded-lg gap-1 w-fit ">
              <span>Username</span>
              <span>
                <IoPersonCircle size={30} />
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <Link href="/login">
                <Button
                  className="border-pink-200 border-2   "
                  variant="outline"
                >
                  Login
                </Button>
              </Link>
              <span>or</span>
              <Link href="/register">
                <Button className="bg-pink-200 text-pink-700   ">
                  {" "}
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

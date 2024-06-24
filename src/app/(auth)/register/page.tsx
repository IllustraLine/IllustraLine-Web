import Image from "next/image";
import regBG from "@/public/image/registerbg.webp";
import AuthForm from "@/components/layout/AuthForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-screen">
      <div className="h-screen w-[60vw] bg-red-50">
        <Image
          src={regBG}
          alt="registerpage Background"
          className="object-fit h-full w-full object-cover object-center"
        />
      </div>
      <div className="relative flex flex-1 justify-center bg-white">
        <Link href="/" className="absolute right-10 top-5 text-3xl font-bold">
          illustraLine
        </Link>

        <div className="m-auto flex w-fit flex-col items-center justify-center">
          <h1 className="text-center font-bold md:text-3xl">Buat Akun</h1>
          <AuthForm type={"register"}></AuthForm>
          <span className="w-full text-center">
            Sudah punya akun ?{" "}
            <Link
              href="/login"
              className="w-full text-center font-bold text-blue-500"
            >
              Masuk
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

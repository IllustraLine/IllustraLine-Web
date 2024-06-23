import Image from "next/image";
import regBG from "@/public/image/registerbg.webp";
import AuthForm from "@/components/layout/AuthForm";

export default function LoginPage() {
  return (
    <div className="w-screen flex mx-auto">
      <div className="w-[60vw] h-screen bg-red-50">
        <Image
          src={regBG}
          alt="registerpage Background"
          className="w-full h-full object-cover object-center object-fit"
        />
      </div>
      <div className="bg-sky-400 flex-1 flex">
        <AuthForm type="register"></AuthForm>
      </div>
    </div>
  );
}

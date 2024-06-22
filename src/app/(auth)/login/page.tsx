import Image from "next/image";
import regBG from "@/public/image/registerbg.webp";

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
        <form action="" className="bg-black m-auto h-96 w-72 "></form>
      </div>
    </div>
  );
}

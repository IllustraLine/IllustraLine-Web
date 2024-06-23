import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
  return (
    <form className="flex w-72 items-center ">
      <div className="flex w-full items-center border-2 border-gray-300 h-10 px-5  rounded-xl text-sm focus:outline-none bg-white">
        <input
          type="search"
          name="search"
          placeholder="Cari kursus..."
          className="w-full h-full border-none outline-none"
        />
        <button>
          <IoIosSearch size={25} color="gray" />
        </button>
      </div>
    </form>
  );
}

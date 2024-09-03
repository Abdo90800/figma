import { FiAlignJustify } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";
import { RiTranslate } from "react-icons/ri";
import img from "../images/logo.png"
function Header() {
  return (
    <div>
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="flex items-center">
          <FiAlignJustify className="text-[36px] " />

          <h1 className="ml-4 text-xl font-bold hidden md:block">Creative Minds</h1>
        </div>
        <div>
          <img
            className="w-[223px] h-[73px] hidden md:block"
            src={img}
            alt="logo"
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-sm flex items-center gap-2">
            <span className="">اللغه العربيه</span>
            <span >
              <RiTranslate className="w-[24px] h-[24px]"/>
            </span>
          </button>
          <button className="w-[60px] h-[30px] bg-[#1C344C] rounded-[30px] text-white">
            <MdOutlineDarkMode className="w-[20px] h-[20px] outline-white" />
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center">
            <span>Let's Talk</span>{" "}
            <span className="text-[20px]">
              <GoChevronRight />
            </span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;

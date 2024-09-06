import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa6";
import { BiLogoReact } from "react-icons/bi";
import { FaVrCardboard } from "react-icons/fa6";
function Talinted() {
  return (
    <div className=" mx-[130px]">
      <div className="my-20 ">
        <div>
          <div>
            <p className="text-[#52C3D6] text-[22px] font-[700]">
              CREATIVE AND TALENTED
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-[37px]">We Work On Different Fields</p>

            <button className="h-[50px] w-[160px] bg-[#941225] hover:bg-[#EB2F4A] text-white rounded-[30px] absolute right-20">
              lets talk
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-between mb-20">
          <p className="text-[#52C3D6] font-[700]">Development</p>
          <p className="font-[700]">Digital Marketing</p>
          <p className="font-[700]">Creative Design</p>
        </div>

        <div className="flex items-center justify-center w-[971px] h-[545px] gap-5 flex-wrap">
          <div className="h-[230px] w-[307px] flex items-center flex-col">
            <div className="w-[77px] h-[77px] bg-[#52C3D640] rounded-[18px] flex items-center justify-center">
              <FaPhp color="#52C3D6" className="text-[30px]" />
            </div>

            <p className="font-[700] text-[20px] text-center">PHP</p>
            <p className="text-center">
            We provide the best UI/UX Design by following the latest.
            </p>
          </div>{" "}
          <div className="h-[230px] w-[307px] flex items-center flex-col">
            <div className="w-[77px] h-[77px] bg-[#52C3D640] rounded-[18px] flex items-center justify-center">
              <FaApple color="#52C3D6" className="text-[30px]" />
            </div>

            <p className="font-[700] text-[20px] text-center">IOS APPLE</p>
            <p className="text-center">
              We provide the best UI/UX Design by following the latest.
            </p>
          </div>{" "}
          <div className="h-[230px] w-[307px] flex items-center flex-col">
            <div className="w-[77px] h-[77px] bg-[#52C3D640] rounded-[18px] flex items-center justify-center">
              <FaWordpress color="#52C3D6" className="text-[30px]" />
            </div>

            <p className="font-[700] text-[20px] text-center">WORDPRESS</p>
            <p className="text-center">
              We provide the best UI/UX Design by following the latest.
            </p>
          </div>{" "}
          <div className="h-[230px] w-[307px] flex items-center flex-col">
            <div className="w-[77px] h-[77px] bg-[#52C3D640] rounded-[18px] flex items-center justify-center">
              <BiLogoReact color="#52C3D6" className="text-[30px]" />
            </div>

            <p className="font-[700] text-[20px] text-center">REACT.JS</p>
            <p className="text-center">
              We provide the best UI/UX Design by following the latest.
            </p>
          </div>{" "}
          <div className="h-[230px] w-[307px] flex items-center flex-col">
            <div className="w-[77px] h-[77px] bg-[#52C3D640] rounded-[18px] flex items-center justify-center">
              <FaVrCardboard color="#52C3D6" className="text-[30px]" />
            </div>

            <p className="font-[700] text-[20px] text-center">VR</p>
            <p className="text-center">
              We provide the best UI/UX Design by following the latest.
            </p>
          </div>{" "}
          <div className="h-[230px] w-[307px] flex items-center flex-col">
            <div className="w-[77px] h-[77px] bg-[#52C3D640] rounded-[18px] flex items-center justify-center">
              <FaGooglePlay color="#52C3D6" className="text-[30px]" />
            </div>

            <p className="font-[700] text-[20px] text-center">Android Apps</p>
            <p className="text-center">
              We provide the best UI/UX Design by following the latest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talinted;

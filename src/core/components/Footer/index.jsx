import { AiOutlinePhone } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className=" bg-[#222]">
    <div className="max-w-[1280px] mx-auto my-4 md:mt-14 py-10 px-10">
      <div className="flex flex-wrap justify-between">
        <div>
          <p className="text-[33px] text-white font-[700] mb-2">Offerdoffer</p>
          <div className="w-72 flex flex-col text-[#ccc]">
            <p className="text-[14px] mb-3">
              Discover unique gifts, home decor, and gadgets in our online
              store. Shop now!
            </p>
            <div className="flex flex-row gap-2 items-cent mb-2">
              <IoLocationOutline className="text-[18px]" />
              <p className="text-[14px]">Shyamoli, Dhaka - 1207, Bangladesh</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <AiOutlinePhone className="text-[18px]" />
              <p className="text-[14px]">+880 123434333</p>
            </div>
          </div>
        </div>
        <div className="text-[#ddd]">
          <h2 className="text-[17px] text-white font-[500] mb-2">OUR STORES</h2>
          <div className="flex flex-col gap-y-1">
            <p className="text-[14px]">New York</p>
            <p className="text-[14px]">London SF</p>
            <p className="text-[14px]">Edinburgh</p>
            <p className="text-[14px]">Los Angeles</p>
            <p className="text-[14px]">Chicago</p>
          </div>
        </div>
        <div className="text-[#ddd]">
          <h2 className="text-[17px] text-white font-[500] mb-2">
            USEFUL LINKS
          </h2>
          <div className="flex flex-col gap-y-1">
            <p className="text-[14px]">Privacy Policy</p>
            <p className="text-[14px]">Returns</p>
            <p className="text-[14px]">Terms & Conditions</p>
            <p className="text-[14px]">Contact Us</p>
            <p className="text-[14px]">Latest News</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[17px] text-white font-[500] mb-2">Follow Us</h2>
          <div className="flex gap-x-4 mt-2 justify-center">
            <a
              className="w-7 h-7 rounded-full text-[#ddd]"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              className="w-7 h-7 rounded-full text-[#ddd]"
              href="/"
              target="_blank"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              className="w-7 h-7 rounded-full text-[#ddd]"
              href="https://www.youtube.com/"
              target="_blank"
            >
              <FaYoutube size={20} />
            </a>
            <a
              className="w-7 h-7 rounded-full text-[#ddd]"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] text-[#ccc] mt-10">
        <div className="flex items-center justify-between mt-5">
          <p className="text-xs md:text-sm border-none text-[#ccc] text-center">
            Copyright <span className=" text-secondary">©</span>{" "}
            {new Date().getFullYear()} Offerdoffer all rights reserved.
          </p>
          <div className="">
            <img className="w-[200px]" src={"//woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/01/payments.png"} alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;

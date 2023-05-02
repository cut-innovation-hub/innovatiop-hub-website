import logo from "../../public/logo.png";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-primary-original w-full  ">
      <div className="flex flex-col max-w-7xl w-full mx-auto bg-primary-original text-white p-4">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 items-center">
          <div className="logo col-span-1 flex flex-col items-center">
            <img src={logo.src} alt="logo" />
            <p className="font-semibold">Innovation Hub</p>
          </div>
          <div className="col-span-1 flex flex-col">
            <p className="text-white font-semibold capitalize">quick links</p>
            <Link href="/" className="text-sm font-semibold p-2 text-gray-200">Home</Link>
            <Link href='/news' className="text-sm font-semibold p-2 text-gray-200">News</Link>
            <Link href='/contact' className="text-sm font-semibold p-2 text-gray-200">Contact</Link>
          </div>
          <div className="col-span-1 flex flex-col">
            <a href="/about-us" className="text-white font-semibold capitalize">About</a>
            <a href='/about-us' className="text-sm font-semibold p-2 text-gray-200">Mission</a>
            <a href="/about-us" className="text-sm font-semibold p-2 text-gray-200">Values</a>
            <p className="text-sm font-semibold p-2 text-gray-200">
              Strategic Objective
            </p>
          </div>
          <div className="col-span-1 space-y-4">
            <div className="flex flex-row items-center space-x-4">
              <PhoneIcon height={20} width={20} />
              <p>+263672122203</p>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <EnvelopeIcon height={20} width={20} />
              <p>ihub@cut.ac.zw</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-500 m-8"></div>
        <p className="text-center text-sm text-gray-200">
          &copy; {new Date().getFullYear()} Cut Innovation Hub{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;

import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRef, useState } from "react";
import useClickOutside from "../../Modules/useClickOutside";

function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setIsOpen(false));
  return (
    <div ref={ref} className="md:hidden inline-flex">
      <MenuIcon
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="h-6 w-6 cursor-pointer active:rotate-12"
      />
      <div
        className={`top-0 z-50 border-l-2 fixed right-0 h-screen md:w-[32vh] w-[28vh] transition ease-in-out duration-300" bg-white ${
          isOpen
            ? "translate-x-0 md:transform-none"
            : "translate-x-full md:transform-none"
        }`}
      >
        <XIcon
          onClick={() => setIsOpen(!isOpen)}
          className="h-6 w-6 mt-4 ml-6 cursor-pointer active:rotate-12"
        />
        <div className="flex-col mt-7 flex mx-auto justify-center items-center space-y-4">
          <Link href="/about-us">
            <a className="hover:underline hover:text-red-500 underline-offset-4">
              About Us
            </a>
          </Link>
          <Link href="/privacy-policy">
            <a className="hover:underline hover:text-red-500 underline-offset-4">
              Privacy Policy
            </a>
          </Link>
          <Link href="/terms-and-conditions">
            <a className="hover:underline hover:text-red-500 underline-offset-4">
              Terms and Conditions
            </a>
          </Link>
          <Link href="/contact-us">
            <a className="hover:underline hover:text-red-500 underline-offset-4">
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.svg";
import MobileMenuIcon from "../public/icon-menu.svg";
import MobileMenuIconClosed from "../public/icon-menu-close.svg";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="col-span-3 grid grid-cols-[60%_40%] items-center">
      <Link href="/">
        <Image src={Logo} alt="logo" width={50} />
      </Link>
      <Image
        src={MobileMenuIcon}
        alt="mobilemenu"
        width={30}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="sm:hidden justify-self-end cursor-pointer"
      />
      {mobileMenuOpen && (
        <MobileMenu
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
        />
      )}
      <DesktopMenu />
    </header>
  );
}

export function MobileMenu(props) {
  const setMobileMenuOpen = props.setMobileMenuOpen;
  const mobileMenuOpen = props.mobileMenuOpen;

  return (
    <div className="h-screen w-[75%] p-5 absolute inset-y-0 right-0 grid grid-rows-[20%_8%_8%_8%_8%_8%] border-l border-verydarkblue/5 bg-offwhite">
      <Image
        src={MobileMenuIconClosed}
        alt="mobilemenuclosed"
        width={30}
        className="justify-self-end cursor-pointer"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      />
      <Link href="/">
        <h5 className="font-semibold text-verydarkblue hover:text-softred">
          Home
        </h5>
      </Link>
      <Link href="/">
        <h5 className="font-semibold text-verydarkblue hover:text-softred">
          New
        </h5>
      </Link>
      <Link href="/">
        <h5 className="font-semibold text-verydarkblue hover:text-softred">
          Popular
        </h5>
      </Link>
      <Link href="/">
        <h5 className="font-semibold text-verydarkblue hover:text-softred">
          Trending
        </h5>
      </Link>
      <Link href="/">
        <h5 className="font-semibold text-verydarkblue hover:text-softred">
          Categories
        </h5>
      </Link>
    </div>
  );
}

export function DesktopMenu() {
  return (
    <div className="hidden sm:grid sm:grid-cols-[17%_17%_22%_22%_22%] justify-items-center items-center">
      <Link href="/">
        <h5 className="text-xs font-medium text-darkgrayishblue hover:text-softred">
          Home
        </h5>
      </Link>
      <Link href="/">
        <h5 className="text-xs font-medium text-darkgrayishblue hover:text-softred">
          New
        </h5>
      </Link>
      <Link href="/">
        <h5 className="text-xs font-medium text-darkgrayishblue hover:text-softred">
          Popular
        </h5>
      </Link>
      <Link href="/">
        <h5 className="text-xs font-medium text-darkgrayishblue hover:text-softred">
          Trending
        </h5>
      </Link>
      <Link href="/">
        <h5 className="text-xs font-medium text-darkgrayishblue hover:text-softred">
          Categories
        </h5>
      </Link>
    </div>
  );
}

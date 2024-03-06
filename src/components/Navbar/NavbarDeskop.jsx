import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavbarDeskop() {
  return (
    <div className="flex max-[1189px]:justify-between justify-evenly items-center h-fit w-[100%] p-[2rem_5%] absolute top-4">
      <div className="h-fill flex items-center justify-center gap-3">
        <div className="group/menu relative max-[1189px]:flex hidden h-fill items-center justify-center cursor-pointer">
          <Image
            className="object-cover"
            src={"/assets/icons/menu.svg"}
            width={45}
            height={45}
            alt="menu"
          />

          <div className="hidden group-hover/menu:flex absolute top-[27px] left-[0px] rounded-lg z-[1] text-white bg-[transparent] pt-10">
            <div className="flex flex-col gap-4 p-[20px_25px] rounded-[10px] bg-[rgba(0,0,0,0.8)] shadow-[0px_-10px_40px_-10px_#34300E]">
              <div className="flex gap-3 flex-col h-fit">
                <Link
                  className="font-zcool text-[18px] p-[5px_10px] font-inter p-[5px_10px] hover:underline rounded-md"
                  href={"/#home"}>
                  Home
                </Link>
                <Link
                  className="font-zcool text-[18px] hover:underline p-[5px_10px] font-inter"
                  href={"/#ido"}>
                  IDO
                </Link>
                <Link
                  className="font-zcool text-[18px] hover:underline p-[5px_10px] font-inter"
                  href={"/#tokenomics"}>
                  Tokenomics
                </Link>
                <Link
                  className="font-zcool text-[18px] hover:underline p-[5px_10px] font-inter"
                  href={"/#roadmap"}>
                  Roadmap
                </Link>
                <Link
                  className="font-zcool text-[18px] hover:underline p-[5px_10px] font-inter"
                  href={"/#comingsoon"}>
                  Coming Soon
                </Link>
              </div>
              <button className="bg-gradient-to-r from-[#ED0137] to-smurai-grade-orange rounded-[1.544rem] p-[10px_12px] text-[1.4rem] font-inter font-semibold text-white h-[45px] w-[145px] shadow-lg mt-[10px]">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>

        <Image
          className="object-cover translate-y-[15px]"
          src={"/assets/logo/main_logo.svg"}
          width={90}
          height={30}
          alt="site logo"
        />
        <p className="text-white font-zcool text-[3.2rem]">Saviour</p>
      </div>
      <div className="max-[1189px]:hidden h-fill bg-[#181918] flex items-center gap-[2.4rem] justify-center p-[1.6rem_2.4rem] text-white rounded-[2.1rem]">
        <Link className="font-zcool text-[2rem]" href="/#home">
          Home
        </Link>
        <Link className="font-zcool text-[2rem]" href="/#ido">
          IDO
        </Link>
        <Link className="font-zcool text-[2rem]" href="/#tokenomics">
          Tokenomics
        </Link>
        <Link className="font-zcool text-[2rem]" href="/#roadmap">
          Roadmap
        </Link>
        <Link className="font-zcool text-[2rem]" href="/#comingsoon">
          Coming Soon
        </Link>
      </div>
      <button className="bg-gradient-to-r from-[#ED0137] to-smurai-grade-orange rounded-[1.544rem] p-[10px_12px] text-[1.4rem] font-inter font-semibold text-white h-[45px] w-[145px] shadow-lg">
        Connect Wallet
      </button>
    </div>
  );
}

export default NavbarDeskop;

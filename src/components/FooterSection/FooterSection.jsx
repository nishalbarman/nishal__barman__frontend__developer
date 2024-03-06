import Image from "next/image";
import React from "react";

function FooterSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-[3rem] p-[4rem] bg-gradient-to-t from-[#120000] to-[#020505]">
      <Image width={200} height={163} src={"/assets/logo/logo2.png"} />
      <p
        style={{
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          backgroundImage: "linear-gradient(to right, #FE012A, #760107)",
        }}
        className="font-inter text-[2.4rem] font-bold">
        SITEMAP
      </p>
      <div className="flex gap-[5rem] items-center justify-center text-white text-[1.282rem] font-inter font-bold">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">IDO</p>
        <p className="cursor-pointer">Tokenomics</p>
        <p className="cursor-pointer">Road Map</p>
        <p className="cursor-pointer">Whitepaper</p>
        <p className="cursor-pointer">Pledge</p>
        <p className="cursor-pointer">NFT</p>
        <p className="cursor-pointer">Games</p>
      </div>
      <div className="flex items-center justify-center gap-[2rem] mt-[0.5%]">
        <Image
          src={"/assets/social/twitter.svg"}
          width={27.47}
          height={27.47}
        />
        <Image src={"/assets/social/fly.svg"} width={27.47} height={27.47} />
        <Image src={"/assets/social/mail.svg"} width={27.47} height={27.47} />
      </div>
    </div>
  );
}

export default FooterSection;

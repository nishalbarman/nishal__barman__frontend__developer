import Image from "next/image";
import React from "react";

function IntroSection() {
  return (
    <div className="flex bg-black w-[100%] items-center justify-around  p-[0px_13%]">
      <div className="flex flex-col justify-center items-center gap-10 basis-1/2 p-[3%_0]">
        <p className="font-shojumaru font-bold text-[4.4rem] text-samurai-red">
          Introduction
        </p>
        <p className="text-white font-zcool text-[2.4rem] leading-[3.5rem] after:content-['read more...']">
          We've all been in the mud once, and now we've decided to fight it out.
          Pay tribute to those pioneers of WEB3 and the warriors who dedicated
          their love to the blockchain. Save the lucky ones alive, join us to
          save the future! Our mission is to empower everyone to share wealth
          and succeed.
        </p>
        <button className="font-zcool text-[2.003rem] bg-gradient-to-r from-smurai-grade-red to-smurai-grade-orange p-[15px_21px] text-white rounded-[21px]">
          <span className="gap-[11px]">
            Documents
            <Image
              className="inline-block ml-[11px]"
              src={"/assets/icons/down.svg"}
              width={16}
              height={16}
            />
          </span>
        </button>
      </div>
      <div className="flex items-center justify-center basis-0.8/2">
        <Image
          className="object-contain"
          src={"/assets/images/danger-samurai.png"}
          width={600}
          height={723}
        />
      </div>
    </div>
  );
}

export default IntroSection;

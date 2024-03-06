import Image from "next/image";
import React from "react";

function FaqSection() {
  return (
    <div className="bg-[#0B0A0B] w-[100%] h-fit flex flex-col items-center text-white">
      <div className="bg-[#0B0A0B] w-[100%] flex flex-col items-center pt-[6rem] pb-[6rem] p-[0px_13%]">
        <div className="flex flex-col justify-center items-center w-[100%] gap-[7rem]">
          <div className="flex items-start justify-center gap-[9rem] w-[100%] h-[100%]">
            <div className="basis-0.6/2 h-[100%]">
              <div className="h-[100%] flex justify-center items-center">
                <Image
                  className="h-[503px] w-[503px] aspect-square"
                  height={503}
                  width={503}
                  src={"/assets/logo/logo.png"}
                />
              </div>
            </div>

            <div className="basis-1/2 flex flex-col items-center h-[100%] gap-[5rem]">
              <h3 className="text-samurai-red font-shojumaru text-[4.092rem]">
                FAQ
              </h3>
              <div className="flex flex-col items-center justify-center h-[100%] w-[100%] flex flex-col gap-7">
                <details className="transition duration-300 ease h-fit w-[100%] border-[1px] border-[#ED0137] rounded-[20px] p-[2rem]">
                  <summary className="flex justify-between items-center text-center text-[2rem] font-shojumaru p-[0px_2rem] cursor-pointer">
                    <p>1</p>
                    <p className="text-left self-center">
                      Why choose "Savior"?
                    </p>
                    <Image
                      src={"/assets/icons/down.svg"}
                      width={20}
                      height={20}
                    />
                  </summary>
                  <div className="bg-[#181818] text-white p-[2.5rem] rounded-[2rem] mt-[2.5rem]">
                    <p className="text-[1.5rem] leading-[2rem] font-zcool">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Laboriosam error ad, modi culpa beatae laborum aliquam
                      molestiae perferendis eveniet voluptatem nesciunt. Aliquam
                      ipsa hic odit beatae voluptate minus esse repellat.
                    </p>
                  </div>
                </details>

                <details className="transition duration-300 ease h-fit w-[100%] border-[1px] border-[#ED0137] rounded-[20px] p-[2rem]">
                  <summary className="flex justify-between items-center text-center text-[2rem] font-shojumaru p-[0px_2rem] cursor-pointer">
                    <p>2</p>
                    <p className="text-left self-center">
                      Why is the IDO duration so long?
                    </p>
                    <Image
                      src={"/assets/icons/down.svg"}
                      width={20}
                      height={20}
                    />
                  </summary>
                  <div className="bg-[#181818] text-white p-[2.5rem] rounded-[2rem] mt-[2.5rem]">
                    <p className="text-[1.5rem] leading-[2rem] font-zcool">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Laboriosam error ad, modi culpa beatae laborum aliquam
                      molestiae perferendis eveniet voluptatem nesciunt. Aliquam
                      ipsa hic odit beatae voluptate minus esse repellat.
                    </p>
                  </div>
                </details>

                <details className="transition duration-300 ease h-fit w-[100%] border-[1px] border-[#ED0137] rounded-[20px] p-[2rem]">
                  <summary className="flex justify-between items-center text-center text-[2rem] font-shojumaru p-[0px_2rem] cursor-pointer">
                    <p>3</p>
                    <p className="text-left self-center">
                      When will trading go live?
                    </p>
                    <Image
                      src={"/assets/icons/down.svg"}
                      width={20}
                      height={20}
                    />
                  </summary>
                  <div className="bg-[#181818] text-white p-[2.5rem] rounded-[2rem] mt-[2.5rem]">
                    <p className="text-[1.5rem] leading-[2rem] font-zcool">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Laboriosam error ad, modi culpa beatae laborum aliquam
                      molestiae perferendis eveniet voluptatem nesciunt. Aliquam
                      ipsa hic odit beatae voluptate minus esse repellat.
                    </p>
                  </div>
                </details>

                <details className="transition duration-300 ease h-fit w-[100%] border-[1px] border-[#ED0137] rounded-[20px] p-[2rem]">
                  <summary className="flex justify-between items-center text-center text-[2rem] font-shojumaru p-[0px_2rem] cursor-pointer">
                    <p>4</p>
                    <p className="text-left self-center">
                      When can we claim the tokens?
                    </p>
                    <Image
                      src={"/assets/icons/down.svg"}
                      width={20}
                      height={20}
                    />
                  </summary>
                  <div className="bg-[#181818] text-white p-[2.5rem] rounded-[2rem] mt-[2.5rem]">
                    <p className="text-[1.5rem] leading-[2rem] font-zcool">
                      After the IDO concludes, you can claim the tokens on our
                      official website.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;

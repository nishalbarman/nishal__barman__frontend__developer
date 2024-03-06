import React from "react";

function TopSection() {
  return (
    <div className="flex justify-center items-center bg-shamurai-with-sword min-h-[650px] bg-center bg-cover bg-no-repeat p-[6rem_13%] max-[600px]:p-[6rem_10px]">
      {/* <div className="max-[781px]:inline hidden h-fit p-[3rem] bg-[rgba(0,0,0,0.3)] rounded-[20px] mt-[60px] w-[100%]">
        <p className="font-shojumaru text-[4.5rem] text-white text-center leading-[119%]">
          Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
        </p>
      </div> */}
      <p className="max-[700px]:p-[5rem] max-[700px]:mt-[60px] max-[700px]:bg-[rgba(0,0,0,0.3)] rounded-[20px] font-shojumaru text-[4.5rem] text-white text-center leading-[119%] ">
        Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
      </p>
    </div>
  );
}

export default TopSection;

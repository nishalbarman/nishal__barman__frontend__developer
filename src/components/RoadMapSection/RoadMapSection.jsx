import Image from "next/image";
import React from "react";
import RoadMapItem from "./RoadMapItem";

function RoadMapSection() {
  return (
    <div className="bg-black w-[100%] h-fit flex flex-col items-center text-white">
      <div className="bg-roadmap-bg bg-no-repeat w-[100%] flex flex-col items-center p-[6rem_13%] max-[600px]:p-[6rem_10px]">
        <div className="flex flex-col items-center w-[100%] gap-[7rem]">
          <h3 className="text-samurai-red font-shojumaru text-[4.092rem]">
            Road Map
          </h3>
          <div className="flex items-center justify-center flex-wrap gap-[9rem] max-[1200px]:gap-[5rem] max-[500px]:gap-[5rem] w-[100%] h-[100%]">
            <RoadMapItem
              imageUrl="/assets/roadmap/card_1.png"
              title={"Phase 1"}
              description={"Technical Readiness and Smart Contract Audit"}
            />

            <RoadMapItem
              imageUrl="/assets/roadmap/card_2.png"
              title={"Phase 2"}
              description={"Increase Liquidity and Trading Volume"}
            />

            <RoadMapItem
              imageUrl="/assets/roadmap/card_3.png"
              title={"Phase 3"}
              description={"Community Building and Marketing"}
            />
            <RoadMapItem
              imageUrl="/assets/roadmap/card_4.png"
              title={"Phase 4"}
              description={"Ecosystem Expansion and Partnerships"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadMapSection;

"use client";

import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";

function WalletConnectNavbar() {
  const { open } = useWeb3Modal();

  return (
    <button
      onClick={() => {
        open();
      }}
      className="bg-gradient-to-r from-[#ED0137] to-smurai-grade-orange rounded-[1.544rem] p-[10px_12px] text-[1.4rem] font-inter font-semibold text-white h-[45px] w-[145px] shadow-lg mt-[10px]">
      Connect Wallet
    </button>
  );
}

export default WalletConnectNavbar;

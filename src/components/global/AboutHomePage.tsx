import Image from "next/image";
import React from "react";
import ImgProfile2 from "../../../public/pb2.png";

export default function AboutHomePage() {
  return (
    <div className="mt-36">
      <h1 className="text-4xl font-bold mb-2">A prepos</h1>
      <p className="mb-10">Decouvrez quelques details sur moi.</p>

      <div className="grid grid-cols-2 gap-8">
        <div className="profileImg ">
          <Image src={ImgProfile2} alt="" className="" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-[200px] border border-red-500"></div>
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <h1 className="text-2xl font-semibold">Description</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              atque aliquid adipisci repudiandae fuga vel aut odio aliquam
              debitis nemo! Libero, velit aspernatur quisquam reiciendis nobis
              doloremque quasi nostrum beatae.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              atque aliquid adipisci repudiandae fuga vel aut odio aliquam
              debitis nemo! Libero, velit aspernatur quisquam reiciendis nobis
              doloremque quasi nostrum beatae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

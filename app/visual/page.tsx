// app/visual/page.tsx
"use client";

import Image from "next/image";

export default function VisualPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Outer Container */}
      <div
        className="relative w-[300px] h-[80px] rounded-lg shadow-lg flex"
        style={{ backgroundColor: "#0142A3" }}
      >
        {/* Bitcoin Icon */}
        <div className="absolute -top-2 -left-2">
          <Image
            src="https://i.imgur.com/Uh6IvcO.png"
            alt="Bitcoin Icon"
            width={16}
            height={16}
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Left Section */}
        <div className="w-[150px] h-full flex items-center justify-center">
          <h1 className="text-white text-sm font-medium">Hello</h1>
        </div>

        {/* Right Section */}
        <div className="w-[150px] h-full flex flex-col justify-center space-y-1 px-4">
          <div className="flex items-center space-x-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#FFADAD" }}
            ></span>
            <span className="text-white text-xs">Point 1</span>
          </div>
          <div className="flex items-center space-x-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#C7FFAD" }}
            ></span>
            <span className="text-white text-xs">Point 2 xxxx</span>
          </div>
        </div>
      </div>
    </div>
  );
}

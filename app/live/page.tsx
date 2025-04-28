"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

// Load Poppins font with specified weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const formatTime = (date: Date) => {
  return date.toLocaleTimeString("en-GB", { hour12: false });
};

interface Channel {
  id: string;
  name: string;
  link: string; // Add link property for the iframe src
}

const channels: Channel[] = [
  {
    id: "skys2",
    name: "Sky Sports Cricket HD",
    link: "//stream.crichd.sc/update/skys2.php",
  },
  {
    id: "starsports",
    name: "Star Sports HD",
    link: "//stream.crichd.sc/update/star.php",
  },
  {
    id: "starsportshindi",
    name: "Star Sports HD Hindi",
    link: "//stream.crichd.sc/update/star1hi.php",
  },
  {
    id: "willow",
    name: "Willow Cricket HD",
    link: "//stream.crichd.sc/update/willowcricket.php",
  },
  { id: "ptv", name: "PTV Sports", link: "//stream.crichd.sc/update/ptv.php" },
  {
    id: "willowextra",
    name: "Willow Cricket Extra",
    link: "//stream.crichd.sc/update/willowextra.php",
  },
  {
    id: "asports",
    name: "A Sports HD",
    link: "//stream.crichd.sc/update/asportshd.php",
  },
  {
    id: "foxcricket",
    name: "Fox Cricket 501 HD",
    link: "//stream.crichd.sc/update/fox501.php",
  },
  {
    id: "supersport",
    name: "SuperSport Cricket",
    link: "//stream.crichd.sc/update/supersport.php",
  },
  { id: "ten1", name: "TEN 1", link: "//stream.crichd.sc/update/ten1.php" },
  {
    id: "tensportspk",
    name: "TEN Sports PK",
    link: "//stream.crichd.sc/update/tensp.php",
  },
];

const Live: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className={`w-[80%] mx-auto p-4 pt-[120px] mb-[200px] ${poppins.className}`}
    >
      <div className="flex items-center justify-between">
        {/* Title */}
        <h1 className="flex items-center justify-center text-2xl font-bold text-gray-800 mb-2">
          Cricket Matches LIVE!
        </h1>
        {/* Time */}
        <div className="flex items-center justify-between">
          <div></div>
          <div className="text-gray-900 font-semibold text-md ">
            {formatTime(currentTime)}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-center border-collapse">
          <thead>
            <tr className="bg-gray-600 text-white">
              <th className="p-2 border border-gray-500">CHANNEL NAME</th>
              <th className="p-2 border border-gray-500">CHANNEL LINK</th>
            </tr>
          </thead>
          <tbody>
            {channels.map((channel) => (
              <tr key={channel.id} className="border-b border-gray-300">
                <td className="p-2 border border-gray-300">{channel.name}</td>
                <td className="p-2 border border-gray-300">
                  <Link href={`/live/${channel.id}`}>
                    <button className="rounded px-14  -mt-4 py-0.5  overflow-hidden group bg-green-600 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 ease-out duration-300 cursor-pointer">
                      WATCH
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Live;

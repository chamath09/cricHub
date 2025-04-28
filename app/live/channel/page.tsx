"use client";

import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

// Load Poppins font with specified weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

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

const Channel: React.FC = () => {
  return (
    <div
      className={`w-[80%] mx-auto p-4 pt-[200px] mb-[200px] ${poppins.className}`}
    >
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Cricket Matches LIVE!
      </h1>

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
                  <Link href={`/live/channel/${channel.id}`}>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm">
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

export default Channel;
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const Live = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Clean up when component unmounts
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-GB", { hour12: false });
  };

  const matches = [
    {
      id: 1,
      logo: "/cricket-logo.png",
      date: "Today",
      time: "05:30",
      competition: "International Cricket",
      title: "Cricket Matches Live!",
    },
    {
      id: 2,
      logo: "/ipl-logo.png",
      date: "Today",
      time: "05:30",
      competition: "IPL T20 Live",
      title: "Indian Premier League T20",
    },
    {
      id: 3,
      logo: "/psl-logo.png",
      date: "Today",
      time: "05:30",
      competition: "PSLT20",
      title: "Pakistan Super League T20",
    },
  ];

  return (
    <div className="w-[80%] mx-auto p-4 pt-[200px] mb-[200px]">
      {/* Timezone selector */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <label className="font-medium mr-2">Change Timezone:</label>
          <select className="p-2 border rounded">
            <option>GMT +05:30 Asia/Calcutta</option>
            {/* Add more options */}
          </select>
        </div>
        <div className="text-gray-700 font-semibold text-sm">
          {formatTime(currentTime)}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-center">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-2">#</th>
              <th className="p-2">Date</th>
              <th className="p-2">Time</th>
              <th className="p-2">Com</th>
              <th className="p-2">Title</th>
              <th className="p-2">Live</th>
              <th className="p-2">Sts</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match) => (
              <tr key={match.id} className="border-b">
                <td className="p-2">
                  <Image
                    src={match.logo}
                    alt="logo"
                    className="w-6 h-6 mx-auto"
                  />
                </td>
                <td className="p-2">{match.date}</td>
                <td className="p-2">{match.time}</td>
                <td className="p-2">{match.competition}</td>
                <td className="p-2 font-bold">{match.title}</td>
                <td className="p-2">
                  <Link href="/live/channel">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm">
                      Watch
                    </button>
                  </Link>
                </td>
                <td className="p-2 text-red-500 font-bold">🔴 Live</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Live;

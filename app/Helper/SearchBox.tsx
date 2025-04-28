import React from "react";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6"; // Changed icon to a group one, suitable for sports fans

const SearchBox = () => {
  return (
    <div className="bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%] items-center justify-items-center shadow-lg">
      {/* 1st search input */}
      <div className="flex items-center space-x-6">
        <FaMapMarkerAlt className="w-6 h-6 text-green-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Venue</p>
          <input
            type="text"
            placeholder="Which stadium or venue?"
            className="outline-none border-none placeholder:text-gray-800"
          />
        </div>
      </div>

      {/* 2nd search input */}
      <div className="flex items-center space-x-6">
        <FaCalendar className="w-6 h-6 text-green-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Match Date</p>
          <input
            type="date"
            className="outline-none border-none placeholder:text-gray-800"
          />
        </div>
      </div>

      {/* 3rd search input */}
      <div className="flex items-center space-x-6">
        <FaCalendar className="w-6 h-6 text-green-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Tournament End Date</p>
          <input
            type="date"
            className="outline-none border-none placeholder:text-gray-800"
          />
        </div>
      </div>

      {/* 4th search input */}
      <div className="flex items-center space-x-6">
        <FaUsers className="w-6 h-6 text-green-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Tickets</p>
          <p className="text-base font-normal">1 Ticket</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

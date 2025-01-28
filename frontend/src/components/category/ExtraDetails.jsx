import React, { useState } from "react";

const ExtraDetails = () => {
  const [openTab, setOpenTab] = useState(1);

  const activeClasses =
    "border-l border-t border-r rounded-t border-black text-black bg-orange-600";
  const inactiveClasses = "text-blue-500 hover:text-blue-700";

  return (
    <div className="p-6">
      <ul className="flex border-b border-gray-400">
        <li
          onClick={() => setOpenTab(1)}
          className={openTab === 1 ? "-mb-px mr-1" : "mr-1"}
        >
          <button
            type="button"
            className={`bg-white inline-block py-2 px-4 font-semibold ${
              openTab === 1 ? activeClasses : inactiveClasses
            }`}
          >
            DESCRIPTION
          </button>
        </li>
        <li
          onClick={() => setOpenTab(2)}
          className={openTab === 2 ? "-mb-px mr-1" : "mr-1"}
        >
          <button
            type="button"
            className={`bg-white inline-block py-2 px-4 font-semibold ${
              openTab === 2 ? activeClasses : inactiveClasses
            }`}
          >
            ADDITIONAL INFORMATION
          </button>
        </li>
        <li
          onClick={() => setOpenTab(3)}
          className={openTab === 3 ? "-mb-px mr-1" : "mr-1"}
        >
          <button
            type="button"
            className={`bg-white inline-block py-2 px-4 font-semibold ${
              openTab === 3 ? activeClasses : inactiveClasses
            }`}
          >
            REVIEWS (0)
          </button>
        </li>
      </ul>
      <div className="w-full">
        <div
          style={{ display: openTab === 1 ? "block" : "none" }}
          className="p-3"
        >
          <h1 className="text-lg font-bold font-serif">Description</h1>
          <p className="my-1">
            Discover the elegance of Agaria white marble at Bhandari Mar. We
            offer premium quality marble in customizable sizes for various
            applications including flooring, countertops, and cladding. Elevate
            your space with the enduring beauty of Agaria white marble from our
            trusted source in Kishangarh, Rajasthan, India.
          </p>
        </div>
        <div style={{ display: openTab === 2 ? "block" : "none" }} className="p-3">
          <h1 className="text-lg font-bold font-serif">Additional Information</h1>
        </div>
        <div style={{ display: openTab === 3 ? "block" : "none" }} className="p-3">
          <h1 className="text-lg font-bold font-serif">Reviews</h1>
        </div>
      </div>
    </div>
  );
};

export default ExtraDetails;

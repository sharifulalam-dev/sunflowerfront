// AllVisas.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AllVisas = () => {
  const navigate = useNavigate();

  // Static data
  const allVisas = [
    {
      id: 1,
      country: "USA",
      visaType: "Tourist visa",
      processingTime: "5 days",
      fee: "$160",
      countryImage: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      country: "Canada",
      visaType: "Student visa",
      processingTime: "10 days",
      fee: "$120",
      countryImage: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      country: "UK",
      visaType: "Work visa",
      processingTime: "7 days",
      fee: "$200",
      countryImage: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      country: "Australia",
      visaType: "Tourist visa",
      processingTime: "6 days",
      fee: "$150",
      countryImage: "https://via.placeholder.com/150",
    },
  ];

  const [filteredVisas, setFilteredVisas] = useState(allVisas);
  const [selectedVisaType, setSelectedVisaType] = useState("");

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSelectedVisaType(value);
    if (value === "") {
      setFilteredVisas(allVisas);
    } else {
      setFilteredVisas(allVisas.filter((visa) => visa.visaType === value));
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">All Visas</h1>

      {/* Filter Dropdown */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Filter by Visa Type:</label>
        <select
          value={selectedVisaType}
          onChange={handleFilterChange}
          className="w-full md:w-1/3 border border-gray-300 rounded p-2"
        >
          <option value="">All</option>
          <option value="Tourist visa">Tourist visa</option>
          <option value="Student visa">Student visa</option>
          <option value="Work visa">Work visa</option>
        </select>
      </div>

      {/* Visa Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredVisas.map((visa) => (
          <div key={visa.id} className="border rounded p-4 shadow-md">
            <img
              src={visa.countryImage}
              alt={visa.country}
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-bold mb-2">{visa.country}</h2>
            <p>Visa Type: {visa.visaType}</p>
            <p>Processing Time: {visa.processingTime}</p>
            <p>Fee: {visa.fee}</p>
            <button
              onClick={() => navigate(`/visa-details/1`)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            >
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;

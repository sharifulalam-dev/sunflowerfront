// MyApplications.jsx
import React, { useState } from "react";
import Swal from "sweetalert2";

const MyApplications = () => {
  // Demo data
  const [applications, setApplications] = useState([
    {
      id: 1,
      country: "USA",
      countryImage: "https://via.placeholder.com/150",
      visaType: "Tourist visa",
      processingTime: "5 days",
      fee: "$160",
      validity: "10 years",
      applicationMethod: "Online",
      appliedDate: "2024-12-01",
      applicantName: "John Doe",
      applicantEmail: "johndoe@example.com",
    },
    {
      id: 2,
      country: "Canada",
      countryImage: "https://via.placeholder.com/150",
      visaType: "Student visa",
      processingTime: "10 days",
      fee: "$120",
      validity: "5 years",
      applicationMethod: "Offline",
      appliedDate: "2024-12-02",
      applicantName: "Jane Smith",
      applicantEmail: "janesmith@example.com",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApplications, setFilteredApplications] =
    useState(applications);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredApplications(applications);
    } else {
      setFilteredApplications(
        applications.filter((app) =>
          app.country.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedApplications = applications.filter((app) => app.id !== id);
        setApplications(updatedApplications);
        setFilteredApplications(updatedApplications);
        Swal.fire(
          "Cancelled!",
          "Your application has been cancelled.",
          "success"
        );
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">My Visa Applications</h1>

      {/* Search Field */}
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by country name"
          className="w-full md:w-1/2 border border-gray-300 rounded p-2 mb-2"
        />
        <button
          onClick={handleSearch}
          className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* Application Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredApplications.map((app) => (
          <div key={app.id} className="border rounded p-4 shadow-md">
            <img
              src={app.countryImage}
              alt={app.country}
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-bold">{app.country}</h2>
            <p>Visa Type: {app.visaType}</p>
            <p>Processing Time: {app.processingTime}</p>
            <p>Fee: {app.fee}</p>
            <p>Validity: {app.validity}</p>
            <p>Application Method: {app.applicationMethod}</p>
            <p>Applied Date: {app.appliedDate}</p>
            <p>Applicant's Name: {app.applicantName}</p>
            <p>Applicant's Email: {app.applicantEmail}</p>
            <div className="mt-4">
              <button
                onClick={() => handleCancel(app.id)}
                className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApplications;

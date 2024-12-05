// VisaDetails.jsx
import React, { useState } from "react";
import Swal from "sweetalert2";

const VisaDetails = ({ visaDetails, user }) => {
  const [showModal, setShowModal] = useState(false);
  const [applicationData, setApplicationData] = useState({
    email: user?.email || "",
    firstName: "",
    lastName: "",
    appliedDate: new Date().toISOString().split("T")[0],
    fee: visaDetails?.fee || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData({ ...applicationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate storing data in the database
    console.log("Application Submitted:", applicationData);

    Swal.fire({
      title: "Success!",
      text: "Your visa application has been submitted.",
      icon: "success",
      confirmButtonText: "OK",
    });

    setShowModal(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Visa Details</h1>

      {/* Visa Information Section */}
      <div className="space-y-4">
        <img
          src={visaDetails?.countryImage}
          alt={visaDetails?.countryName}
          className="w-full h-48 object-cover rounded"
        />
        <h2 className="text-xl font-semibold">{visaDetails?.countryName}</h2>
        <p>Visa Type: {visaDetails?.visaType}</p>
        <p>Processing Time: {visaDetails?.processingTime}</p>
        <p>Required Documents: {visaDetails?.requiredDocuments.join(", ")}</p>
        <p>Description: {visaDetails?.description}</p>
        <p>Age Restriction: {visaDetails?.ageRestriction}</p>
        <p>Fee: ${visaDetails?.fee}</p>
        <p>Validity: {visaDetails?.validity}</p>
        <p>Application Method: {visaDetails?.applicationMethod}</p>
      </div>

      {/* Apply Button */}
      <div className="mt-6">
        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Apply for the Visa
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Apply for the Visa</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={applicationData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={applicationData.firstName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={applicationData.lastName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Applied Date</label>
                <input
                  type="text"
                  name="appliedDate"
                  value={applicationData.appliedDate}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-gray-700">Fee</label>
                <input
                  type="text"
                  name="fee"
                  value={applicationData.fee}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                  readOnly
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;

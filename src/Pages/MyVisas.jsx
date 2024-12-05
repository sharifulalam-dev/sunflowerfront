// MyVisas.jsx
import React, { useState } from "react";
import Swal from "sweetalert2";

const MyVisas = () => {
  // Demo data
  const [visas, setVisas] = useState([
    {
      id: 1,
      country: "USA",
      countryImage: "https://via.placeholder.com/150",
      visaType: "Tourist visa",
      processingTime: "5 days",
      fee: "$160",
      validity: "10 years",
      applicationMethod: "Online",
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
    },
  ]);

  const [currentVisa, setCurrentVisa] = useState(null);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setVisas(visas.filter((visa) => visa.id !== id));
        Swal.fire("Deleted!", "Your visa has been deleted.", "success");
      }
    });
  };

  const handleUpdate = (visa) => {
    setCurrentVisa(visa);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setVisas(
      visas.map((visa) => (visa.id === currentVisa.id ? currentVisa : visa))
    );

    Swal.fire("Updated!", "Your visa has been updated.", "success");
    setCurrentVisa(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentVisa({ ...currentVisa, [name]: value });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">My Added Visas</h1>

      {/* Visa Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visas.map((visa) => (
          <div key={visa.id} className="border rounded p-4 shadow-md">
            <img
              src={visa.countryImage}
              alt={visa.country}
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-bold">{visa.country}</h2>
            <p>Visa Type: {visa.visaType}</p>
            <p>Processing Time: {visa.processingTime}</p>
            <p>Fee: {visa.fee}</p>
            <p>Validity: {visa.validity}</p>
            <p>Application Method: {visa.applicationMethod}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleUpdate(visa)}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(visa.id)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      {currentVisa && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Update Visa</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Country</label>
                <input
                  type="text"
                  name="country"
                  value={currentVisa.country}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Visa Type</label>
                <input
                  type="text"
                  name="visaType"
                  value={currentVisa.visaType}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Processing Time</label>
                <input
                  type="text"
                  name="processingTime"
                  value={currentVisa.processingTime}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Fee</label>
                <input
                  type="text"
                  name="fee"
                  value={currentVisa.fee}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Validity</label>
                <input
                  type="text"
                  name="validity"
                  value={currentVisa.validity}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Application Method
                </label>
                <input
                  type="text"
                  name="applicationMethod"
                  value={currentVisa.applicationMethod}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2 mt-1"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setCurrentVisa(null)}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyVisas;

// AddVisaPage.jsx
import React, { useState } from "react";
import Swal from "sweetalert2";

const AddVisaPage = () => {
  const [formData, setFormData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "Tourist visa",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
  });

  const visaTypes = ["Tourist visa", "Student visa", "Official visa"];
  const documentOptions = [
    "Valid passport",
    "Visa application form",
    "Recent passport-sized photograph",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const updatedDocuments = checked
      ? [...formData.requiredDocuments, value]
      : formData.requiredDocuments.filter((doc) => doc !== value);
    setFormData({ ...formData, requiredDocuments: updatedDocuments });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating a database save operation
    console.log("Visa added:", formData);

    // Show success message
    Swal.fire({
      title: "Success!",
      text: "Visa added successfully!",
      icon: "success",
      confirmButtonText: "OK",
    });

    // Reset the form
    setFormData({
      countryImage: "",
      countryName: "",
      visaType: "Tourist visa",
      processingTime: "",
      requiredDocuments: [],
      description: "",
      ageRestriction: "",
      fee: "",
      validity: "",
      applicationMethod: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Add Visa</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Country Image URL</label>
          <input
            type="text"
            name="countryImage"
            value={formData.countryImage}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="Enter image URL"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Country Name</label>
          <input
            type="text"
            name="countryName"
            value={formData.countryName}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="Enter country name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Visa Type</label>
          <select
            name="visaType"
            value={formData.visaType}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2 mt-1"
          >
            {visaTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700">Processing Time</label>
          <input
            type="text"
            name="processingTime"
            value={formData.processingTime}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="e.g., 7 days"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Required Documents</label>
          <div className="space-y-2">
            {documentOptions.map((doc, index) => (
              <div key={index}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value={doc}
                    checked={formData.requiredDocuments.includes(doc)}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  {doc}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="Add a description..."
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700">Age Restriction</label>
          <input
            type="number"
            name="ageRestriction"
            value={formData.ageRestriction}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="e.g., 18"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Fee</label>
          <input
            type="number"
            name="fee"
            value={formData.fee}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="e.g., 100"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Validity</label>
          <input
            type="text"
            name="validity"
            value={formData.validity}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="e.g., 1 year"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Application Method</label>
          <input
            type="text"
            name="applicationMethod"
            value={formData.applicationMethod}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="e.g., Online"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Visa
        </button>
      </form>
    </div>
  );
};

export default AddVisaPage;

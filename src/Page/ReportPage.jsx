import React from "react";
import { useLocation } from "react-router-dom";

const ReportPage = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Generated Report</h2>
      {formData ? (
        <div>
          <p className="mb-2"><strong>Name + Surname:</strong> {formData.name}</p>
          <p className="mb-2"><strong>Document Date:</strong> {new Date(formData.documentDate).toLocaleDateString()}</p>
          <p className="mb-2"><strong>Duration:</strong> {formData.duration}</p>
          <p className="mb-2"><strong>Amount:</strong> {formData.amount}</p>
          <p className="mb-2"><strong>Place:</strong> {formData.place}</p>
          <p className="mb-2"><strong>ID Card Number:</strong> {formData.idCardNumber}</p>
        </div>
      ) : (
        <p>No data available. Please fill the form first.</p>
      )}
    </div>
  );
};

export default ReportPage;

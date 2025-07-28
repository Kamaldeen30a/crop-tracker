import React, { useState, useEffect } from "react";
import CropForm from "./components/CropForm";
import CropTable from "./components/CropTable";
import Papa from "papaparse";

function App() {
  const LOCAL_KEY = "crop_data";

  const [crops, setCrops] = useState(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(crops));
  }, [crops]);

  const addCrop = (crop) => {
    setCrops((prev) => [...prev, crop]);
  };

  const clearAll = () => {
    if (confirm("Are you sure you want to clear all records?")) {
      localStorage.removeItem(LOCAL_KEY);
      setCrops([]);
    }
  };

  const exportToCSV = () => {
    const csv = Papa.unparse(crops);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "crop_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-md rounded">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
        Crop Yield & Expense Tracker
      </h1>

      <CropForm onAdd={addCrop} />

      <div className="flex flex-wrap gap-4 my-4">
        <button
          onClick={clearAll}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Clear All
        </button>

        <button
          onClick={exportToCSV}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Export to CSV
        </button>
      </div>

      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Crop Name</th>
            <th className="p-2 border">Yield</th>
            <th className="p-2 border">Expenses</th>
            <th className="p-2 border">Date Planted</th>
            <th className="p-2 border">Acreage</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {crops.map((crop, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border">{crop.name}</td>
              <td className="p-2 border">{crop.yield}</td>
              <td className="p-2 border">{crop.expenses}</td>
              <td className="p-2 border">{crop.datePlanted}</td>
              <td className="p-2 border">{crop.acreage}</td>
              <td className="p-2 border">{crop.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

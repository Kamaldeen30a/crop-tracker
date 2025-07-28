import React, { useState } from "react";

const cropOptions = [
  "Maize",
  "Rice",
  "Cassava",
  "Yam",
  "Tomato",
  "Pepper",
  "Groundnut",
  "Sorghum",
  "Soybean",
  "Plantain",
  "Cocoa",
  "Palm oil"
];

function CropForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    yield: "",
    expenses: "",
    datePlanted: "",
    acreage: "",
    status: "Planted",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      name: "",
      yield: "",
      expenses: "",
      datePlanted: "",
      acreage: "",
      status: "Planted",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
    >
      <select
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-4 py-2"
      >
        <option value="">Select Crop</option>
        {cropOptions.map((crop) => (
          <option key={crop} value={crop}>
            {crop}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="yield"
        value={formData.yield}
        onChange={handleChange}
        placeholder="Yield (kg)"
        className="w-full border border-gray-300 rounded px-4 py-2"
      />

      <input
        type="number"
        name="expenses"
        value={formData.expenses}
        onChange={handleChange}
        placeholder="Expenses (₦)"
        className="w-full border border-gray-300 rounded px-4 py-2"
      />

      <input
        type="date"
        name="datePlanted"
        value={formData.datePlanted}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-4 py-2"
      />

      <input
        type="number"
        name="acreage"
        value={formData.acreage}
        onChange={handleChange}
        placeholder="Acreage (hectares)"
        className="w-full border border-gray-300 rounded px-4 py-2"
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Add Crop
      </button>
    </form>
  );
}

export default CropForm;

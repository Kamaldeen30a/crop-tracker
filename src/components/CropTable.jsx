import React from 'react';

function CropTable({ crops, onDelete }) {
  if (crops.length === 0) return <p>No crops added yet.</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Crop</th>
          <th>Date</th>
          <th>Acreage</th>
          <th>Expenses</th>
          <th>Yield</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {crops.map((crop, index) => (
          <tr key={index}>
            <td>{crop.name}</td>
            <td>{crop.date}</td>
            <td>{crop.acreage}</td>
            <td>{crop.expenses}</td>
            <td>{crop.yield}</td>
            <td>
              <button onClick={() => onDelete(index)}>🗑️ Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CropTable;

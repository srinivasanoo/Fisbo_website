import React, { useState } from "react";

const QuotationEditor = ({ items, onClose }) => {
  const [editedItems, setEditedItems] = useState(
    items.map(item => ({
      ...item,
      price: item.price || "",
      sellingPrice: item.sellingPrice || "",
    }))
  );

  const handleChange = (index, field, value) => {
    const updatedItems = [...editedItems];
    updatedItems[index][field] = value;
    setEditedItems(updatedItems);
  };

  const handleSave = () => {
    // Save updated items to localStorage under "fibso_quotation"
    localStorage.setItem("fibso_quotation", JSON.stringify(editedItems));

    // Optionally: you can remove cart here too if needed
    // localStorage.removeItem("fibso_cart");

    // Close the editor
    onClose();
  };

  return (
    <div className="quotation-editor bg-white p-6 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Edit Quotation Items</h2>

      <div className="space-y-4">
        {editedItems.map((item, index) => (
          <div key={item.id} className="border p-4 rounded">
            <p className="font-medium">{item.name}</p>
            <img src={item.image} alt={item.name} className="w-24 h-24 my-2" />
            <p>Quantity: {item.quantity}</p>
            <div className="flex gap-4 mt-2">
              <input
                type="number"
                placeholder="Price"
                value={item.price}
                onChange={(e) => handleChange(index, "price", e.target.value)}
                className="border px-2 py-1 rounded w-32"
              />
              <input
                type="number"
                placeholder="Selling Price"
                value={item.sellingPrice}
                onChange={(e) =>
                  handleChange(index, "sellingPrice", e.target.value)
                }
                className="border px-2 py-1 rounded w-32"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6 space-x-2">
        <button
          onClick={onClose}
          className="bg-gray-300 text-black px-4 py-2 rounded"
        >
          Close
        </button>
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default QuotationEditor;

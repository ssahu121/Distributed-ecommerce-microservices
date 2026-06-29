import { useState } from "react";
import axios from "axios";
import "../css/Admin.css";

function AddProduct() {
  const [image, setImage] = useState("");

  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      ...product,
      image: image,
    };

     console.log("Sending Product:", newProduct);

  try {
    const res = await axios.post(
      "http://localhost:8083/products",
      newProduct
    );

      alert("✅ Product Added Successfully");

      setProduct({
        name: "",
        description: "",
        category: "",
        price: "",
        quantity: "",
      });

      setImage("");
    } catch (err) {
      console.log("Full Error:", err);
      console.log("Response:", err.response);
      console.log("Status:", err.response?.status);
      console.log("Data:", err.response?.data);

      alert(JSON.stringify(err.response?.data, null, 2));
    }
  };

  return (
    <div className="add-product">
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />

        <textarea
          placeholder="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="Category"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          placeholder="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          placeholder="Quantity"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        {image && (
          <img
            src={image}
            alt="Preview"
            style={{
              width: "180px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "10px",
              margin: "15px 0",
            }}
          />
        )}

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;

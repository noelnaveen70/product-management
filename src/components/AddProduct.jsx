import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
} from "@mui/material";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Product:", formData);
  };

  return (
    <Paper sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h4" gutterBottom>
        Add New Product
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="Product Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Image URL"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <TextField
          label="Rating"
          name="rating"
          type="number"
          inputProps={{ step: "0.1" }}
          value={formData.rating}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained">
          Submit....
        </Button>
      </Box>
    </Paper>
  );
};

export default AddProduct;

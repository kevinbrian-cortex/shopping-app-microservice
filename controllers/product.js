const User = require("../model/user");
const Product = require("../model/product");

const getProducts = async (req, res) => {
  try {
    // Write the code to get the product details
    const results = Product.find({});
    
    res.status(200).send(results);
  } catch (error) {
    return res.status(500).send(error?.message);
  }
};

const addProduct = async (req, res) => {
  // Write the code to add the product details
};

const deleteProduct = async (req, res) => {
  // Write the code to delete the product details
};

module.exports = { getProducts, addProduct, deleteProduct };

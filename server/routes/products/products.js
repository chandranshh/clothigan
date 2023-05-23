//product.js

const express = require("express");
const router = express.Router();
const Clothes = require("../../models/Clothings");

//create a product
router.post("/", async (req, res) => {
  const {
    name,
    price,
    image,
    description,
    gender,
    quantity,
    inStock = true,
  } = req.body;

  try {
    const product = await Clothes.create({
      name,
      price,
      image,
      description,
      gender,
      quantity,
      inStock,
    });

    return res.status(201).json({ product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

//get all products
router.get("/", async (req, res) => {
  try {
    const products = await Clothes.find({});

    return res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

//get a single product
router.get("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Clothes.findById(productId);

    if (!product) {
      return res.status(400).json({ error: "Product does not exist" });
    } else {
      return res.status(200).json({ product });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

//update a product
router.put("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;

    if (!productId) {
      return res.status(400).json({ error: "No product ID received" });
    } else {
      const product = await Clothes.findById(productId);
      if (!product) {
        return res.status(400).json({ error: "Product does not exist" });
      } else {
        const { name, price, image, description, gender, quantity, inStock } =
          req.body;

        const updatedProduct = await Clothes.findOneAndUpdate(
          { _id: productId },
          {
            $set: {
              name: name || undefined,
              price: price || undefined,
              image: image || undefined,
              description: description || undefined,
              gender: gender || undefined,
              quantity: quantity || undefined,
              inStock: inStock || true,
            },
          },
          { new: true }
        );
        res.status(200).json({ updatedProduct });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

//!TODO delete a product

module.exports = router;

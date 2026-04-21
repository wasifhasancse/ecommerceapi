const express = require("express");
const app = express();
const categoriesResponse = require("./data/categoriesData");
const productsResponse = require("./data/productsData");
const shopsResponse = require("./data/shopsData");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Wellcome to the API Server!");
});

app.get("/api/data", (req, res) => {
  const data = [
    {
      id: 1,
      name: "Wasif Hasan",
    },
  ];
  res.json(data);
});

app.get("/categories", (req, res) => {
  res.json(categoriesResponse);
});

app.get("/api/categories", (req, res) => {
  res.redirect("/categories");
});

app.get("/products", (req, res) => {
  res.json(productsResponse);
});

app.get("/products/:slug", (req, res) => {
  const product = productsResponse.products.find(
    (item) => item.slug === req.params.slug,
  );

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
      slug: req.params.slug,
    });
  }

  return res.json({
    success: true,
    product,
  });
});

app.get("/api/products", (req, res) => {
  res.json(productsResponse);
});

app.get("/api/products/:slug", (req, res) => {
  const product = productsResponse.products.find(
    (item) => item.slug === req.params.slug,
  );

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
      slug: req.params.slug,
    });
  }

  return res.json({
    success: true,
    product,
  });
});

app.get("/shops", (req, res) => {
  res.json(shopsResponse);
});

app.get("/api/shops", (req, res) => {
  res.json(shopsResponse);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

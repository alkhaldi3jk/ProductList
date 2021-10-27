const products = require("../../products");
const Product = require("../../db/models/Product");

exports.productListFetch = async (req, res) => {
  try {
    const products = await Product.find();

    return res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.productListCreate = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
    return res.end();
  } catch {
    return res.status(500).json({ message: error.message });
  }
};

exports.productListDelete = async (req, res) => {
  // const productId=req.params.productId;
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);
    await products.filter((productId) => product.id !== +productId);
    if (product) {
      await product.remove();
      return res.status(204).end();
    } else {
      return res.status(404).json({ message: "not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.productListUpdate = async (req, res) => {
  // const productId=req.params.productId;
  const { productId } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(productId,{_id: productId}, req.body,{new:true});

    if (product) {
    //   const updatedProduct = await product.updateOne(req.body);
      return res.status(204).jason(updatedProduct);
    } else {
      return res.status(404).json({ message: "not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

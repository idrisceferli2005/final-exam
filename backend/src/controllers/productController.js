import product from "../models/productModel.js"


export const addProducts = async (req, res) => {
 try {
    const newProduct = new product(req.body)
    await newProduct.save()
    return res.status(201).json({success: true, message:"Product added"})
 } catch (error) {
    return res.status(500).json({success: false, message:"Internal server error"})
 }
}


export const getProducts = async (req, res) => {
    try {
       const products= await product.find()
       return res.status(200).json({success: true, message:"Product get", products})
    } catch (error) {
       return res.status(500).json({success: false, message:"Internal server error"})
    }
   }

   
export const deleteProducts = async (req, res) => {
    const{id} = req.params
    try {
       const deleteProduct= await product.findByIdAndDelete(id)
      if(deleteProduct) {
        return res.status(404).json({success: false, message:"Product not deleted"})
      }
      return res.status(200).json({success: true, message:"Product deleted"})
    } catch (error) {
       return res.status(500).json({success: false, message:"Internal server error"})
    }
   }
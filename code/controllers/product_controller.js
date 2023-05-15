const product_model = require("../models/product");

module.exports = {
    async index(req, res){
        try{
            let data = await product_model.index();
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    },
    
    async detail(req, res){
        try{
            let data = await product_model.detail(req.params["id"]);
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    },
    
    async create(req, res){
        try{
            let data = await product_model.create(req.body);
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    },
    
    async update(req, res){
        try{
            let data = await product_model.update(req.params["id"], req.body);
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    },

    async delete(req, res){
        try{
            let data = await product_model.delete(req.params["id"]);
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    }
}
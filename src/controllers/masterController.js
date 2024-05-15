const MasterSchema = require('../models/masterModel');

const getMasters = async(req, res) => {
    try{
        const master = await MasterSchema.find({});
        res.status(200).json(master)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getMaster = async (req, res) => {
    try{
        const { id } = req.params;
        const master = await MasterSchema.findById(id);
        res.status(200).json(master)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createMaster = async (req, res) => {
    try{
        const existingMaster = await MasterSchema.findOne(req.body);
        if (existingMaster) {
            return res.status(400).json({ message: 'Master already exists' });
        }
        const master = await MasterSchema.create(req.body);
        res.status(200).json(master)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateMaster = async (req, res) => {
    try{
        const {id} = req.params;
        const master = await MasterSchema.findByIdAndUpdate(id, req.body);
        if(!master){
            return res.status(404).json({message: "Product not found"});
        }
        const updatedMaster = await MasterSchema.findById(id);
        res.status(200).json(updatedMaster);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteMaster = async (req, res) => {
    try{
        const {id} = req.params;
        const master = await MasterSchema.findByIdAndDelete(id);
        if(!master){
            return res.status(404).json({message: "Product not found"});
        }
        return res.status(200).json({message: "Master delected successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getMasters,
    getMaster,
    createMaster,
    updateMaster,
    deleteMaster
}
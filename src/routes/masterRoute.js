const express = require('express');
const router = express.Router();
const MasterSchema = require('../models/masterModel');
const {getMasters, getMaster, createMaster, updateMaster, deleteMaster} = require("../controllers/masterController");


router.get('/', getMasters);

router.get("/:id", getMaster);

router.post("/", createMaster);

router.put("/:id", updateMaster)

router.delete("/:id", deleteMaster)

module.exports = router;
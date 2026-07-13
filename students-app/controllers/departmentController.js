const Department = require('../models/department');

const addDepartment = async (req, res) => {
    try {
        const { name } = req.body;
        const department = await Department.create({ name });
        res.status(201).json(department);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getDepartments = async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.status(200).json(departments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    addDepartment,
    getDepartments
}

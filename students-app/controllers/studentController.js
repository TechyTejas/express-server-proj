const db = require('../static/js/utils/db-connection');

const addStudent = (req, res) => {
    const {name, email} = req.body;
    const insertQuery = `INSERT INTO Students (name, email) VALUES (?, ?)`;

    db.execute(insertQuery, [name, email], (err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send("Error adding student");
            db.end();
            return;
        }
        console.log("Student added successfully");
        res.status(200).send(`Student with name ${name} and email ${email} added successfully`);
    })
}

const updateStudent = (req, res) => {
    const id = req.params.id;
    const {name} = req.body;
    const updateQuery = `UPDATE Students SET name = ? WHERE id = ?`;
    db.execute(updateQuery,[name, id],(err, result) => {
        if(err){
            console.log(err.message);
            res.status(500).send("Error updating student");
            db.end();
            return;
        }

        if(result.affectedRows === 0){
            res.status(404).send("Student not found");
            return;
        }

        console.log("Student updated successfully");
        res.status(200).send(`Student with id ${id} updated successfully`);
    })
}

const deleteStudent = (req, res) => {
    const id = req.params.id;
    const deleteQuery = `DELETE FROM Students WHERE id = ?`;
    db.execute(deleteQuery,[id],(err, result) => {
        if(err){
            console.log(err.message);
        }
        if(result.affectedRows === 0){
            res.status(404).send("Student not found");
            db.end();
            return;
        }
        console.log("Student deleted successfully");
        res.status(200).send(`Student with id ${id} deleted successfully`);
    })
}

const getStudents = (req, res) => {
    const getQuery = `SELECT * FROM Students`;
    db.execute(getQuery,(err, result) => {
        if(err){
            console.log(err.message);
            res.status(500).send("Error fetching students");
            db.end();
            return;
        }
        if(result.length === 0){
            res.status(404).send("No students found");
            db.end();
            return;
        }
        console.log("Students fetched successfully");
        res.status(200).send(result);
    });
}

module.exports = {
    addStudent,
    updateStudent,
    deleteStudent,
    getStudents
}
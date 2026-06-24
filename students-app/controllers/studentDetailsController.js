const db = require('../static/js/utils/db-connection');

const addStudent = (req, res) => {
    const {name, email, age} = req.body;
    const insertQuery = 'INSERT INTO StudentDetails (name, email, age) VALUES (?, ?, ?)';
    db.execute(insertQuery, [name, email, age], (err, results) => {
        if(err){
            console.log(err.message);
            res.status(500).send("Error adding student");
            db.end();
            return;
        }
        console.log("Student added successfully");
        res.status(200).send(`Student ${name} added successfully`);
    })
}

const updateStudent = (req, res) => {
    const {id, name, email, age} = req.body;
    const updateQuery = 'UPDATE StudentDetails SET name = ?, email = ?, age = ? WHERE id = ?';
    db.execute(updateQuery, [name, email, age, id], (err, results) => {
        if(err){
            console.log(err.message);
            res.status(500).send("Error updating student");
            db.end();
            return;
        }
        if(results.affectedRows === 0){
            res.status(404).send(`Student not found by id ${id}`);
            db.end();
            return;
        }
        console.log("Student updated successfully");
        res.status(200).send(`Student ${name} updated successfully`);
    })
}

const deleteStudent = (req, res) => {
    const {id} = req.body;
    const deleteQuery = 'DELETE FROM StudentDetails WHERE id = ?';
    db.execute(deleteQuery, [id], (err, results) => {
        if(err){
            console.log(err.message);
            res.status(500).send("Error deleting student");
            db.end();
            return;
        }
        if(results.affectedRows === 0){
            res.status(404).send("Student not found");
            db.end();
            return;
        }
        if(results.filter(result => result.id === id).length === 0){
            res.status(404).send("Student not found by id ", id);
            db.end();
            return;
        }
        console.log("Student deleted successfully");
        res.status(200).send(`Student ${id} deleted successfully`);
    })
}

const getStudents = (req, res) => {
    const id = req.params.id;
    const getQuery = 'SELECT * FROM StudentDetails WHERE id = ?';
    const getQueryAll = 'SELECT * FROM StudentDetails';

    db.execute(id ? getQuery : getQueryAll, id ? [parseInt(id)] : [], (err, results) => {
        if(err){
            console.log(err.message);
            res.status(500).send("Error fetching student");
            return;
        }
        if(results.length === 0){
            res.status(404).send(id ? `Student not found by id ${id}` : "No students found");
            return;
        }
        console.log("Students fetched successfully");
        res.status(200).send(results);
    });
}

module.exports = {
    addStudent,
    updateStudent,
    deleteStudent,
    getStudents
}
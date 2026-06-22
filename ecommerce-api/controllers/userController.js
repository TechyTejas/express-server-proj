const getAllUsers = (req, res)=>{
    res.send("Here is the list of all users");
}

const addNewUser = (req, res)=>{
    res.send("A new user has been added");
}

const getUserByID = (req, res)=>{
    const id = req.params.id;
    res.send(`Fetching user with id: ${id}`);
}

module.exports = {
    getAllUsers,
    addNewUser,
    getUserByID
}
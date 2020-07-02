
module.exports.index =  function (req, res) {
    res.status(200).json("User");
}

module.exports.getUserById = (req, res) => {
    res.status(200).json("User by ID")
}

module.exports.createUser = (req, res) => {
    console.log(req.body);
    const {name} = req.body;
    console.log(`Name : ${title}`);
    res.status(201).json(req.body);
}

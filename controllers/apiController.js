
module.exports.index =  function (req, res) {
    res.status(200).json("Get Index");
}

module.exports.getAPIById = (req, res) => {
    res.status(200).json("Get by ID")
}

module.exports.createPostAPI = (req, res) => {
    console.log("=== createPostAPI ===");
    console.log(req.body);
    const {title} = req.body;
    console.log(`Title : ${title}`);
    res.status(201).json(req.body);
}

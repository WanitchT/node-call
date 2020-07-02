let arrUser = []
module.exports.getUserAllAPI = (req, res) => {
    console.log("=== getUserAllAPI ===");
    //let arrUser = []
    console.log(arrUser);
    res.status(201).json(arrUser)
}

module.exports.addUserAPI = (req, res) => {
    console.log("=== addUserAPI ===");
    //let arrUser = []
    arrUser.push(req.params.num1)
    console.log(arrUser);
    res.status(201).json(arrUser)
}

module.exports.delUserAPI = (req, res) => {
    console.log("=== delUserAPI ===");
    //let arrUser = []
    const index = arrUser.indexOf(req.params.num1);
        if (index > -1) {
            arrUser.splice(index, 1);
        }
    console.log(arrUser);
    res.status(201).json(arrUser)
}

module.exports.updatelUserAPI = (req, res) => {
    console.log("=== updatelUserAPI ===");
    //let arrUser = []
    const index = arrUser.indexOf(req.params.numOld);
        if (index > -1) {
            arrUser.splice(index, 1);
        }
        arrUser.push(req.params.numNew)
    console.log(arrUser);
    res.status(201).json(arrUser)
}

module.exports.createPostAPI = (req, res) => {
    console.log("=== createPostAPI ===");
    console.log(req.body);
    const {title} = req.body;
    console.log(`Title : ${title}`);
    res.status(201).json(req.body);
}

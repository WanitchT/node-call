
module.exports.index =  function (req, res) {
    res.status(200).json("Get Index");
}

module.exports.getAPIById = (req, res) => {
    res.status(200).json("Get by ID")
}

module.exports.getStaticAPI = (req, res) => {
    console.log("=== getStaticAPI ===");
    res.status(200).json("Hello World")
}

module.exports.getStaticJSONAPI = (req, res) => {
    console.log("=== getStaticJSONAPI ===");
    res.status(201).json(req.body);
}

module.exports.getEchoAPI = (req, res) => {
    console.log("=== getEchoAPI ===");
    res.status(201).send(req.query.text)
}

module.exports.getPlusAPI = (req, res) => {
    console.log("=== getPlusAPI ===");
    let numPlus = Number(req.query.a) + Number(req.query.b)
    console.log(numPlus);
    res.status(201).send(`${numPlus}`)
}

module.exports.getPlusByJSONAPI = (req, res) => {
    console.log("=== getPlusByJSONAPI ===");
    console.log(req.query.jsonText);
    let obj = JSON.parse(req.query.jsonText);
    let numPlus = Number(obj.a) + Number(obj.b)
    console.log(numPlus);
    res.status(201).send(`${numPlus}`)
}

module.exports.getPlusSubAPI = (req, res) => {
    console.log("=== getPlusSubAPI ===");
    let numPlus = Number(req.params.num1) + Number(req.params.num2)
    console.log(numPlus);
    res.status(201).send(`${numPlus}`)
}

let arrNumber = []
module.exports.getNumberAllAPI = (req, res) => {
    console.log("=== getNumberAllAPI ===");
    //let arrNumber = []
    console.log(arrNumber);
    res.status(201).json(arrNumber)
}

module.exports.addNumberAPI = (req, res) => {
    console.log("=== addNumberAPI ===");
    //let arrNumber = []
    arrNumber.push(req.params.num1)
    console.log(arrNumber);
    res.status(201).json(arrNumber)
}

module.exports.delNumberAPI = (req, res) => {
    console.log("=== delNumberAPI ===");
    //let arrNumber = []
    const index = arrNumber.indexOf(req.params.num1);
        if (index > -1) {
            arrNumber.splice(index, 1);
        }
    console.log(arrNumber);
    res.status(201).json(arrNumber)
}

module.exports.updatelNumberAPI = (req, res) => {
    console.log("=== updatelNumberAPI ===");
    //let arrNumber = []
    const index = arrNumber.indexOf(req.params.numOld);
        if (index > -1) {
            arrNumber.splice(index, 1);
        }
        arrNumber.push(req.params.numNew)
    console.log(arrNumber);
    res.status(201).json(arrNumber)
}

module.exports.createPostAPI = (req, res) => {
    console.log("=== createPostAPI ===");
    console.log(req.body);
    const {title} = req.body;
    console.log(`Title : ${title}`);
    res.status(201).json(req.body);
}

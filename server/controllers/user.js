const data = {success: true}
exports.get = async function(req, res) {
    try {
        let read = Object.assign(data, {id:1, name:'Desmond', surname:'Ademiluyi'})
        return res.status(200).send(read);
    } catch (error) {
        console.log(err)
        return res.status(503).send({msg: 'Could not read the user at this time. Please try again later.'});
    }
}

exports.post = async function(req, res) {
    try {
        let created = Object.assign(data, {created:true})
        return res.status(200).send(created);
    } catch (error) {
        console.log(err)
        return res.status(503).send({msg: 'Could not create the user at this time. Please try again later.'});
    }
}

exports.put = async function(req, res) {
    try {
        let obj = {
            id:data.id + 2,
            name: req.body.name,
            surname:req.body.surname
        }
        return res.status(200).send(obj);
    } catch (error) {
        console.log(err)
        return res.status(503).send({msg: 'Could not update the user at this time. Please try again later.'});
    }
}
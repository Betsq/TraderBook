const context = require('../../applicationContext')

const SpotTrade = context.SpotTrade;

async function create(request){
    const spotTrade = new SpotTrade(request);

    return await SpotTrade.create(spotTrade);
}

async function  getAll(){
    return await SpotTrade.find({});
}

async function getById(id){
    return await SpotTrade.findById(id)
        .then((doc) => {return doc})
        .catch((err) => {return null});
}

async function update(id, request){
    await SpotTrade.findByIdAndUpdate(id, request);
}

async function remove(id){
    await SpotTrade.findByIdAndDelete(id);
}

module.exports = {create, getAll, getById, update, remove};
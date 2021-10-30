const context = require('../../applicationContext')

const Trade = context.Trade;

async function create(request){
    const trade = new Trade(request);

    return await Trade.create(trade);
}

async function  getAll(){
    return await Trade.find({});
}

async function getById(id){
    return await Trade.findById(id)
        .then((doc) => {return doc})
        .catch((err) => {return null});
}

async function update(id, request){
    await Trade.findByIdAndUpdate(id, request);
}

async function remove(id){
    await Trade.findByIdAndDelete(id);
}

module.exports = {create, getAll, getById, update, remove};
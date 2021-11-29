const context = require('../../Data/applicationContext')

const Cryptocurrency = context.Cryptocurrency;

async function create(request){
    const cryptocurrency = new Cryptocurrency(request);

    return await Cryptocurrency.create(cryptocurrency);
}

async function  getAll(){
    return await Cryptocurrency.find({});
}

async function getById(id){
    return await Cryptocurrency.findById(id)
        .then((doc) => {return doc})
        .catch((err) => {return null});
}

async function update(id, request){
    await Cryptocurrency.findByIdAndUpdate(id, request);
}

async function remove(id){
    await Cryptocurrency.findByIdAndDelete(id);
}

async function getBySymbol(symbol){
    return await Cryptocurrency.findOne({"symbol": symbol});
}

async function getByName(cryptoName){
    return await Cryptocurrency.find({$or : [{name: {$regex: `^${cryptoName}`, $options: "i"}}, {symbol: {$regex: `^${cryptoName}`, $options: "i"}}]});
}

async function getByIds(ids){
    console.log(ids);
    return await Cryptocurrency.find({_id: {$in : ids}})
}

module.exports = {create, getAll, getById, update, remove, getBySymbol, getByName, getByIds};

module.exports = 
function(unusable){

    return {
        setTimeout:unusable,
        setImmediate:unusable,
        setInterval:unusable,

    }
    
}

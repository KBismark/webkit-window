
module.exports = 
function(unusable){

    return {
        clearImmediate:unusable,
        clearTimeout:unusable,
        clearInterval:unusable,
        console:{
            log:unusable,
            error:unusable,
            warn:unusable,
            Console:unusable,
            assert:unusable,
            clear:unusable,
            count:unusable,
            countReset:unusable,
            debug:unusable,
            dir:unusable,
            dirxml:unusable,
            group:unusable,
            groupCollapsed:unusable,
            groupEnd:unusable,
            info:unusable,
            profile:unusable,
            profileEnd:unusable,
            trace:unusable,
            table:unusable,
            time:unusable,
            timeLog:unusable,
            timeStamp:unusable,
            timeEnd:unusable
        }
    }

}
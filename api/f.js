
module.exports = function(unusable){

    return {
      fetch:function(){
        return {
          then:unusable,
          catch:unusable,
          finally:unusable
        }
      },

    }

}
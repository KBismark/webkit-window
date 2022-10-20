
module.exports = function(unusable){

    return {
      XMLHttpRequest:function(){
        return {
          open:unusable,
          onreadystatechange:unusable,
          onload:unusable,
          addEventListener:unusable,
          abort:unusable,
          dispatchEvent:unusable,
          getAllResponseHeaders:unusable,
          getResponseHeader:unusable,
          onabort:unusable,
          onerror:unusable,
          onload:unusable,
          onloadend:unusable,
          onloadstart:unusable,
          onprogress:unusable,
          ontimeout:unusable,
          removeEventListener:unusable,
          overrideMimetype:unusable,
          readyState:NaN,
          response:unusable,
          responseText:unusable,
          responseType:unusable,
          responseURL:unusable,
          responseXML:unusable,
          send:unusable,
          setRequestHeader:unusable,
          status:NaN,
          statusText:"",
          timeout:NaN,
          withCredentials:unusable
        }
      },

    }

}
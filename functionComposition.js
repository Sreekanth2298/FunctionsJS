/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        if(functions.length==0)
        return x
        else{
            var result =0;
            var currentNumber = x
        for(var i=0;i<functions.length;i++){
           currentNumber= functions[functions.length-i-1](currentNumber)
           result=currentNumber
        }
        return result
        }
    }
};


 const fn = compose([x => x + 1, x => 2 * x])
 console.log(fn(4)) // 9
 
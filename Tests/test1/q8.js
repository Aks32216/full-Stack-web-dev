function curry(f){
    return function (a){
        return function (b){
            return f(a,b);
        }
    }
}



function multiply(a,b){
    return a*b;
}

let curried=curry(multiply);
console.log(curried(3,4));
console.log(curried(5)(4));
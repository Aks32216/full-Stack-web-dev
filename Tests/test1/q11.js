function inc(){
    return function(b){
        if(b!=0)
        {
            return 1+inc();
        }
        return b;
    }
}

let ans=inc()(0);
console.log(ans);
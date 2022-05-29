// q.1) predict the output

function printArrFN(){
    let arr=[];
    for(var i=0;i<3;++i)
    {
        function printI(){
            console.log("i",i);
        }
        arr.push(printI);
    }
    return arr;
}

let arrFn=printArrFN();
arrFn[0](); // it will print 3 in all three cases
arrFn[1]();
arrFn[2]();

// var declared variables are once allocated in function so all printI will
// have acess to same i variable and due to closure inner fn will have a reference
// to i and hence it will print i which value has been changed to 3
// had it been let declared variables which are allocated in blocks
// then it would have been 0 1 2 as every let will have different memory location
// and hence it reference would be stored and thus it would have been 0 1 and 2 as answer

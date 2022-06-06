let input={
    newObj: { obj2: { obj5: {one: 1},}, },
    obj3: { obj4: { two: 2 }, },
} 

function flatten(ob){
    let result = {};
    for (const i in ob) {
        if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
            const temp = flatten(ob[i]);
            for (const j in temp) {
                let finalKey=i+"."+j;
                result[finalKey]=temp[j];
            }
        }
        else {
            result[i] = ob[i];
        }
    }
    return result;
}

let flattenOutput=flatten(input);
console.log(flattenOutput);
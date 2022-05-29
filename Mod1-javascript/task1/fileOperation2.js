const fs=require("fs");
const path=require("path");

let arr=process.argv.slice(2);

let tempPath=path.join(process.cwd(),"web dev",arr[0]);

for(let i=1;i<=arr[1];++i)
{
    fs.mkdirSync(path.join(tempPath,`${arr[0]}_lecture_${i}`));
}
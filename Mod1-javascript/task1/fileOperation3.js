const fs=require("fs");
const path=require("path");

let arr=process.argv.slice(2);

let directoryPath=path.join(process.cwd(),"web dev",arr[0]);

for(let i=1;i<=arr[1];++i)
{
    let folderPath=path.join(directoryPath,`${arr[0]}_lecture_${i}`);
    if(!fs.existsSync(folderPath))
        fs.mkdirSync(folderPath);
    let readMeFilePath=path.join(folderPath,"readMe.md");
    if(!fs.existsSync(readMeFilePath))
    {
        fs.writeFileSync(readMeFilePath,"This is a read me file.")
    }
}
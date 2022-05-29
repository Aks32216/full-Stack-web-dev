let fs=require("fs");
let path=require("path");

let modules=process.argv.slice(2);

if(!fs.existsSync(path.join(process.cwd(),"web dev")))
    fs.mkdirSync(path.join(process.cwd(),"web dev"));
let tempPath=path.join(process.cwd(),"web dev");
for(let i=0;i<modules.length;++i)
{
    if(fs.existsSync(path.join(tempPath,modules[i]))==false)
        fs.mkdirSync(path.join(tempPath,modules[i]));
}


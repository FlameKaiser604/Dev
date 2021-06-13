const fs=require ("fs");
// fs=File System

//console.log(fs);
let f1=fs.readFileSync("./5277949.png"+" ");
console.log(f1);
fs.writeFileSync("./index.html","hello world");
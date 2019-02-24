var fs=require("fs");
exports.herei= function()
{
fs.writeFileSync("gadesh.txt","Gadesh is a best chess player i had erve mat");
console.log(fs.readFileSync("gadesh.txt").toString());
};

import fs from "fs";

const raw = fs.readFileSync("data.json", "utf-8");
console.log(raw);

import fs from "fs";

const raw = fs.readFileSync("data.json", "utf-8");
const data = JSON.parse(raw);

console.log("Course:", data.course);
console.log("Students:", data.students);
console.log("Topics:", data.topics.join(", "));

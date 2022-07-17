console.log("Hello World from TypeScript");
let a: string;
a = "abc";

let obj: {
  name: string;
  age: number;
  nickname?: string;
} = {
  name: "John",
  age: 30,
};

console.log(obj.nickname);

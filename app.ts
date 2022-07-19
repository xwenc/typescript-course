class Members {
  name: string;
  age: number;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  nameLength() {
    return this.name.length;
  }
}

const members = new Members("taro", 20);
members.nameLength()
const members2 = { name: "Andy Xiong", nameLength: members.nameLength };
console.log(members2.nameLength());

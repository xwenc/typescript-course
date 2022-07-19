var Members = /** @class */ (function () {
    function Members(name, age) {
        this.name = name;
        this.age = age;
    }
    Members.prototype.nameLength = function () {
        return this.name.length;
    };
    return Members;
}());
var members = new Members("taro", 20);
members.nameLength();
var members2 = { name: "Andy Xiong", nameLength: members.nameLength };
console.log(members2.nameLength());

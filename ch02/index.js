console.log("hello Node.js");

function isGlobal() {
  console.log(this === global);
}

isGlobal();

function printName() {
  setTimeout(
    function () {
      console.log(this.name);
    }.bind(this),
    1000
  );
}

const obj = {
  name: "obj-name",
  printName: printName,
};

printName();
obj.printName();

const fs = require("fs");

fs.readFile(__filename, (err, data) => {
  console.log(data);
});

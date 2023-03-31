const { readFile } = require("fs");

readFile(__filename, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

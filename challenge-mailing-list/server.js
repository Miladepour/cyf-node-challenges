const express = require("express");
const app = express();

let listsOfMembers = [
  {
    name: "staff",
    members: ["talea@techtonica.org", "michelle@techtonica.org"],
  },
  {
    name: "students",
    members: ["chris@techtonica.org", "hamid@techtonica.org"],
  },
];

app.get("/", function (request, response) {
  response.send("Welcome to mailing system");
});

app.get("/lists", function (request, response) {
  if (!listsOfMembers.length == 0) {
    response.status(200).json(listsOfMembers);
  } else {
    response.status(200).json([]);
  }
});

app.listen(4000, () => {
  console.log("your app listening to port 4000");
});

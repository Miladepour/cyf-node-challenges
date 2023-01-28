const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get("/lists/:name", function (request, response) {
  console.log(request.params, "----> request.params");

  const findItem = request.params.name;
  const selectedName = listsOfMembers.filter((user) => user.name === findItem);
  if (!selectedName.length == 0) {
    response.status(200).json(selectedName);
  } else {
    response
      .status(404)
      .json(`${findItem} is not listed, Please try with another name!`);
  }
});

app.delete("/lists/:name", function (request, response) {
  const findItem = request.params.name;
  const index = listsOfMembers.findIndex((user) => user.name === findItem);
  if (index !== -1) {
    listsOfMembers.splice(index, 1);
    response.status(200).send("Successfully deleted");
  } else {
    response.status(404).send("Item not found");
  }
});

app.listen(4000, () => {
  console.log("your app listening to port 4000");
});

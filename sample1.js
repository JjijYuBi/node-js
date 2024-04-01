var figlet = require("figlet");
figlet.text(
    "T",
    {
      font: "Ghost",
      horizontalLayout: "full",
      verticalLayout: "full",
      width: 200,
      whitespaceBreak: false,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );
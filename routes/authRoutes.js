const passport = require("passport");
const { PythonShell } = require("python-shell");
const Form = require("../models/Form");
const mongoose = require("mongoose");
const Forms = mongoose.model("forms");

module.exports = (app) => {
  app.get("/auth/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.post("/auth/login", passport.authenticate("local-login"), (req, res) => {
    res.redirect("/");
  });

  app.post(
    "/auth/signup",
    passport.authenticate("local-signup"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.post("/auth/submit/form", async (req, res) => {
    const formVal = req.body.params.queryVals;
    var form = new Form();
    form.title = formVal[0];
    form.desc = formVal[1];
    form.user = formVal[2];
    form.createDate = formVal[3];

    form.save();
  });

  app.get("/auth/forms", async (req, res) => {
    const query = req.query.queryVals;
    var response;
    if (query) {
      response = await Forms.find({
        $or: [
          { title: { $regex: query, $options: "i" } },
          { desc: { $regex: query, $options: "i" } },
        ],
      });
    } else {
      response = await Forms.find({});
    }

    res.send(response);
  });

  app.get("/auth/fetch_data", async (req, res) => {
    const args = req.query.queryVals;
    try {
      const result = await executePython(
        "./routes/python/avgSalFunctions.py",
        args
      );
      res.send(result);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  });

  app.post("/auth/form/delete", async (req, res) => {
    await Forms.deleteOne({ title: req.body[0], user: req.body[1] });
  });

  app.get("/auth/data", async (req, res) => {
    console.log("TEST", req.user.local);
    const forms = await Forms.find({ user: req.user.local.username });
    const data = [req.user.local];
    res.send([forms, data]);
  });
};

const executePython = async (script, args) => {
  const py_exe_path = {
    mode: "text",
    pythonPath: "./.venv/Scripts/python.exe",
    args: args,
  };
  let output = null;
  await PythonShell.run(`${script}`, py_exe_path).then((res) => {
    output = res;
  });
  return output;
};

const passport = require("passport");
const { spawn } = require("child_process");
const { PythonShell } = require("python-shell");

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

  app.get("/auth/fetch_data", async (req, res) => {
    console.log(req.query.queryVals);

    try {
      const result = await executePython(
        "./routes/python/avgSalFunctions.py",
        []
      );
      res.send(result);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  });
};

const executePython = async (script, args) => {
  const arguments = args.map((arg) => arg.toString());

  const py_exe_path = {
    mode: "text",
    pythonPath: "./.venv/Scripts/python.exe",
  };
  let output = null;
  await PythonShell.run(`${script}`, py_exe_path).then((res) => {
    output = res;
  });
  return output;
};

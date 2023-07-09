const passport = require("passport");

module.exports = (app) => {
  app.get("/api/logout", (req, res) => {
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
};
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

// =========================================================================
// LOCAL LOGIN =============================================================
// =========================================================================
passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      console.log(email, password);
      if (email) {
        email = email.toLowerCase();
      }
      const user = await User.findOne({ "local.email": email });
      // if no user is found, return the message
      if (!user) return done(null, false);
      if (!user.validPassword(password)) return done(null, false);
      // all is well, return user
      else return done(null, user);
    }
  )
);

// =========================================================================
// LOCAL SIGNUP ============================================================
// =========================================================================
passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      console.log(email, password);
      if (email) {
        email = email.toLowerCase();
      }
      console.log("1");
      if (!req.user) {
        const user = await User.findOne({ "local.email": email });
        console.log(user);
        console.log("3");
        if (user) {
          console.log("4");
          return done(null, user);
        } else {
          console.log("2");
          var newUser = new User();
          newUser.local.email = email;
          newUser.local.password = newUser.generateHash(password);
          newUser.save();
        }
      } else {
        return done(null, req.user);
      }
    }
  )
);

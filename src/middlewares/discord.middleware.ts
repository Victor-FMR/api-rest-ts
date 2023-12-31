import { Profile, Strategy } from "passport-discord";
import passport from "passport";
import userDiscord from "../models/user.discord";




passport.serializeUser((userDiscord: any, done) => {
  console.log(userDiscord.id)
  done(null, userDiscord.id);
 
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await userDiscord.findById(id);
    if (user) return done(null, user);
  } catch (error) {
    done(error, null);
    console.error(error);
  }
});

passport.use(
  new Strategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID || "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
      callbackURL: "http://localhost:9999/auth/discord/redirect",
      scope: ["identify", "email", "guilds"],
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done
    ) => {
      try {
        const found = await userDiscord.findOne({ discordId: profile.id });
       // const data = { mesagge:'LOGIN',username: found?.username, email: found?.email };
        if (found) 
        return done(null, found);
        const newUser = new userDiscord({
          discordId: profile.id,
          username: profile.username,
          email: profile.email,
          guilds: profile.guilds,
        });
        await newUser.save();
        console.log("newUser", newUser);
        return done(null, newUser);
      } catch (error) {
        done( null);
        console.error(error);
      }
    }
  )
);

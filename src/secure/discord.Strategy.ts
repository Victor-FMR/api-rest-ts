// import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from "../config";
// import passport from "passport";
// import { Strategy } from "passport-discord";
// import User from "../models/user";

// passport.serializeUser((User: any, done) => {
//   done(null, User.id);
// });

// passport.deserializeUser((User: any, done) => {
//   done(null, User.id);
// })

// passport.use(
//   new Strategy(
//     {
//       clientID: DISCORD_CLIENT_ID as string,
//       clientSecret: DISCORD_CLIENT_SECRET as string,
//       callbackURL: "/auth/redirect",
//       scope: ["identify", "guild"],
//     },
//     (accessToken: string, refreshToken: string, profile: any, done: any) => {
//       try {
//         console.log(profile);
//         const newUser = new User({
//           discordid: profile.id,
//           username: profile.username,
//           guild: profile.guild,
//         });
//         done(null, newUser);
//       } catch (error) {
//         console.error(error);
//         return done(error, null);
//       }
//     }
//   )
// );

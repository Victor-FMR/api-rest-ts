import { Strategy, MicrosoftStrategyOptions } from "passport-microsoft";
import { MICROSOFT_CLIENT_ID, MICROSOFT_CLIENT_SECRET } from "../config";
import passport, { Profile } from "passport";
import userMicrosoft from "../models/user.microsoft";
passport.serializeUser((userMicrosoft: any, done) => {
  try {
    console.log("serializeUser", userMicrosoft);
    done(null, userMicrosoft.id);
  } catch (error) {
    done(error, null);

    console.error(error);
  }
}); 
passport.deserializeUser(async (id: string, done) => {
  try {
    const found = await userMicrosoft.findById(id);
    if (found) return done(null, found);
  } catch (error) {
    done(error, null);
    console.error(error);
  }
});
passport.use(
  new Strategy(
    <MicrosoftStrategyOptions>{
      clientID: MICROSOFT_CLIENT_ID,
      clientSecret: MICROSOFT_CLIENT_SECRET,
      callbackURL: "http://localhost:7777/auth/microsoft/redirect",
      scope:  ['openid,user.read,offline_access,profile,email,Contacts.Read'],
      tenant: 'common',
      authorizationURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
      tokenURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',

    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: any
    ) => {
      try {
        const newUser = new userMicrosoft({
          microsoftId: profile.id,
          username: profile.displayName,
          email: profile.emails
         
        });
        console.log(profile);
        //await newUser.save();
        return done(null, newUser);
      } catch (error) {
        console.error(error);
        done(error, null);
      }
    }
  )
);

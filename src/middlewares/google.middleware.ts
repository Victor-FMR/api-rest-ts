import passport, { Profile } from "passport";
import { Strategy, VerifyCallback } from "passport-google-oauth20";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../config";

import userGoogle from "../models/user.google";

passport.serializeUser((user:any ,done)=>{
  
    done(null,user.id)
  
})

passport.deserializeUser(async(id: string, done : any)=>{
  try {
    const user = await userGoogle.findById(id);
    if(user) return done(null, user);
  } catch (error) {
    console.error(error)
    done(error,null)
  }

})

passport.use(
  new Strategy(
    {
      clientID: GOOGLE_CLIENT_ID || "",
      clientSecret: GOOGLE_CLIENT_SECRET || "",
      callbackURL: "http://localhost:9999/auth/google/redirect",
      scope : ['profile','email']
    },
    async(
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback 
    ) => {
      try {
        
        const found = await userGoogle.findOne({googleId : profile.id})
        if (found) 
        return done(null, found)
       
        const newUser = new userGoogle({
          googleId: profile.id,
          username: profile.displayName,
          email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : '',


        });
        await newUser.save()
       // console.log(newUser)
        done(null, newUser);
      } catch (error) {
        console.log("Error in Google Auth", error);
        done(error as Error, null as any);
        
      }
    }
  )
);

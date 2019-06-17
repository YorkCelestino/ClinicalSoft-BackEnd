import * as passport from 'passport';
import { Error, model } from 'mongoose';
import User, { IUserModel } from '../models/user.model';
const LocalStrategy = require('passport-local').Strategy;

passport.use(
    new LocalStrategy({ usernameField: 'email' },
        (username, password, done: any) => {
            User.findOne({$or:[{ email: username }, { username: username }]},
                (err: Error, user: IUserModel | any) => {
                    if (err){
                        return done(err);
                    }
                    // unknown user
                    else if (!user){
                        return done(null, false, { wrongUser: true, message: 'Email is not registered' });
                    }
                    // wrong password
                    else if (!user.verifyPassword(password)){
                        return done(null, false, { wrongUser: false, wrongPassword: true, message: 'Wrong password!.' });
                    }
                    // authentication succeeded
                    else{
                        user.lastSeenAt = new Date();
                        user.save();           
                        return done(null, user);
                    }
                });
        })
);

export default passport;
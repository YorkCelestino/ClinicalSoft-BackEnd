import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from '../config/config';

export const checkJwt = (req: Request | any, res: Response, next: NextFunction) => {
  var token;
  if ('authorization' in req.headers)
      token = req.headers['authorization'].split(' ')[1];
  if (!token)
      return res.status(403).send({ auth: false, message: 'No token provided.' });
  else {
      jwt.verify(token, config.jwtSecret,
          (err, decoded) => {
              if (err)
                  return res.status(500).send({ auth: false, message: 'Token authentication failed.' });
              else {
                  req._id = decoded._id;
                  req.userType = decoded.userType;
                  next();
              }
          }
      )
  }
};
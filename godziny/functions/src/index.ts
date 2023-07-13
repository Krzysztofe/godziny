// import { onCall } from "firebase-functions/v2/https";
// import { initializeApp } from 'firebase/app';
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(admin);

exports.addAdminRole = functions.https.onCall((data: any, context: any) => {
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user: any) => {
      return admin.auth().setCustomUserClaims(user.uid, { admin: true });
    })
    .then(() => {
      return {
        message: `succes ${data.email} oooo`,
      };
    })
    .catch((err: any) => err);
});

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

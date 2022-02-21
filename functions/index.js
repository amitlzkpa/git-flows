const functions = require("firebase-functions");
const admin = require("firebase-admin");

let app = admin.initializeApp();
// let db = app.firestore();

exports.test = functions.https.onRequest(async (req, res) => {
  functions.logger.info("Test success!", { structuredData: true });
  res.send("Hello from git-flows!");
});

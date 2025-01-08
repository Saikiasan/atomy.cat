const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

// Initialize Firebase Admin SDK
const serviceAccount = require("./path-to-serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com",
});

const db = admin.firestore();

// Load JSON data
const jsonFilePath = path.join(__dirname, "data.json");
const data = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));

async function uploadData() {
  for (const [key, value] of Object.entries(data)) {
    try {
      await db.collection("your-collection-name").doc(key).set(value);
      console.log(`Document ${key} written successfully!`);
    } catch (error) {
      console.error(`Error writing document ${key}:`, error);
    }
  }
}

uploadData();

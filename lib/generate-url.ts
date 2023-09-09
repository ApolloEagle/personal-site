const GoogleStorage = require("@google-cloud/storage");
const fs = require("fs");

const bucketName = process.env.GCS_BUCKET;

const keyFilename = {
  type: "service_account",
  project_id: process.env.GCS_PROJECT_ID,
  private_key_id: process.env.GCS_PRIVATE_KEY_ID,
  private_key: process.env.GCS_PRIVATE_KEY,
  client_email: process.env.GCS_CLIENT_EMAIL,
  client_id: process.env.GCS_CLIENT_ID,
  auth_uri: process.env.GCS_AUTH_URI,
  token_uri: process.env.GCS_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.GCS_AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.GCS_CLIENT_CERT_URL,
  universe_domain: "googleapis.com",
};

fs.writeFileSync("/tmp/gcs.json", JSON.stringify(keyFilename, null, 2));

const storage = new GoogleStorage.Storage({
  projectId: process.env.GCS_PROJECT_ID,
  keyFilename: "/tmp/gcs.json",
});

interface Song {
  url: string;
  name: string;
}

const generateURL = async () => {
  const bucket = storage.bucket(bucketName);
  const [files] = await bucket.getFiles();
  let songs: Song[] = [];

  for (const file of files) {
    const [url] = await file.getSignedUrl({
      action: "read",
      expires: "03-01-2500",
    });

    songs.push({ url, name: file.metadata.name.replace(".wav", "") });
  }

  return songs;
};

export { generateURL };

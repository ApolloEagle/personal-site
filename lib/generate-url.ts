const GoogleStorage = require("@google-cloud/storage");

const bucketName = process.env.GCS_BUCKET;

const storage = new GoogleStorage.Storage({
  projectId: process.env.GCS_PROJECT_ID,
  keyFilename: "./lib/gcs.json",
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

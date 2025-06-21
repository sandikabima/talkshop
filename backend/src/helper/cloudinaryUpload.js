const streamifier = require("streamifier");
const { cloudinary } = require("../config/cloudinary");

const streamUpload = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "ecommerce-products" },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

module.exports = { streamUpload };

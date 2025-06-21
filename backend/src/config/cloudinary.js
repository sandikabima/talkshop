const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { v4: uuidv4 } = require("uuid");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "ecommerce-products",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
    transformation: [{ width: 600, crop: "limit" }],
    public_id: (req, file) => {
      const originalName = file.originalname.replace(/\.[^/.]+$/, "");
      return `${uuidv4()}-${originalName}`;
    },
  },
});

module.exports = { cloudinary, storage };

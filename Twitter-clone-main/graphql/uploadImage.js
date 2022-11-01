const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dzgno9he8",
  api_key: "977351981667572",
  api_secret: "tt5_kHB2w-l6wZ8h6dCuYg7hsAA",
  secure: true,
});

module.exports = {
  uploadImage: async (photo) => {
    try {
      const result = await cloudinary.uploader
        .upload(photo, {
          allowed_formats: ["jpg", "png"],
          public_id: "",
          folder: "twitter",
        })
        .then((res) => {
          return res.secure_url;
        })
        .catch((e) => {
          console.log("error lol", e);
          throw new Error(e?.message);
        });
      return result;
    } catch (e) {
      throw new Error(e);
    }
  },
};

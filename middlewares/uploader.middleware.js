const multer = require("multer");
const fs = require("fs");
const { randomStringGenerator } = require("../utils/randomStringGenerator");

// Multer contains of 3 stages:
/**
 *       **storage : defines where and how the file is stored
 *          --options
 *              - diskStorage - saves to local folder
 *                  -> destination
 *                  -> fileName
 *              - memoryStorage - keeps file in memeory
 *
 *       ** fileFilter : function to control which file types are accepted
 *
 *       ** limits: allow setting restrictions
 */

const uploader = (type = "image") => {
  // storage
  const memoryStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      const path = "./public/uploads/";
      if (fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
      }
      cb(false, path);
    },

    filename: (req, file, cb) => {
      const fileName = randomStringGenerator(10) + "-" + file.originalname;
      cb(null, fileName);
    },
  });

  let allowedTypes = ["jpg", "jpeg", "png", "svg", "bmp", "webp", "gif"];
  let limit = 30000000;

  // limit
  if (type === "audio") {
    allowedTypes = ["mp3", "m3u8"];
    limit = 5000000;
  } else if (type === " doc") {
    allowedTypes = ["doc", "docx", "pdf", "csv", "json"];
    limit = 5000000;
  } else if (type === "video") {
    allowedTypes = ["mp4"];
    limit = 10000000;
  }

  //   FileFilter
  const validateFileType = (req, file, cb) => {
    const ext = file.originalname.split(".").pop();
    if (allowedTypes.includes(ext.toLowerCase())) {
      cb(null, true);
    } else {
      cb({
        code: 422,
        message: "File format not supported",
        status: "INVALID_FILE_ERR",
      });
    }
  };

  return multer({
    storage: memoryStorage,
    fileFilter: validateFileType,
    limits: {
      fileSize: limit,
    },
  });
};

module.exports = uploader;

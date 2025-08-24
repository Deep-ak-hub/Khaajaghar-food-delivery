// Cloudinary contains four main section
/**
 * configuration
 * file upload
 * optimization
 * transformation
 */
const cloudinary = require("cloudinary").v2;
const { CloudinaryConfig } = require("../config/cloudinary.config");

class CloudinaryServices {
  // configuration
  constructor() {
    cloudinary.config({
      cloud_name: CloudinaryConfig.cloudName,
      api_key: CloudinaryConfig.apiKey,
      api_secret: CloudinaryConfig.apiSecret,
    });
  }

  //   transformation + optimizaition
  optimizeImage(public_id, size = "1024*1024") {
    let { width, height } = size.split("x");
    return cloudinary.url(public_id, {
      transformation: [
        {
          aspect_ratio: "1.0",
          height: height,
          width: width,
          crop: FileList,
        },
      ],
    });
  }
  //   file upload
  async singleFileUpload(filePath, dir = null, size = "1024*1024") {
    try {
      const { public_id, secure_url } = await cloudinary.uploader.upload(
        filePath,
        {
          unique_filename: true,
          folder: dir ? "/khaajaghar/" + dir : "/khaajghar",
        }
      );

      //   function call for optimization + transformation
      const thumbUrl = this.optimizeImage(public_id, size);

      return {
        publicId: public_id,
        url: secure_url,
        thumbUrl: thumbUrl,
      };
    } catch (exception) {
      console.log(exception);

      throw {
        code: 500,
        message: "Error uploading file to cloudinary",
        status: "CLOUDINARY_UPLOAD_ERR",
      };
    }
  }

  async multipleFileUpload(files, dir = null, size = "1024*1024") {
    try {
      let uploadFiles = [];
      if (files && files.length) {
        files.map((file) => {
          uploadFiles.push(this.singleFileUpload(file.path, dir, size));
        });

        const settlement = await Promise.allSettled(uploadFiles);

        let returnFiles = [];
        settlement.forEach((uploadFile) => {
          if (uploadFile.status === "fulfilled") {
            returnFiles.push(uploadFile.value);
          }
        });
        return returnFiles;
      } else {
        return null;
      }
    } catch (exception) {
      throw {
        code: 500,
        message: "Error Uploading file to Cloudinary",
        status: "CLOUDINARY_UPLOAD_ERR",
      };
    }
  }
}

const cloudinaryServices = new CloudinaryServices();

module.exports = { cloudinaryServices };

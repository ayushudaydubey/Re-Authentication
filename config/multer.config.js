const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

// DiskStorage setUp
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads');
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, function (err, name) {
      if (err) return cb(err); // ✅ handle crypto error
      const fn = name.toString("hex") + path.extname(file.originalname);
      cb(null, fn);
    });
  }
});

const upload = multer({ storage: storage });

// export upload variable
module.exports = upload;

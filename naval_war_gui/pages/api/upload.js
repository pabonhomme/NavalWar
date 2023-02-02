import multer from 'multipart/form-data';

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/avatars');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

router.post('/', upload.single('avatar'), (req, res) => {
    const avatarUrl = req.protocol + '://' + req.get('host') + '/avatars/' + req.file.filename;
    res.json({ url: avatarUrl });
});
  

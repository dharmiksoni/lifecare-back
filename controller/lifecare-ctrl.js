const LifeCare = require('../models/lifecare_model');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// createLocation = async (req, res) => {
//   const body = req.body;
//   if (!body) {
//     return res.status(400).json({
//       success: false,alse,
//       error: err
//     });
//   }

//   const care = new LifeCare(body);

//   if (!care) {
//     return res.status(400).json({
//       success: false,
//       error: err
//     });
//   }

//   care
//     .save()
//     .then(() => {
//       return res.status(201).json({
//         success: true,
//         id: care._id,
//         message: "Movie created!"
//       });
//     })
//     .catch(error => {
//       return res.status(400).json({
//         error,
//         message: "Movie not created!"
//       });
//     });
// };

getLocation = async (req, res) => {
  // let {
  //   locationId
  // } = req.body;

  await LifeCare.find({}, (err, life) => {
    // console.log('life', life);
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!life) {
      return res.status(404).json({ success: false, error: 'data not found' });
    } else {
      return res.status(200).json({ success: true, data: life });
    }
  }).catch(err => console.log(err));
};

// allLocation = async (req, res) => {

//   await LifeCare.find({}, (err, life) => {
//     // console.log('life', life);
//     if (err) {
//       return res.status(400).json({ success: false, error: err });
//     }

//     if (!life) {
//       return res.status(404).json({ success: false, error: 'data not found' });
//     } else {
//       return res.status(200).json({ success: true, data: life });
//     }
//   }).catch(err => console.log(err));
// };

module.exports = { getLocation };

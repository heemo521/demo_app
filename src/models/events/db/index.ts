const mongoose = require('mongoose')

export const EventSchema = new mongoose.Schema({
  timezone: String,
  name: String,
  startUtf: Date,
  venueName: String,
  location: {
    coordinates: [Number],
    type: String,
  },
  flyer: String,
  url: String,
  groupName: String,
  groupAvi: {
    type: String,
  },
})

// {
//   _id: 633b50a33dde2f47075a6bfe,
//   timezone: 'America/New_York',
//   name: 'Cedric Gervais Miami',
//   startUtc: 2022-10-09T02:00:00.000Z,
//   venueName: 'Liv',
//   location: { coordinates: [ -80.191788, 25.761681 ], type: 'Point' },
//   flyer: 'https://static.tixr.com/static/images/external/img/5b1b546b-c29f-45a0-8a85-7a732b1be2fc.jpg',
//   url: 'cedric-gervais-miami-2',
//   groupName: 'Liv Miami',
//   groupAvi: 'https://media.cntraveler.com/photos/61eae294c43ef397991bf238/master/w_2580%2Cc_limit/British%2520Virgin%2520Islands_GettyImages-973996210.jpg'
// }

module.exports = mongoose.models.Game || mongoose.model('Events', EventSchema)

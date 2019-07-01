const mongoose = require('mongoose')
mongoose.connect(
  'mongodb+srv://vini_admin:vxXRVGdjsb2Z!G3@testeramper-nriqn.mongodb.net/testeRamperDB?retryWrites=true&w=majority',
  { useNewUrlParser: true }
)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('connected')
})
const userSchema = new mongoose.Schema({
  nome: String,
  email: String
})
var User = mongoose.model('user', userSchema)

module.exports = { db, User }

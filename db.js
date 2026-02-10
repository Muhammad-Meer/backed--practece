const { default: mongoose } = require('mongoose')
const db = require('mongoose')



 async function conectDb() {
  await mongoose.connect('mongodb+srv://muhabbatali:zVqoJkgRl0U2kE9V@cluster0.fepov5t.mongodb.net/papan')

  console.log('conect')

}
   module.exports = conectDb
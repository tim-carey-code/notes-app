// import mongoose from 'mongoose'

// let isConnected = false

// export const connectToDB = async () => {
//   mongoose.set('strictQuery', true)
//   if (isConnected) {
//     console.log('mongo db is already connected')
//     return
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "notes_app",
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })

//     isConnected = true
//     console.log("Mongo db connected")
//   } catch (error) {
//     console.error(error)
//   }
// }
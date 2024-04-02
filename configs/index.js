const configs = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGODB_URI ||'mongodb+srv://izerimanayvonne510:yvonne12345@cluster0.1jdjg2q.mongodb.net/contact_app',
    secret: process.env.SECRET ||'mysecret'
}

export default configs;
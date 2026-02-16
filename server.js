// MongoDB connection using mongoose
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://amany29074:@khanakhojo.xizkwpq.mongodb.net/?appName=KhanaKhojo'; // Replace with your DB name or connection string

mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.error('MongoDB connection error:', err));

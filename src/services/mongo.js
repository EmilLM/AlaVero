import mongoose from 'mongoose';

const DB = process.env.DB_URI;

mongoose.connection.once('open', () => console.log('DB ready!'));
mongoose.connection.on('error', (err) => console.error(err));

export const connectDb = async () => {
	await mongoose.connect(DB, {
		useNewUrlParser: true,
		// useFindAndModify: false,
		// useCreateIndex: true,
		useUnifiedTopology: true,
	});
};

export const mongoDisconnect = async () => {
	await mongoose.disconnect();
};

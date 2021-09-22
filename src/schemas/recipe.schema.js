import mongoose from 'mongoose';
import validator from 'validator';

const recipeSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: true,
		minLength: [3, 'Numele trebuie sa fie de minim 3 caractere!'],
		maxLength: [60, 'Numele trebuie sa fie de max 40 caractere!'],
		// validate: [
		// 	validator.isAlphanumeric,
		// 	'Numele trebuie sa contina doar litere si cifre!',
		// ],
	},
	addedBy: { type: String },
	type: { type: String, required: true, default: 'Mancare' },
	favorite: {
		type: Boolean,
		default: false,
	},
	img: {
		type: String,
		default: 'placeholder.png',
	},
	cooking: { type: String },
	ingredients: { type: [String] },
	preparation: { type: String },
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

export const Recipe =
	mongoose.models.Recipe || mongoose.model('Recipe', recipeSchema);

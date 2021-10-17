import mongoose from 'mongoose';
import validator from 'validator';

const recipeSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: true,
		minLength: [3, 'Numele trebuie sa fie de minim 3 caractere!'],
		maxLength: [30, 'Numele trebuie sa fie de max 30 caractere!'],
		// validate: [
		// 	validator.isAlphanumeric,
		// 	'Numele trebuie sa contina doar litere si cifre!',
		// ],
	},
	addedBy: {
		type: String,
		minLength: [3, 'Numele trebuie sa fie de minim 3 caractere!'],
		maxLength: [15, 'Numele trebuie sa fie de max 15 caractere!'],
	},
	type: { type: String, default: 'Mancare' },
	favorite: {
		type: Boolean,
		default: false,
	},
	img: {
		type: String,
		default: 'placeholder.png',
	},
	cooking: { type: String, required: true },
	ingredients: { type: [String], required: true },
	preparation: { type: String, required: true },
	references: [String],
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

export const Recipe =
	mongoose.models.Recipe || mongoose.model('Recipe', recipeSchema);

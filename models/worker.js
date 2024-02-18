
const mongoose = require('../node_modules/mongoose');

const workerSchema = new mongoose.Schema({
    vorname: { type: String, required: true },
    nachname: { type: String, required: true },
    email: { type: String, required: true, unique: true, validate: { validator: value => /^\S+@\S+\.\S+$/.test(value), message: 'Invalid email address' } },
  gebrachtVonLvl1: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker' },
  supervisor: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker' },
  lvl2: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker' },
  lvl3: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker' },
  superprovBerechtigt: { type: Boolean, default: false },
  strasse: { type: String },
  ort: { type: String },
  iban: { type: String }
});

const Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker;

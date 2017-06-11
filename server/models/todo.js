import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name:         { type: 'String', required: true },
  description:  { type: 'String', required: false },
  timestamp:    { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Todo', todoSchema)

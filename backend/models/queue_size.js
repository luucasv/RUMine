import mongoose, { Schema } from 'mongoose';

// QueueSize schema
export const QueueSizeSchema = new Schema({
  size: {
    required: true,
    type: Number
  },
  time: {
    required: true,
    type: Date
  }
});

// Export QueueSize model
export default mongoose.model('QueueSize', QueueSizeSchema);
import mongoose, { Schema } from 'mongoose';

// TurnstileLog schema
export const TurnstileLogSchema = new Schema({
  user: {
    type: 'ObjectId',
    ref: 'User',
    required: true
  },
  time: {
    type: 'Date',
    required: true
  }  
});

// Export TurnstileLog model
export default mongoose.model('TurnstileLog', TurnstileLogSchema);
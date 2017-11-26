import mongoose, { Schema } from 'mongoose';

// Speed schema
export const SpeedSchema = new Schema({
  speed: {
    type: 'Number',
    required: true
  },
  time: {
    type: 'Date',
    required: true
  }
});

// Export Speed model
export default mongoose.model('Speed', SpeedSchema);
import mongoose, {Schema} from 'mongoose';

// User schema
export const UserSchema = new Schema({
  username: {
    required: true,
    unique: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  email: {
    unique: true,
    required: true, 
    type: String
  },
  cpf: {
    unique: true,
    required: true,
    type: String
  },
  balance: {
    default: 0.0,
    type: Number
  }
});

// Export user model
export default mongoose.model('User', UserSchema);
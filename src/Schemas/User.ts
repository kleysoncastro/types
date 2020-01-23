import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document{
  email ?: string,
  firtName ?: string,
  lastName ?: string,

}

const UserSchema = new Schema({
  email: String,
  firtName: String,
  lastName: String
}, {
  timestamps: true
})
export default model<UserInterface>('user', UserSchema)

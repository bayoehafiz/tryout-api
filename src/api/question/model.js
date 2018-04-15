import mongoose, { Schema } from 'mongoose'

const questionSchema = new Schema({
  text: {
    type: String
  },
  options: {
    type: Object
  },
  answer: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

questionSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      text: this.text,
      options: this.options,
      answer: this.answer,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Question', questionSchema)

export const schema = model.schema
export default model

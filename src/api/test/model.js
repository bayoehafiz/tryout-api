import mongoose, { Schema } from 'mongoose'

const testSchema = new Schema({
  questions: {
    type: Array
  },
  users: {
    type: Object,
    default: {}
  },
  time_limit: {
    type: Number,
    default: 600000 // 10 minutes
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

testSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      questions: this.questions,
      users: this.users,
      time_limit: this.time_limit,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Test', testSchema)

export const schema = model.schema
export default model

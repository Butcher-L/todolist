import { Schema } from 'mongoose';
import { model } from 'mongoose';

import mongooseUtil from '../middlewares/mongo/mongoose.js';

const { toJSON } = mongooseUtil;

const schema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    deleted:{
      type: Boolean,
      default: false
    },
    dateTimeCreated: {
      type: Date,
      required: true,
    },
    dateTimeUpdated: {
      type: Date,
      required: true,
    },
    deletedBy:{
      type: String,
      default: null,
    },
    updatedBy:{
      type: String,
      default: null,
    }

  },
  { toJSON, _id: false },
);

schema.index({ _id: 1 });
schema.index({ name: 1, user: 1 });


export default model('transaction', schema);


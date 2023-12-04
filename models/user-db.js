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
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    username: {
        type: String,
        required: true,
      },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      default: null,
    },
    active: {
      type: Boolean,
      default: true
    },
    dateTimeCreated: {
      type: Date,
      required: true,
    },
    dateTimeUpdated: {
      type: Date,
      required: true,
    },

  },
  { toJSON, _id: false },
);

schema.index({ _id: 1 });
schema.index({ firstname: 1, lastname: 1 });


export default model('user', schema);


import Express from 'express'
import mongoose from 'mongoose'
import bodyparser from 'body-parser'
import path from 'path'

const app = new Express();

import todos from './routes/todo.routes'
import serverConfig from './config'

mongoose.Promise = global.Promise;

mongoose.connect(serverConfig.mongoURL, (err) => {
  if (err) {
    console.error('Mongo Error, is mongo running?');
    throw error;
  }
})

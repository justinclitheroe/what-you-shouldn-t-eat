import { Router } from 'express'
import * as TodoController from '../controllers/todo.controller'
const router = new Router();

//Get All
router.route('/todos').get(TodoController.getTodos)

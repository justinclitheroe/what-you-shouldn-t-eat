import Todo from '../models/todo';

export function getTodos(req, res) {
  Todo.find().sort('-timestamp').exec((err, todos) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ Todos })
  })
}

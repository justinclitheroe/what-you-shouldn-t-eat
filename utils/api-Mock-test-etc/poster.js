import sa from 'superagent';
import jsonfile from 'jsonfile';
jsonfile.spaces = 2
const amtPost = 5

//I/O Files
const inputFile = '../dataFixers/removedOuterArray.json'
jsonfile.readFile(inputFile, (err, body) => {
  for (var i = 0; i < body.length; i++) {
    sa.post('http://localhost:3000/recipes')
    .send({
      "title": body[i].title,
      "link": body[i].link,
      "imageLink": body[i].imageLink,
      "timeToCook": body[i].timeToCook,
      "timeToCookactive": body[i].timeToCookactive,
      "yield": body[i].yield,
      "experienceRequired": body[i].experienceRequired,
      "ingredients": body[i].ingredients,
      "directions": body[i].directions,
      "catagories": body[i].catagories
    })
    .end((err, res) => {
    })
  }
})

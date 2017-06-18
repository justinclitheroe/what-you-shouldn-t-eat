//input
import fs from 'fs';
import jsonfile from 'jsonfile';

//I/O Files
const inputFile = './phase3.json'
const outputFile = './idFixed.json'
jsonfile.spaces = 2

jsonfile.readFile(inputFile, function(err, body) {
  for (let i = 0; i < body.recipes.length; i++) {
    body.recipes[i]._id = i
    console.log("changed:", i)
  }
  // console.log()

  jsonfile.writeFile(outputFile, body)
})

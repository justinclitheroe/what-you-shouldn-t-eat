import jsonfile from 'jsonfile';

//I/O Files
const inputFile = './idFixed.json'
const outputFile = './removedOuterArray.json'
jsonfile.spaces = 2

jsonfile.readFile(inputFile, function(err, body) {
  body = body.recipes
  jsonfile.writeFile(outputFile, body)
})

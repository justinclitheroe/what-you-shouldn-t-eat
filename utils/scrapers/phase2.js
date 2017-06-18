//input
import fs from 'fs';
import jsonfile from 'jsonfile';
import scrapeIt from 'scrape-it';

//I/O Files
const inputFile = './bad-recipies.json'
const outputFile = './phase3.json'
const forLength = 970
jsonfile.spaces = 2

jsonfile.readFile(inputFile, function(err, body) {
  for (let i = 0; i < forLength; i++) {
    scrapeFoodNetworkPage(body.recipes[i].articleLink)
  }
})

let scrapeFoodNetworkPage = (page, callback) => {
  console.log(page)
  scrapeIt(page, {
    recipes: {
        listItem: ".recipePage",
        data: {
            title: {
                selector: ".o-AssetTitle__a-Headline",
                // convert: x => x.replace(/\s\s+/, '')
            },
            link: {
              selector: ".o-Attribution__a-Author--Label",
              convert: x => page
            },
            imageLink: {
              selector: ".o-AssetMultiMedia__a-Image",
              attr: "src"
            },
            timeToCook: {
              selector: ".o-RecipeInfo__a-Description--Total"
            },
            timeToCookactive: {
              selector: ".o-RecipeInfo.o-Time .o-RecipeInfo__a-Description"
            },
            yield: {
              selector: ".o-RecipeInfo.o-Yield .o-RecipeInfo__a-Description",
              convert: x => x.split('\n')[0]
            },
            experienceRequired: {
              selector: ".o-RecipeInfo.o-Level .o-RecipeInfo__a-Description",
              convert: x => x.split('\n')[0]
            },
            ingredients: {
              listItem: ".o-Ingredients__a-ListItem",
              data : {}
            },
            directions: {
              listItem: ".o-Method__m-Body p,.o-Method__m-Body h4",
              data : {}
            },
            catagories: {
              listItem: ".parbase.section.tags .o-Capsule__a-Tag.a-Tag",
              data: {}
            },
        }
    }
  }, (err, res) => {
    jsonfile.writeFile(outputFile, res, {flag: 'a'}, (err) => {
      console.error(err);
    })
  })
}

//input
import fs from 'fs';
import jsonfile from 'jsonfile';
import scrapeIt from 'scrape-it';
import request from 'request'

//I/O Files
const inputFile = './bad-recipies.json'
const outputFile = './bad-recipies-ingredients-raw.json'
jsonfile.spaces = 2


jsonfile.readFile(inputFile, function(err, body) {
  // console.log(body.recipes[10])
  scrapeFoodNetworkPage(body.recipes[135].articleLink)

})


let scrapeFoodNetworkPage = (page) => {
  console.log(page)
  scrapeIt(page, {
    recipes: {
        listItem: ".recipePage",
        data: {
            title: {
                selector: ".o-AssetTitle__a-Headline",
                // convert: x => x.replace(/\s\s+/, '')
            },
            timeToCook: {
              selector: ".o-RecipeInfo__a-Description--Total"
            },
            timeToCookactive: {
              selector: ".o-RecipeInfo.o-Time .o-RecipeInfo__a-Description"
            },
            yield: {
              selector: ".o-RecipeInfo.o-Yield .o-RecipeInfo__a-Description"
            },
            experienceRequired: {
              selector: ".o-RecipeInfo.o-Level .o-RecipeInfo__a-Description"
            },
            catagories: {
              listItem: ".parbase.section.tags .o-Capsule__a-Tag.a-Tag",
              data: {}
            },
            directions: {
              listItem: ".o-Method__m-Body p:not(a),.o-Method__m-Body h4",
              convert: (x) => {
                if (x === "Watch how to make this recipe.") {
                  return ""
                }
              }
            }
        }
    }
  }, (err, res) => {
    jsonfile.writeFile('./phase2.json', res, {flag: 'a'}, (err) => {
      console.error(err);
    })

    // console.log(res)
  })
}

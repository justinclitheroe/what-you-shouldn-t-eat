import scrapeIt from 'scrape-it'
import jsonfile from 'jsonfile'
import request  from 'request'

jsonfile.spaces = 2

for (var i = 1; i < 66; i++) {
  scrapeIt(`http://www.foodnetwork.com/profiles/talent/guy-fieri/recipes/ratings-/p/${i}`, {
      // Fetch the articles
      recipes: {
          listItem: ".o-ListRecipe div.m-MediaBlock.o-Capsule__m-MediaBlock"
        , data: {
              // Get the article date and convert it into a Date object
              title: {
                  selector: ".m-MediaBlock__a-HeadlineText",
                  how: "text",
                  convert: x => x.replace(/\s\s+/, '')
              },
              articleLink: {
                  selector: ".m-MediaBlock__a-Headline a",
                  attr: "href"
              },
              imageLink: {
                  selector: ".m-MediaBlock__m-MediaWrap a img",
                  attr: "src",
                  // convert: x => x.replace(/\d{3}\.\d{3}/, '616.462')
              },

          }
      }
  }, (err, page) => {
      jsonfile.writeFile('./bad-recipies.json', page, {flag: 'a'}, (err) => {
        console.error(err);
      })
  });
}

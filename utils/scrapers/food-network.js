import express  from 'express';
import fs       from 'fs';
import request  from 'request';
import cheerio  from 'cheerio';
const  app = express();
const nameSlug = "guy-fieri"

let getLastIndex = (name) => {
  let initURL = `http://www.foodnetwork.com/profiles/talent/${name}/recipes/ratings-/p/1`
  request(initURL, (err, res, html) => {
    if(err) { console.error() }
    let $ = cheerio.load(html);
    let last = $('.o-Pagination__a-ListItem').eq(-2).text().trim()
    promise(last)
  })
}

const lastIndex = getLastIndex(nameSlug)

lastIndex.then()


let getArrayFromPage = (name, page, callback) => {

}

exports = module.exports = app;

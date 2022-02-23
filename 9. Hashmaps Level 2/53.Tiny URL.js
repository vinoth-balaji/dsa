let urlmaps = {};

var encode = function (longUrl) {
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let tinyurl = "";
  let r = possible.charAt(Math.floor(Math.random() * possible.length));

  tinyurl += r;
  while (urlmaps.hasOwnProperty(tinyurl)) {
    r = possible.charAt(Math.floor(Math.random() * possible.length));
    tinyurl += r;
  }

  urlmaps[tinyurl] = longUrl;
  return "http://tinyurl.com/" + tinyurl;
};

var decode = function (shortUrl) {
  let en = shortUrl.split("http://tinyurl.com/")[1];
  if (urlmaps.hasOwnProperty(en)) return urlmaps[en];
  else return shortUrl;
};

let url = "https://leetcode.com/problems/design-tinyurl";
let en = encode(url);
console.log(decode(en));

const fs = require('fs');
const request = require('request');

function getUrlExtension(url) {
  return url.split(/[#?]/)[0].split('.').pop().trim();
}

const download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log(`downloading ${uri}`);

    const fileExt = getUrlExtension(uri);
    const destination = process.argv[3];
    request(uri).pipe(fs.createWriteStream(`${destination}/${filename}.${fileExt}`)).on('close', callback);
  });
};

const filename = process.argv[2];
const data = JSON.parse(fs.readFileSync(filename));

function walkData(object) {
  if (!object) {
    return;
  }

  if (object.img) {
    download(object.img, object.name, () => {})
  }

  if (object.children) {
    object.children.forEach(c => walkData(c));
  }
}


/**
 * NOTE: Will have issues with weird URLs so might need to check image output for weird endings.
 */
walkData(data);
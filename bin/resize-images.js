const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

function mkdirRecurse(inputPath) {
  if (fs.existsSync(inputPath)) {
    return;
  }
  const basePath = path.dirname(inputPath);
  if (fs.existsSync(basePath)) {
    fs.mkdirSync(inputPath);
  }
  mkdirRecurse(basePath);
}


/** 
 * Reads files with a certain file ending from given directory
 * @param {string} startPath where to start searching
 * @param {string} filter file extension pattern to search for, e.g '.png'
 */
function fromDir(startPath, filter) {
  if (!fs.existsSync(startPath)) {
    console.log('no dir ', startPath);
    return;
  }

  var files = fs.readdirSync(startPath);
  const paths = [];
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter); //recurse
    } else if (filename.indexOf(filter) >= 0) {
      console.log('-- found: ', filename);
      paths.push(filename);
    }
  }

  return paths;
}

/**
 * @param {object} param 
 * @param {string} param.path
 * @param {import('sharp').ResizeOptions} param.options
 * @returns {import('sharp').OutputInfo}
 */
function resizePhoto({ path, options: { width, height, ...options } }) {
  const outdir = `out/${width || ''}x${height || ''}`;
  const filename = path.split('/')[path.split('/').length - 1];
  console.log(filename);
  if (!fs.existsSync(outdir)) {
    mkdirRecurse(outdir);
  }
  const [cleanWidth, cleanHeight] =[ isNaN(+width) ? undefined : +width, isNaN(+width) ? undefined : +width]
  return sharp(path)
    .resize({ width: cleanWidth, height: cleanHeight, ...options })
    .png()
    .toFile(`${outdir}/${filename}`);
}

const paths = fromDir(process.argv[2], '.png');

const promises = paths.map((path) =>
  resizePhoto({
    path,
    options: {
      height: +process.argv[3],
      width: +process.argv[4],
    }
  })
);

Promise.all(promises).then(() => console.log('\n\n---------------\n\ndone'));

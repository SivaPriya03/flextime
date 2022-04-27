const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2);
const [FOLDER] = args;
const INDEX_HTML = path.resolve(FOLDER, 'public', 'index.html');

fs.readFile(INDEX_HTML, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replaceAll(
    /(href|src)=("|')(.*?)("|')/g,
    function (matchedStr) {
      return matchedStr.replace(/='/g, "='.").replace(/=\"/g, '=".');
    }
  );

  fs.writeFile(INDEX_HTML, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});

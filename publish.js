var ghpages = require('gh-pages');

ghpages.publish('build', function(err) {console.log('error',err)});
Package.describe({
  name: 'cycore:scrollposition',
  summary: 'Function to retrieve page offset coordinates in a cross-browser manner',
  version: '1.0.0',
  git: 'https://github.com/CyCoreSystems/meteor-scrollposition'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('cycore:scrollposition.js','client');
  api.export('getScrollPosition','client');
});

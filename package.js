Package.describe({
  name: 'cycore:scrollposition',
  summary: 'Reactive scroll positions and a separate retrieval function for older browsers',
  version: '1.0.1',
  git: 'https://github.com/CyCoreSystems/meteor-scrollposition'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('reactive-var');
  api.addFiles('cycore:scrollposition.js','client');
  api.export('getScrollPosition','client');
  api.export('ScrollPosition','client');
  api.export('ScrollPositionX','client');
  api.export('ScrollPositionY','client');
});

Package.describe({
  name: 'mpowaga:react-router',
  description: 'Wrapper package for npm react-router',
  version: '0.13.3'
});

Package.onUse(function (api) {
  api.use('reactjs:react');

  api.addFiles('react-router.bundle.js');

  api.export('ReactRouter');
});

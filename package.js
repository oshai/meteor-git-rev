Package.describe({
  name: 'johdirr:meteor-git-rev',
  version: '0.0.2.1',
  summary: 'Get the current git commit hash, tag or branch in Meteor',
  git: 'git@github.com:johdirr/meteor-git-rev.git',
  documentation: 'README.md'
});

Npm.depends({
  'git-rev': '0.2.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['templating', 'minimongo'], 'client');
  api.use('mongo', 'server');

  api.addFiles('lib/revision.js', ['server', 'client'])
  api.addFiles('client/uiHelper.js', 'client');
  api.addFiles('server/git-rev.js', 'server');
});

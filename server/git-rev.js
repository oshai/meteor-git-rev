var gitRev = Npm.require('git-rev');

var wrappedUpdate = Meteor.bindEnvironment(function(revId, key, value) {
  var modifier = {};

  modifier[key] = value;

  Revision.update(revId, { $set: modifier }, function(err) {
    if (err) return console.error(err);
  });
});

Meteor.startup(function() {
  if (Revision.find().count() > 0) Revision.remove({});

  var revId = Revision.insert({});

  ['short', 'long', 'branch', 'tag'].forEach(function(key) {
    gitRev[key](function(value) {
      wrappedUpdate(revId, key, value);
    });
  });
});

Meteor.publish('revision', function () {
  return Revision.find({});
});

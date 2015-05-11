var gitRev = Npm.require('git-rev');

var wrappedUpdate = Meteor.bindEnvironment(function(revId, key, value) {
  var modifier = {};

  modifier[key] = value;

  Revision.update(revId, { $set: modifier }, function(err) {
    if (err) return console.error(err);
  });
});

Meteor.startup(function() {
  if (Revision.find().count() > 0){
    Revision.remove({});
  }

  var revId = Revision.insert({});

  gitRev.short(function (value) {
    wrappedUpdate(revId, 'short', value);
  });

  gitRev.long(function (value) {
    wrappedUpdate(revId, 'long', value);
  });

  gitRev.branch(function (value) {
    wrappedUpdate(revId, 'branch', value);
  });

  gitRev.tag(function (value) {
    wrappedUpdate(revId, 'tag', value);
  });
});

Meteor.publish('revision', function () {
  return Revision.find({});
});

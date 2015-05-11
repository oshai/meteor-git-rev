var revisionHandle = Meteor.subscribe("revision");

Template.registerHelper('gitRev', function(str) {
  if (!revisionHandle.ready()) return null;

  check (str, String);

  var rev = Revision.find().fetch()[0];

  switch (str) {
  case 'short':
    return rev.short ? rev.short : null;
  case 'long':
    return rev.long ? rev.long : null;
  case 'branch':
    return rev.branch ? rev.branch : null;
  case 'tag':
    return rev.tag ? rev.tag : null;
  default:
    throw new Meteor.Error(
      "Git revision not defined", "Available are 'short' or 'long' git commit hash, 'tag' or 'branch'."
    );
  }
});

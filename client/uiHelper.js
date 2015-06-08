var revisionHandle = Meteor.subscribe("revision");

Template.registerHelper('gitRev', function(str) {
  if (!revisionHandle.ready()) return null;
  if (str === undefined)
    return rev.short + '@' + rev.branch;
  check (str, String);

  var rev = Revision.find().fetch()[0];

  switch (str) {
  case 'short': return rev.short;
  case 'long': return rev.long;
  case 'branch': return rev.branch;
  case 'tag': return rev.tag;
  default:
    throw new Meteor.Error(
      "Key '" + str + "' not defined", "Available Keys are 'short' or 'long' (git commit hashes), 'tag' or 'branch'."
    );
  }
});

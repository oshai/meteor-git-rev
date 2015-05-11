# meteor-git-rev

Get the current git commit hash, tag or branch in Meteor Templates. Wrapper for the NPM [git-rev](https://www.npmjs.com/package/git-rev) Package.

## Installation

    meteor add johdirr:meteor-git-rev

## Usage

This Package gives you an Template Helper called `gitRev`. Embed your current git commit hash (`long` or `short`), `tag` or `branch` like this:

    <div>
      <p>short hash: {{gitRev 'short'}}</p>
      <p>long hash: {{gitRev 'long'}}</p>
      <p>tag: {{gitRev 'tag'}}</p>
      <p>branch: {{gitRev 'branch'}}</p>
    </div>

### TODO

- tests :)

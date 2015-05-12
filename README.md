# meteor-git-rev

Get the current git commit hash, tag or branch within your Meteor Templates.  
Based on the NPM [git-rev](https://www.npmjs.com/package/git-rev) Package.

## Installation

    meteor add johdirr:meteor-git-rev

## Usage

This Package gives you an Template Helper called `gitRev`. Embed your current git commit hash (`long` or `short`), `tag` or `branch` like this:

    <div>
      <p>short hash: {{gitRev 'short'}}</p> <!-- short hash: bac4761 -->
      <p>long hash: {{gitRev 'long'}}</p>   <!-- long hash: bac4761beb43861c9ce8dd1469aa9d73a0d9af80 -->
      <p>tag: {{gitRev 'tag'}}</p>          <!-- tag: 0.1.0 -->
      <p>branch: {{gitRev 'branch'}}</p>    <!-- branch: master -->
    </div>

### TODO

- tests :)

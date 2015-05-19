# meteor-git-rev

Get the current git commit hash, tag or branch within your Meteor Templates. Based on the NPM [git-rev](https://www.npmjs.com/package/git-rev) Package.

**NOTE** The package needs a git repository (so far)! If you want to use this package on a `stage` or `production` environment then the git repository has to be a part of your deployment process.

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
- add a fallback solution if the git repository is not part of the deployment

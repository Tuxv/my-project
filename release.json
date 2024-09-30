module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    {
      "releaseRules": [
        { "type": "fix", "release": "patch" },
        { "type": "feat", "release": "minor" },
        { "type": "perf", "release": "patch" },
        { "type": "breaking", "release": "major", "increment": "major"}
      ]
    },
    ["@semantic-release/release-notes-generator", {
      "writerOpts": {
        "filePath": "RELEASE_NOTES.md"
      }
    }],
    ["@semantic-release/changelog", {
      "changelogFile": "docs/CHANGELOG.md"
    }],
    "@semantic-release/git",
    '@semantic-release/github'
  ]
};

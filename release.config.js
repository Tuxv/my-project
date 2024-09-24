const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    {
      "parser": "@semantic-release/commit-parser",
      "parserOpts": {
        "headerPattern": /^(\w+): (.*)$/,
        "headerCorrespondence": ["type", "subject"]
      },
      "releaseRules": [
        { "type": "fix", "release": "patch" },
        { "type": "feat", "release": "minor" },
        { "type": "perf", "release": "patch" },
        { "type": /^breaking:.*$/i, "release": "major", "increment": true, "breaking": true },
        { "type": /^breaking$/i, "release": "major", "increment": true, "breaking": true }
      ],
      "debug": true
    },
    "@semantic-release/release-notes-generator",
    "@semantic-release/git",
    '@semantic-release/github'
  ]
};

module.exports = config;
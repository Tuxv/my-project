const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    {
      "parserOptions": {
        "headerPattern": /^(?:BREAKING CHANGE:?\s?|breaking(?:\(.+\))?:?\s?)(.*)$/i,
        "headerCorrespondence": ["type", "subject"]
      },
      "releaseRules": [
        { "type": "fix", "release": "patch" },
        { "type": "feat", "release": "minor" },
        { "type": "perf", "release": "patch" },
        { "type": "breaking", "release": "major", "increment": "major", "breaking": true}
      ]
    },
    "@semantic-release/release-notes-generator",
    "@semantic-release/git",
    '@semantic-release/github'
  ]
};

module.exports = config;
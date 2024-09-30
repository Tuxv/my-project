const config = {
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
      "preset": "conventional",
      "presetConfig": {
        "types": [
          { "type": "feat", "section": "Features" },
          { "type": "fix", "section": "Bug Fixes" },
          { "type": "perf", "section": "Performance Improvements" },
          { "type": "breaking", "section": "Breaking Changes" }
        ]
      },
      "generator": "conventional-commits-parser",
      "parserOpts": {
        "headerPattern": /^(\w+)(?:\((.*)\))?: (.*)$/,
        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
      },
      "writerOpts": {
        "filePath": "RELEASE_NOTES.md"
      }
    }],
    "@semantic-release/git",
    '@semantic-release/github'
  ]
};

module.exports = config;:wq

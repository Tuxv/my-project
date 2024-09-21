{
  "branches": ["main"],
  "plugins": [
    [
      "@semantic-release/commit-analyzer",
      {
        "preset": "conventionalcommits",
        "releaseRules": [
          { "type": "fix", "release": "patch" },
          { "type": "feat", "release": "minor" },
          { "type": "perf", "release": "patch" },
          { "type": "breaking", "release": "major" }
        ]
      }
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
    "@semantic-release/git"
  ]
}


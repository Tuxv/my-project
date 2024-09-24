{
  "branches": ["main", "next"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ],
  "preset": "angular",
  "tagFormat": "${version}",
  "github": {
    "assets": [
      {
        "path": "dist/**/*.{js,css,map}",
        "name": "dist"
      }
    ]
  }
}
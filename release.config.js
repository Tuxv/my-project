const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    {
      "preset": "conventionalcommits"
    },
    "@semantic-release/release-notes-generator",
    "@semantic-release/git",
    '@semantic-release/github'
  ]
};

module.exports = config;
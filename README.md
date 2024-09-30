my-project
Semantic-Release:
Semantic-release automates the whole package release workflow including determining the next version number, generating the release notes, and publishing the package. Semantic Release automates the process of managing Semantic Versioning in software development.
Semantic-Versioning:
Semantic Versioning (SemVer) helps to manage software releases in a structured and predictable way, ensuring developers, teams, and end-users understand the impact of new updates. Here’s how it’s typically implemented.
Semantic Versioning (SemVer) works by following a structured set of rules to ensure version numbers clearly convey the nature of changes made to a piece of software. This helps both developers and users understand whether updates will break existing code, add features, or fix bugs.
Version Format:
A semantic version is formatted as MAJOR.MINOR.PATCH.
MAJOR: When you make incompatible changes or introduce breaking changes. Any change that could potentially break existing code for user’s increments this version.
MINOR: When you add new functionality in a backward-compatible manner. New features that don’t break current functionality lead to an increment in the MINOR version.
PATCH: When you make backward-compatible bug fixes. Any small fixes that improve the system but don’t add new features or break anything increment the PATCH version.
How Semantic Release Automates Semantic Versioning:
 Semantic Release relies on structured commit messages to determine the type of changes (major, minor, patch) and how the version number should be incremented.
Developers follow a conventional commit format where the type of change is included in the commit message. For example:
 Fix: correct a bug in the login feature (This would trigger a PATCH release).
 Feat: add a new search functionality (This would trigger a MINOR release).
 Breaking change: updated API endpoint (This would trigger a MAJOR release).



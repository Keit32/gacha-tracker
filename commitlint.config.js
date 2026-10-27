export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Optional: restrict scopes to areas of your app
    // "scope-enum": [2, "always", ["ui", "db", "import", "stats", "deps", "ci"]],
    "subject-case": [0], // allow any casing in the subject
  },
}

#Schibsted Spain Linting Rules
## Example package.json
```
{
  "name": "test-project",
  "version": "1.0.0",
  "scripts": {
    "lint": "npm run lint:js && npm run lint:sass",
    "lint:js": "linting-rules js",
    "lint:sass": "linting-rules sass"
  }
  "devDependencies": {
    "@schibstedspain/linting-rules": "1.0.0-beta.1"
  }
  "eslintConfig": { "extends": ["./node_modules/@schibstedspain/linting-rules/eslintrc.js"]},,
  "sasslintConfig": "./node_modules/@schibstedspain/linting-rules/sass-lint.yml"
}
```

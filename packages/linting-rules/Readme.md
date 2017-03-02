#Schibsted Spain Linting Rules
## Como hago funcionar mi editor con estas reglas:

1.- Instala el plugin de eslint/sassLint adecuado para tu editor.
2.- Agregar a tu package json estas lineas:

```
"eslintConfig": { "extends": ["./node_modules/@schibstedspain/linting-rules/eslintrc.js"]},
"sasslintConfig": "./node_modules/@schibstedspain/linting-rules/sass-lint.yml"
```

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
  "eslintConfig": { "extends": ["./node_modules/@schibstedspain/linting-rules/eslintrc.js"]},
  "sasslintConfig": "./node_modules/@schibstedspain/linting-rules/sass-lint.yml"
}
```

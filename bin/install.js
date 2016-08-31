#!/usr/bin/env node

'use strict'

const OVERWRITE = 1

const Validate = require('git-validate')

console.log('Copying config files...')

Validate.copy('../config/.eslintrc', '.eslintrc', OVERWRITE)
Validate.copy('../config/.eslintignore', '.eslintignore', OVERWRITE)
Validate.copy('../config/.editorconfig', '.editorconfig', OVERWRITE)
Validate.copy('../config/.scss-lint.yml', '.scss-lint.yml', OVERWRITE)
Validate.copy('../config/.sass-lint.yml', '.sass-lint.yml', OVERWRITE)

console.log('Files copied! Adding scripts to package.json')

Validate.installScript('lint:js', 'lint-js --ext .js, .jsx src/', OVERWRITE)
Validate.installScript('lint:sass', 'lint-sass src/**/*.scss -c -v', OVERWRITE)
Validate.installScript('lint', 'npm run lint:js && npm run lint:sass', OVERWRITE)

console.log('Scripts added! Add hooks and configure them')
Validate.installHooks('pre-commit')
Validate.configureHook('pre-commit', ['lint', 'test'])
console.log('Pre-commit-rules completely configured')

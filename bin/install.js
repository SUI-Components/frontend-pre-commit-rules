#!/usr/bin/env node

'use strict'

const OVERWRITE = 1
const º = console.log
const Validate = require('git-validate')

º('[start] frontend-pre-commit-rules')
º('Copying config files...')

Validate.copy('../config/.eslintrc', '.eslintrc', OVERWRITE)
Validate.copy('../config/.eslintignore', '.eslintignore', OVERWRITE)
Validate.copy('../config/.editorconfig', '.editorconfig', OVERWRITE)
Validate.copy('../config/.scss-lint.yml', '.scss-lint.yml', OVERWRITE)
Validate.copy('../config/.sass-lint.yml', '.sass-lint.yml', OVERWRITE)

º('Files copied! Adding scripts to package.json')

Validate.installScript('lint:js', 'lint-js --ext .js, .jsx src/', {overwrite: OVERWRITE})
Validate.installScript('lint:sass', 'lint-sass src/**/*.scss -c -v', {overwrite: OVERWRITE})
Validate.installScript('lint', 'npm run lint:js && npm run lint:sass', {overwrite: OVERWRITE})

º('Scripts added! Add hooks and configure them')
Validate.installHooks('pre-commit')
Validate.configureHook('pre-commit', ['lint', 'test'])
º('Pre-commit-rules completely configured')
º('[finished] frontend-pre-commit-rules')

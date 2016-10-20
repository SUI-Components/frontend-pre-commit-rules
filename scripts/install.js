#!/usr/bin/env node

'use strict'

const OPTIONS = { overwrite: 1 }
const º = console.log
const Validate = require('git-validate')

º('[start] frontend-pre-commit-rules')
º('Copying config files...')

Validate.copy('../config/.eslintrc', '.eslintrc', OPTIONS)
Validate.copy('../config/.eslintignore', '.eslintignore', OPTIONS)
Validate.copy('../config/.editorconfig', '.editorconfig', OPTIONS)
Validate.copy('../config/.scss-lint.yml', '.scss-lint.yml', OPTIONS)
Validate.copy('../config/.sass-lint.yml', '.sass-lint.yml', OPTIONS)

º('Files copied! Adding scripts to package.json')

Validate.installScript('lint:js', 'node_modules/.bin/linter-js --ext .js,.jsx src/', OPTIONS)
Validate.installScript('lint:sass', 'node_modules/.bin/linter-sass src/**/*.scss -c -v', OPTIONS)
Validate.installScript('lint', 'npm run lint:js && npm run lint:sass', OPTIONS)

º('Scripts added! Add hooks and configure them')
Validate.installHooks('pre-commit')
Validate.configureHook('pre-commit', ['lint', 'test'])
º('Pre-commit-rules completely configured')
º('[finished] frontend-pre-commit-rules\n')

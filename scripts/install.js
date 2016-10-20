#!/usr/bin/env node

'use strict'

const OPTIONS = { overwrite: 1 }
const log = console.log
const Validate = require('git-validate')
const path = require('path')

const packagePath = path.resolve(process.env.PWD, './package.json')
const packageJSON = require(packagePath)

log('[start] frontend-pre-commit-rules')
log('Copying config files...')

Validate.copy('../config/.eslintrc', '.eslintrc', OPTIONS)
Validate.copy('../config/.eslintignore', '.eslintignore', OPTIONS)
Validate.copy('../config/.editorconfig', '.editorconfig', OPTIONS)
Validate.copy('../config/.scss-lint.yml', '.scss-lint.yml', OPTIONS)
Validate.copy('../config/.sass-lint.yml', '.sass-lint.yml', OPTIONS)

log('Files copied! Adding scripts to package.json')

log('Package where installing pre-commit-rules: ', packageJSON.name)

const isSelfPackage = packageJSON.name === '@schibstedspain/frontend-pre-commit-rules'
const linterJs = isSelfPackage ? 'eslint' : 'linter-js'
const linterSass = isSelfPackage ? 'sass-lint' : 'linter-sass'

Validate.installScript('lint:js', `node_modules/.bin/${linterJs} --ext .js,.jsx src/`, OPTIONS)
Validate.installScript('lint:sass', `node_modules/.bin/${linterSass} src/**/*.scss -c -v`, OPTIONS)
Validate.installScript('lint', 'npm run lint:js && npm run lint:sass', OPTIONS)

log('Scripts added! Add hooks and configure them')
Validate.installHooks('pre-commit')
Validate.configureHook('pre-commit', ['lint', 'test'])
log('Pre-commit-rules completely configured')
log('[finished] frontend-pre-commit-rules\n')

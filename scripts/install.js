/* eslint-disable no-console */

'use strict'

const OPTIONS = { overwrite: 1 }
const log = console.log
const Validate = require('git-validate')

log('[start] frontend-pre-commit-rules')
log('Copying config files...')

Validate.copy('../config/.eslintrc', '.eslintrc', OPTIONS)
Validate.copy('../config/.eslintignore', '.eslintignore', OPTIONS)
Validate.copy('../config/.editorconfig', '.editorconfig', OPTIONS)
Validate.copy('../config/.scss-lint.yml', '.scss-lint.yml', OPTIONS)
Validate.copy('../config/.sass-lint.yml', '.sass-lint.yml', OPTIONS)

log('Files copied! Adding scripts to package.json')

Validate.installScript('lint:js', 'node_modules/.bin/eslint --ext .js,.jsx ./', OPTIONS)
Validate.installScript('lint:sass', 'node_modules/.bin/sass-lint src/**/*.scss -c -v', OPTIONS)
Validate.installScript('lint', 'npm run lint:js && npm run lint:sass', OPTIONS)

log('Scripts added! Add hooks and configure them')
Validate.installHooks('pre-commit')
Validate.configureHook('pre-commit', ['lint', 'test'])

// temporary fix until this is fixed: https://github.com/yarnpkg/yarn/issues/760
// log('[temp] fix yarn binaries problem')
// const fixYarnBinaries = require('./fix-yarn-binaries')
// fixYarnBinaries()
// log('[temp] ended fixing yarn binaries problem')

log('Pre-commit-rules completely configured')
log('[finished] frontend-pre-commit-rules\n')

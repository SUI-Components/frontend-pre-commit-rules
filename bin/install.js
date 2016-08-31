#!/usr/bin/env node

'use strict'

const OVERWRITE = 1;

const Validate = require('git-validate')

Validate.copy('../config/.eslintrc.js', '.eslintrc.js', OVERWRITE)
Validate.copy('../config/.eslintignore', '.eslintignore', OVERWRITE)
Validate.copy('../config/.editorconfig', '.editorconfig', OVERWRITE)
Validate.copy('../config/.scss-lint.yml', '.scss-lint.yml', OVERWRITE)
Validate.copy('../config/.sass-lint.yml', '.sass-lint.yml', OVERWRITE)

Validate.installScript('lint:js', 'lint-js --ext .js, .jsx src/', OVERWRITE)
Validate.installScript('lint:sass', 'lint-sass src/**/*.scss -c -v', OVERWRITE)
Validate.installScript('lint', 'npm run lint:js && npm run lint:sass', OVERWRITE)

Validate.installHooks('pre-commit')
Validate.configureHook('pre-commit', ['lint', 'test'])

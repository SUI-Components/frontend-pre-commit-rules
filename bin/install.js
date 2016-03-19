#!/usr/bin/env node

var Validate = require('git-validate');

Validate.copy('../.eslintignore', '.eslintignore', { overwrite: true });
Validate.copy('../eslintrc', '.eslintrc', { overwrite: true });
Validate.copy('../editorconfig', '.editorconfig', { overwrite: true });
Validate.copy('../scss-lint.yml', '.scss-lint.yml', { overwrite: true });
Validate.copy('../sass-lint.yml', '.sass-lint.yml', { overwrite: true });

Validate.installHooks('pre-commit');

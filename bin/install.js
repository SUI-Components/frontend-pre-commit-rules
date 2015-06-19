#!/usr/bin/env node

var Validate = require('git-validate');

Validate.copy('../eslintrc', '.eslintrc', true);
Validate.copy('../editorconfig', '.editorconfig', true);
Validate.copy('../jscsrc', '.jscsrc', true);
Validate.copy('../babelrc', '.babelrc', true);
Validate.copy('../csslintrc', '.csslintrc', true);

Validate.installHooks('pre-commit');

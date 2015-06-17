#!/usr/bin/env node

var Validate = require('git-validate');

Validate.copy('../eslintrc', '.eslintrc');
Validate.copy('../editorconfig', '.editorconfig');
Validate.copy('../jscsrc', '.jscsrc');
Validate.copy('../babelrc', '.babelrc');

Validate.installHooks('pre-commit');

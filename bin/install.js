#!/usr/bin/env node

var Validate = require('git-validate');

Validate.installHooks('pre-commit');

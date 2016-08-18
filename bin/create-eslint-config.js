#!/usr/bin/env node

'use strict'

const fs = require('fs')

const eslintConfigStandard = require('eslint-config-standard')
const eslintConfigStandardJSX = require('eslint-config-standard-jsx')
const eslintCustomConfig = require('../eslint-custom-config')
const mergeDeep = require('merge-deep')

const eslintConfig = mergeDeep(
  eslintConfigStandard,
  eslintConfigStandardJSX,
  eslintCustomConfig
)

fs.writeFileSync('./eslintrc', JSON.stringify(eslintConfig, null, 2))

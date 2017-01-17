#!/usr/bin/env node

// That's a temporary fix until this is fixed: https://github.com/yarnpkg/yarn/issues/760
// it doesn't work yet as the scripts are being ignored as well for subdependencies
console.log(`running yarn-bin-fix...`)

const cp = require('child_process')
const p = require('path')
const fs = require('fs')

const nodeModules = p.join(process.cwd(), 'node_modules')
const BIN_PATH = p.join(nodeModules, '.bin')
const BINARIES_NEEDED = [ 'eslint', 'sass-lint' ]

function execSilently (cmd) {
  cp.execSync(`${cmd} || true`, {stdio: ['ignore', 'ignore', 'ignore']})
}

function execRead (cmd) {
  return String(cp.execSync(cmd, {stdio: ['pipe', 'pipe', 'pipe']}))
}

function createBinFolder () {
  execSilently(`mkdir ${BIN_PATH}`)
}

function findAllPackageJsonsFiles () {
  const found = execRead(`find ${nodeModules} -type f -name 'package.json'`)
  return found.split('\n')
}

function linkExecutables (packageJsonsFiles) {
  packageJsonsFiles
    .forEach((pkgFile) => {
      if (fs.existsSync(pkgFile)) {
        try {
          const pkgContent = require(pkgFile)
          linkExecutablesFromPackage(pkgFile, pkgContent)
        } catch (e) {
          console.log(`[error] Can't parse ${pkgFile}`)
        }
      }
    })
}

function linkExecutablesFromPackage (pkgJsonFile, pkg) {
  pkg.bin = pkg.bin || {}
  Object.keys(pkg.bin)
    .forEach((name) => {
      if (BINARIES_NEEDED.indexOf(name) >= 0) {
        const path = pkg.bin[name]
        const src = p.join(BIN_PATH, name)
        const dst = p.resolve(p.dirname(pkgJsonFile), path)
        if (!fs.existsSync(src) && fs.existsSync(dst)) {
          console.log(`[yarn bugfix] Manual linking ${src}`)
          execSilently(`ln -s ${dst} ${src}`)
        }
      }
    })
}

function fixYarnBinaries () {
  createBinFolder()
  console.log(`bin dir is ${BIN_PATH}`)
  const packageJsonsFiles = findAllPackageJsonsFiles()
  linkExecutables(packageJsonsFiles)
  console.log(`DONE`)
}

module.exports = fixYarnBinaries

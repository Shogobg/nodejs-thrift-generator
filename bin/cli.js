#!/usr/bin/env node
const Generator = require('../src');
const path = require('path');

let config = {};

try{
  const fullPath = path.resolve(process.argv.slice(2).pop() || 'package.json');
  console.log(fullPath)
  config = require(fullPath)['thrift-generator'];

  if(typeof config === "undefined") {
    throw Error;
  }
}
catch(e){
  console.error("No config file provided, thift-generator section is missing or config file is corrupted.")
  process.exit(1);
}
console.log(config)
new Generator(config).generate();

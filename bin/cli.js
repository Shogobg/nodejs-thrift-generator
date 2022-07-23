#!/usr/bin/env node
const Generator = require('../src');
const path = require('path');

let config = {};
try{
  config = require(path.resolve('package.json'))['thrift-generator'];
}
catch(e){
  console.error("no config file provided, or config file is corrupted")
  process.exit(1);
}

new Generator(config).generate();

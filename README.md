# Node Thrift Generator

An easy way to compile thrift idl files using simple configuration.

## Usage

### Global Install

`npm install -g @shogobg/thrift-generator`

### NPX

`npx @shogobg/thrift-generator`

`npx @shogobg/thrift-generator /path/to/package.json`

### Use as a script

#### Install

`npm install --save-dev @shogobg/thrift-generator`

#### Add configuration to your package.json

```JSON
{
  "thrift-generator": {
    "log": "debug",
    "generators": [
      {
        "language": [
          "js:node",
          "java"
        ],
        "idl": "**/.thrift",
        "output": "./dist"
      }
    ]
  }
}
```

#### Add as a script on your package.json

```JSON
{
 "scripts": {
    "thrift": "thrift-generator"
  }
}
```

## Configuration

### config.log

Log level, can be 'info' or debug **(default: info)**

### config.executable

Thrift cli executable path **(default: thrift)**

### config.ignore

Array of glob patterns to ignore while searching for thrift idl files.

### config.genereators

Array of thrift genereation commands

### genereator.language

Language to generate, can be a string or an array of languages

### generator.idl

Path to idl file/s. supports globbing **(default: \*_/_.thrift)**

### generator.output

Output folder.
If **generator.language** is an array, then files will be genereated at output/gen-\*,
otherwise, files will be genereated at output (no gen-\* will be created).

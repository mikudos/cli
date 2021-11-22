![Mikudos Service](https://img.shields.io/badge/MIKUDOS-Generator-brightgreen?style=for-the-badge&logo=appveyor)

# [![Mikudos](https://raw.githubusercontent.com/mikudos/doc/master/mikudos-logo.png)](https://mikudos.github.io/doc)

# @mikudos/cli

@mikudos/cli is Command-line generator of Mikudos micro service template.

![node version](https://img.shields.io/node/v/@mikudos/cli) ![version](https://img.shields.io/github/package-json/v/mikudos/cli) [![npm version](https://img.shields.io/npm/v/@mikudos/cli)](https://www.npmjs.com/package/@mikudos/cli) ![license](https://img.shields.io/npm/l/@mikudos/cli) ![downloads](https://img.shields.io/npm/dw/@mikudos/cli) ![collaborators](https://img.shields.io/npm/collaborators/@mikudos/cli) ![typescript](https://img.shields.io/npm/types/@mikudos/cli)

## Installation

```bash
npm install -g @mikudos/cli
```

## Usage

Check installation

```bash
mikudos --version
```

Get help

```bash
mikudos --help
```

Create a directory for your new mikudos project.

```bash
mkdir my-new-project; cd my-new-project/
```

Generate your project.

```bash
mikudos generate project
```

Generate your protos project for centralised proto file management as services description.

```bash
mikudos generate protos
```

Generate your micro service based on one proto file.

```bash
mikudos generate app
```

or generate language spicified service project

```bash
mikudos generate golang_app
mikudos generate ts_app
mikudos generate node_app
mikudos generate python_app
mikudos generate python_ai
mikudos generate cpp_app
mikudos generate cs_app
mikudos generate java_app
mikudos generate ruby_app
```

Generate your mikudos plugin project

```bash
mikudos generate rbac
mikudos generate schedule
mikudos generate eventAggregate
mikudos generate messagePusher
```

Generate your Gate service

```bash
mikudos generate gate
```

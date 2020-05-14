"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const yeoman_environment_1 = __importDefault(require("yeoman-environment"));
const commander_1 = __importDefault(require("commander"));
const meta = require('generator-mikudos/meta');
const semver_1 = __importDefault(require("semver"));
const update_notifier_1 = __importDefault(require("update-notifier"));
const env = yeoman_environment_1.default.createEnv();
const mikudosGenerators = 'generator-mikudos/generators';
Object.keys(meta).forEach((name) => {
    if (name === 'project')
        name = 'app';
    env.register(require.resolve(`${mikudosGenerators}/${name}`), `mikudos:${name}`);
});
module.exports = function (argv, generatorOptions = {}) {
    const pkg = require('../package.json');
    let description = 'Run a generator. Type can be\n';
    Object.keys(meta).forEach((name) => {
        description += `\t• ${name} - ${meta[name]}\n`;
    });
    update_notifier_1.default({ pkg }).notify();
    commander_1.default.version(pkg.version).usage('generate [type]');
    if (!semver_1.default.satisfies(process.version, '>= 12.0.0')) {
        console.error('The Mikudos CLI and generated application requires Node v12.0.0 or later.');
        return process.exit(1);
    }
    // console.log('TCL: argv', argv);
    // console.log('TCL: env', env);
    commander_1.default
        .command('generate [type]')
        .alias('g')
        .description(description)
        .action((type) => {
        if (!type) {
            commander_1.default.help();
        }
        else {
            switch (type) {
                case 'project':
                    env.run(`mikudos:app`, Object.assign({ name: type }, generatorOptions));
                    break;
                default:
                    env.run(`mikudos:${type}`, generatorOptions);
                    break;
            }
        }
    });
    commander_1.default.command('*').action(() => commander_1.default.help());
    commander_1.default.parse(argv);
    if (argv.length === 2) {
        commander_1.default.help();
    }
};

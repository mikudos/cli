"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const yeoman_environment_1 = __importDefault(require("yeoman-environment"));
const semver_1 = __importDefault(require("semver"));
const update_notifier_1 = __importDefault(require("update-notifier"));
const env = yeoman_environment_1.default.createEnv();
function default_1(argv, generatorOptions = {}) {
    const pkg = require('../package.json');
    update_notifier_1.default({ pkg }).notify();
    commander_1.default
        .version(pkg.version)
        .usage('upgrade <version>')
        .usage('generate [type]');
    if (!semver_1.default.satisfies(process.version, '>= 12.0.0')) {
        console.error('The Mikudos CLI and generated application requires Node v12.0.0 or later.');
        return process.exit(1);
    }
    console.log('TCL: argv', argv);
}
exports.default = default_1;

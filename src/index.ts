import commander from 'commander';
import yeoman from 'yeoman-environment';
import semver from 'semver';
import updateNotifier from 'update-notifier';

const env = yeoman.createEnv();

export = function(argv: string[], generatorOptions = {}) {
    const pkg = require('../package.json');
    updateNotifier({ pkg }).notify();

    commander
        .version(pkg.version)
        .usage('upgrade <version>')
        .usage('generate [type]');

    if (!semver.satisfies(process.version, '>= 12.0.0')) {
        console.error(
            'The Mikudos CLI and generated application requires Node v12.0.0 or later.'
        );
        return process.exit(1);
    }
    console.log('TCL: argv', argv);
};

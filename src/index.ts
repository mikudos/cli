import yeoman from 'yeoman-environment';
import program from 'commander';
const meta = require('generator-mikudos/meta');
import semver from 'semver';
import updateNotifier from 'update-notifier';

const env = yeoman.createEnv();

const mikudosGenerators = 'generator-mikudos/generators';

Object.keys(meta).forEach(name => {
    if (name === 'project') name = 'app';
    env.register(
        require.resolve(`${mikudosGenerators}/${name}`),
        `mikudos:${name}`
    );
});

export = function(argv: string[], generatorOptions: any = {}) {
    const pkg = require('../package.json');
    let description = 'Run a generator. Type can be\n';

    Object.keys(meta).forEach(name => {
        description += `\t• ${name} - ${(meta as any)[name]}\n`;
    });
    updateNotifier({ pkg }).notify();

    program.version(pkg.version).usage('generate [type]');

    if (!semver.satisfies(process.version, '>= 12.0.0')) {
        console.error(
            'The Mikudos CLI and generated application requires Node v12.0.0 or later.'
        );
        return process.exit(1);
    }
    // console.log('TCL: argv', argv);
    // console.log('TCL: env', env);
    program
        .command('generate [type]')
        .alias('g')
        .description(description)
        .action(type => {
            if (!type) {
                program.help();
            } else {
                switch (type) {
                    case 'project':
                        env.run(
                            `mikudos:app`,
                            Object.assign({ name: type }, generatorOptions)
                        );
                        break;
                    default:
                        env.run(`mikudos:${type}`, generatorOptions);
                        break;
                }
            }
        });

    program.command('*').action(() => program.help());
    program.parse(argv);

    if (argv.length === 2) {
        program.help();
    }
};

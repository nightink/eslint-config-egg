'ues strict';

module.exports = {
  write: true,
  prefix: '^',
  devprefix: '^',
  exclude: [
    'test/fixtures',
    'examples',
    'benchmarks',
    'docs',
  ],
  dep: [
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'babel-eslint',
    'eslint-plugin-eggache',
    'eslint-plugin-import',
    'eslint-plugin-jsdoc',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-node',
    'eslint-plugin-react',
  ],
  devdep: [
    'autod',
    'coffee',
    'egg-bin',
    'egg-ci',
    'eslint',
    'git-contributor',
    'typescript',
  ],
};

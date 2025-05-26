const TYPES = [
  'feat',
  'fix',
  'chore',
  'docs',
  'test',
  'style',
  'refactor',
  'perf',
  'build',
  'ci',
  'revert',
];

// TODO: Melhorar a resposta de erro com exemplo de como usar caso o dev não siga o padrão
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', TYPES],
    'scope-case': [2, 'always', 'lower-case'],

    'header-max-length': [2, 'always', 80],
    'subject-empty': [2, 'never'],
  },
};

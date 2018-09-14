// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    'eslint:recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    camelcase: ['error', {
      properties: 'never',
      ignoreDestructuring: true
    }],
    'arrow-parens': [2, 'as-needed'],
    eqeqeq: 0,
    'no-return-assign': 0,
    'no-var': 2,
    semi: [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    yoda: 0,
    'arrow-spacing': 2,
    'dot-location': [2, 'property'],

    // newline
    'array-element-newline': ['warn', 'consistent'],
    'array-bracket-newline': ['warn', 'consistent'],
    'object-curly-spacing': ['warn', 'always'],
    'generator-star-spacing': 'off',
    'no-debugger': 'off',
    'no-console': ['error', {
      allow: ['error', 'warn']
    }],
    indent: ['error', 4],
    quotes: ['warn', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    'quote-props': ['warn', 'as-needed', {}],
    'spaced-comment': [
      'warn',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+']
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: false
        }
      }
    ]
  },
  overrides: [{
    files: ['*.vue', '**/*.vue'],
    rules: {
      indent: 'off',
      'vue/v-bind-style': [1, 'longform'],
      'vue/v-on-style': [1, 'longform'],
      'vue/html-indent': ['error', 4, {
        attribute: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }],
      'vue/prop-name-casing': [1, 'camelCase'],
      'vue/max-attributes-per-line': [2, {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: true
        }
      }],
      'vue/html-closing-bracket-spacing': ['error', {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      }],
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'never'
      }],
      'vue/name-property-casing': ['error', 'PascalCase'],
      'vue/script-indent': ['error', 4, {
        baseIndent: 1
      }],
      'vue/no-v-html': 1
    }
  }]
}

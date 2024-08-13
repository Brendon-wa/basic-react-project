module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime', // Ensure this is included if using React 17+
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // No quotes needed
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  rules: {
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'error', // This might be redundant with React 17+
    'react/jsx-uses-vars': 'error',
    'no-debugger': 'warn',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
};

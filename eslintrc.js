module.exports = {
    // Specify your project's JavaScript or TypeScript files here.
    // For TypeScript, you can use "*.ts" or "*.tsx" patterns.
    // For JavaScript, use "*.js" patterns.
    files: ['*.ts', '*.tsx'],
  
    parser: '@typescript-eslint/parser',
    parserOptions: {
      // Specify the version of ECMAScript you're using (default is 2018).
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    extends: [
      // Use a recommended ESLint configuration for TypeScript.
      'eslint:recommended',
      // Use the recommended rules from @typescript-eslint/eslint-plugin.
      'plugin:@typescript-eslint/recommended',
    ],
    plugins: [
      // Use the @typescript-eslint plugin for TypeScript-specific rules.
      '@typescript-eslint',
    ],
    rules: {
        // ... other ESLint rules ...
    
        // Disable the TypeScript comment ban rule.
        '@typescript-eslint/ban-ts-comment': 'off',
      },
  };
  
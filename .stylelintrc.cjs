module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    // Enforce grouping by type
    'order/order': ['dollar-variables', 'custom-properties', 'declarations'],
    // Set to null if using something like tailwind's postcss module
    'at-rule-no-unknown': null,
  },
  ignoreFiles: ['node_modules/**', 'dist/**'],
};

const { mergeDeepLeft } = require("ramda");

const eslintMerge = (base, overrides) => ({
  ...mergeDeepLeft(base, overrides),
  extends: [...base.extends, ...overrides.extends],
  plugins: [...base.plugins, ...overrides.plugins],
});

module.exports = eslintMerge;

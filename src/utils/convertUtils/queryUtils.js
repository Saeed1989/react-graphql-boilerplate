export const buildGrapQlVariables = (optionsArray) => {
  if (!optionsArray) return {};
  return optionsArray.reduce((a, v) => ({ ...a, [v]: true }), {});
};

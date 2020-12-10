export const requeired = (value) => {
  if (value) {
    return undefined;
  }
  return "Field is required";
};

export const maxLengthCr = (maxLength) => (value) => {
  if (value && value.length > maxLength) {
    return `Max length is ${maxLength} symbols`;
  }
  return undefined;
};

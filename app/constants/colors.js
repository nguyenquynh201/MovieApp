/* eslint-disable prettier/prettier */
export const Colors = {
    white : '#ffffff'
};
const percentToHex = (p) => {
    const intValue = ~~((p / 100) * 255); // map percent to nearest integer (0 - 255)
    const hexValue = intValue.toString(16); // get hexadecimal representation
    return hexValue.padStart(2, '0').toUpperCase(); // format with leading 0 and upper case characters
  };
  
  export const colorOpacityMaker = (color, opacity) => `${color}${percentToHex(opacity)}`;
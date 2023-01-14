/* eslint-disable prettier/prettier */
export const Colors = {
    white: '#ffffff',
    title: '#434343',
    primary: '#070D23',
    activeDefaultIcon: '#E5E5E5',
    colorBgIcon: '#222C4F',
    black: '#000000',
    bgButton: '#724CF9',
    bgTextBox: '#212B4D',
    colorTextBox: '#4C5778'
};
const percentToHex = (p) => {
    const intValue = ~~((p / 100) * 255); // map percent to nearest integer (0 - 255)
    const hexValue = intValue.toString(16); // get hexadecimal representation
    return hexValue.padStart(2, '0').toUpperCase(); // format with leading 0 and upper case characters
};

export const colorOpacityMaker = (color, opacity) => `${color}${percentToHex(opacity)}`;
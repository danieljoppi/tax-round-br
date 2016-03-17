'use strict';
/**
 *
 * @param	{Number}	value	The number.
 * @returns {number}
 */
exports.roundTax = (value) => {

    let centValue = value * 100; //100 represents 0.00

    let integerValue = Math.floor(centValue);

    if (Math.round((Math.round((centValue - integerValue)*100)/10)) > 5) ++integerValue;

    return integerValue/100;
};

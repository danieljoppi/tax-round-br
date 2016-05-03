'use strict';
/**
 *
 * @param	{Number}	value	The number.
 * @returns {number}
 */
module.exports = (value) => {

    let centValue = value * 100; //100 represents 0.00

    let integerValue = (centValue > 0) && Math.floor(centValue) || Math.ceil(centValue);

    if (Math.round((Math.round((centValue - integerValue)*100)/10)) > 5) ++integerValue;

    return integerValue/100;
};

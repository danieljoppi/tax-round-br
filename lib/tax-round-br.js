'use strict';
/**
 *
 * @param	{Number}	value	The number.
 * @param   {Boolean}   mod
 * @returns {number}
 */
module.exports = (value, mod) => {
    var useMod = mod === true;
    var sign = useMod && Math.sign(value) || 1;
    var val = useMod && Math.abs(value) || value;

    var centValue = val * 100; //100 represents 0.00
    var integerValue = (centValue > 0) && Math.floor(centValue) || Math.ceil(centValue);

    if (Math.round(Math.round((centValue - integerValue) * 100) / 10) > 5) {
        ++integerValue;
    }

    return (integerValue / 100) * sign;
};

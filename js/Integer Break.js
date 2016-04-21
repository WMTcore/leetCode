/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n<4)
        return n-1;
	var remainder = n % 3,
		quotient = parseInt(n / 3);
	if (remainder == 1)
		return Math.pow(3, quotient - 1) * 4
	else if (remainder == 2)
		return Math.pow(3, quotient) * 2
	return Math.pow(3, quotient)
};
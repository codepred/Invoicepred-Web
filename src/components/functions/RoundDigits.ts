
class RoundDigits {

    countDecimalDigits (value: number) {
        const match = String(value).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        if (!match) {
            return 0;
        }
        const fractionalPart = match[1] ? match[1].length : 0;
        const exponentialPart = match[2] ? parseInt(match[2], 10) : 0;
        return Math.max(0, fractionalPart - exponentialPart);
    }
    
    
    roundToTwoDigitsIfNeeded (value: number) {
        const parsedValue = parseFloat(value.toString());
        const decimalCount = this.countDecimalDigits(parsedValue);
    
        if (decimalCount > 2) {
            return parsedValue.toFixed(2);
        } else {
            return value;
        }
    }
}

export default new RoundDigits() 
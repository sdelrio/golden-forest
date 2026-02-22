export function signed(number) {
    if (typeof number !== 'number') return number;
    return number >= 0 ? `+${number}` : `${number}`;
}
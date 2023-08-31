export function randomBytes(amount, maxValue) {
    return Array.from({length: amount},() => Math.floor(Math.random() * maxValue));
}
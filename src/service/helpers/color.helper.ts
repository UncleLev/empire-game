export function isColorLight(color: string): boolean | undefined {
    // Check the format of the color, HEX or RGB?
    if (!color) return true;

    let r;
    let g;
    let b;

    if (color.match(/^rgb/)) {
        // If HEX --> store the red, green, blue values in separate variables
        const colorMatch = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

        if (colorMatch) {
            r = Number(colorMatch[1]);
            g = Number(colorMatch[2]);
            b = Number(colorMatch[3]);
        }
    }

    if (!r || !g || !b) return false;
    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    return hsp > 127.5;
}

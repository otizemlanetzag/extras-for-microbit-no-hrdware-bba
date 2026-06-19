//% color="#E67E22" weight=100 icon="\uf1ec" block="Advanced Control (bba)"
namespace advancedControlBba {

    /**
     * Resets and restarts the Micro:bit hardware.
     */
    //% block="restart"
    //% weight=90
    export function resetMicrobit(): void {
        control.reset();
    }

    /**
     * Divides a number into equal parts and returns the size of each part.
     * @param total the total number, eg: 100
     * @param parts the number of parts, eg: 4
     */
    //% block="divide $total into... $parts equal parts"
    //% total.defl=100
    //% parts.defl=4
    //% weight=80
    export function divideIntoParts(total: number, parts: number): number {
        if (parts === 0) {
            return 0; // Prevent division by zero
        }
        return total / parts;
    }

    /**
     * Divides a number into equal parts of a specific size, and returns the number of parts.
     * @param total the total number, eg: 100
     * @param size the size of each part, eg: 25
     */
    //% block="divide $total into equal parts, each part = $size"
    //% total.defl=100
    //% size.defl=25
    //% weight=70
    export function divideBySize(total: number, size: number): number {
        if (size === 0) {
            return 0; // Prevent division by zero
        }
        return total / size;
    }
}

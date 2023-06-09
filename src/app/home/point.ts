export class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    moveFor(xk: number, yk: number) {
        this.x += xk;
        this.y += yk;
    }
}
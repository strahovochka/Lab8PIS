import { Point } from "./point"

export enum Color {
    red,
    blue, black
}

export interface Figure {
    point: Point;
    color: Color;
    rotateAngle: number;

    moveFor(xk: number, yk: number): void
    changeSideLengthBy(n: number): void
    changeColor(color: Color): void
}
import { Figure } from "./Figure";
import { Point } from "./point";
import { Color } from "./Figure";

export class Arrow implements Figure {
    point: Point;
    endPoint: Point;
    color: Color;
    rotateAngle: number;

    public constructor(point: Point) {
        this.point = point;
        this.color = Color.red;
        this.rotateAngle = 0;
        this.endPoint = new Point((this.point.x + 4), (this.point.y))
    }

    changeSideLengthBy(n: number): void {
        this.point.moveFor(n, n);
        this.endPoint.moveFor(n, n);
    }

    moveFor(xk: number, yk: number): void {
        this.point.moveFor(xk, yk);
        this.endPoint.moveFor(xk, yk);
    }

    changeColor(color: Color): void {
        this.color = color;
    }

    rotateBy(angle: number): void {
        let mx = (this.point.x + this.endPoint.x)/2;
        let my = (this.point.y + this.endPoint.y)/2;
        this.point.y = mx;
        this.endPoint.y = mx;
        let v = new Point(this.endPoint.x - this.point.x, this.endPoint.y - this.point.y);
        let l = Math.sqrt((v.x * v.x) + (v.y * v.y));
    }

}
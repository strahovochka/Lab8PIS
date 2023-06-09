import { Figure } from "./Figure";
import { Point } from "./point";
import { Color } from "./Figure";

export class Triangle implements Figure {
    point: Point;
    point2: Point;
    point3: Point;
    color: Color;
    rotateAngle: number;

    public constructor(point: Point) {
        this.point = point;
        this.point2 = new Point(this.point.x + 2, this.point.y + 1)
        this.point3 = new Point(this.point.x + 4, this.point.y)
        this.color = Color.red;
        this.rotateAngle = 0;
    }
    changeColor(color: Color): void {
        this.color = color
    }
    moveFor(xk: number, yk: number): void {
        let array = [this.point, this.point2, this.point3];
        array.forEach((item) => {
            item.moveFor(xk, yk)
        })
    }

    changeSideLengthBy(n: number): void {
        this.point2.moveFor(n, n);
        this.point3.moveFor(-n, -n);
    }

    rotateBy(angle: number): void {
        
    }
    

}
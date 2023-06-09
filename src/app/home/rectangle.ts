import { Figure } from "./Figure";
import { Point } from "./point";
import { Color } from "./Figure";

export class Rectangle implements Figure {
    point: Point;
    point2: Point;
    point3: Point;
    point4: Point;
    color: Color;
    rotateAngle: number;

    public constructor(point: Point) {
        this.point = point;
        this.point2 = new Point(this.point.x + 4, this.point.y)
        this.point3 = new Point(this.point.x, this.point.y+2)
        this.point4 = new Point(this.point3.x + 4, this.point3.y)
        this.color = Color.red;
        this.rotateAngle = 0;
    }
    changeColor(color: Color): void {
        this.color = color
    }

    moveFor(xk: number, yk: number): void {
        let array = [this.point, this.point2, this.point3, this.point4];
        array.forEach((item) => {
            item.moveFor(xk, yk);
        })
    }

    changeSideLengthBy(n: number): void {
        this.point2.moveFor(n ,0);
        this.point3.moveFor(0, n);
        this.point4.moveFor(0, n);
    }

    

}
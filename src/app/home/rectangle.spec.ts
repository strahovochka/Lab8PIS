import { Point } from "./point";
import { Rectangle } from "./rectangle";
import { Color } from "./Figure";

describe('rect testing', () => {
    let rect: Rectangle;
    beforeEach(() => {
        rect = new Rectangle(new Point(4, 4));
    })

    fit ("Cтворення екземпляру класу прямокутника", () => {
        expect(rect).toBeTruthy();
    })

    fit ("Пересування на 2 по x та 1 по y", () => {
        let rect2 = new Rectangle (new Point(6, 5));
        rect.moveFor(2, 1);
        expect(rect).toEqual(rect2);
    })

    fit ("Збільшення на один", () => {
        let rect3 = new Rectangle (new Point(4, 4));
        rect3.point2.moveFor(1, 0);
        rect3.point3.moveFor(0, 1);
        rect3.point4.moveFor(0, 1);
        rect.changeSideLengthBy(1);
        expect(rect).toEqual(rect3);
    })

    fit ("зміна кольору", () => {
        let rect3 = new Rectangle (new Point(4, 4));
        rect3.color = Color.blue;
        rect.changeColor(Color.blue)
        expect(rect).toEqual(rect3);
    })

})
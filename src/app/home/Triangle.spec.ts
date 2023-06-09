import { Point } from "./point";
import { Triangle } from "./Triangle";
import { Color } from "./Figure";

describe('triangle testing', () => {
    let trian: Triangle;
    beforeEach(() => {
        trian = new Triangle(new Point(4, 4));
    })

    fit ("Cтворення екземпляру класу трикутника", () => {
        expect(trian).toBeTruthy();
    })

    fit ("Пересування на 2 по x та 1 по y", () => {
        let trian2 = new Triangle (new Point(6, 5));
        trian.moveFor(2, 1);
        expect(trian).toEqual(trian2);
    })

    fit ("Збільшення на один", () => {
        let trian3 = new Triangle (new Point(4, 4));
        trian3.point2.moveFor(1, 1);
        trian3.point3.moveFor(-1, -1);
        trian.changeSideLengthBy(1);
        expect(trian).toEqual(trian3);
    })

    fit ("зміна кольору", () => {
        let trian3 = new Triangle (new Point(4, 4));
        trian3.color = Color.blue;
        trian.changeColor(Color.blue)
        expect(trian).toEqual(trian3);
    })
})
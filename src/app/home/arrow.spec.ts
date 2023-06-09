import { Arrow } from "./Arrow";
import { Color } from "./Figure";
import { Point } from "./point";

describe('arrow testing', () => {
    let arrow: Arrow;
    beforeEach(() => {
        arrow = new Arrow(new Point(4, 4));
    })

    fit("Створення екземпляру класу стрілки", () => {
        expect(arrow).toBeTruthy();
    })

    fit ("Пересування на 2 по x та 1 по y", () => {
        let arrow2 = new Arrow (new Point(6, 5));
        arrow.moveFor(2, 1);
        expect(arrow).toEqual(arrow2);
    })

    fit ("Збільшення на один", () => {
        let arrow3 = new Arrow (new Point(5, 5));
        arrow.changeSideLengthBy(1);
        expect(arrow).toEqual(arrow3);
    })

    fit ("зміна кольору", () => {
        let arrow3 = new Arrow (new Point(4, 4));
        arrow3.color = Color.blue;
        arrow.changeColor(Color.blue)
        expect(arrow).toEqual(arrow3);
    })

    fit ("Обертання", () => {
        let arrow3 = new Arrow (new Point(4, 6));
        arrow.rotateBy(90);
        expect(arrow).toEqual(arrow3);
    })
})
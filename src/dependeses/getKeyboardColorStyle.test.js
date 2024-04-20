import { getKeyboardColorStyle } from "./getKeyboardColorStyle";

test('Работает', () => {
    const dataTest = [
        ['A','B','C','D','E']
    ]

    const resultTest = {
        'A': '--present',
        'B': '--absent',
        'C': '--present',
        'D': '--correct',
        'E': '--absent',
    }

    const colorStyle = getKeyboardColorStyle('DCDDA', dataTest)

    expect(colorStyle).toEqual(resultTest);
})
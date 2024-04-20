import { COLOR } from "../const";
import { getColorStyle } from "./getColorStyle";

// const currentWordTest = 'EAGLE';
// const expectedWordTest = 'PEACE';

// const resultTest = [
//     {'E': COLOR.present},
//     {'A': COLOR.present},
//     {'G': COLOR.absent},
//     {'L': COLOR.absent},
//     {'E': COLOR.correct},
// ]

const currentWordTest = 'ПОПОН';
const expectedWordTest = 'ТОПОТ';

const resultTest = [
    {'П': COLOR.absent},
    {'О': COLOR.correct},
    {'П': COLOR.correct},
    {'О': COLOR.correct},
    {'Н': COLOR.absent},
]

test('Получаем верные данные', () => {
    const colorStyle = getColorStyle(expectedWordTest, currentWordTest);

    expect(colorStyle).toEqual(resultTest);
})
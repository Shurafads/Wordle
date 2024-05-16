import { COLOR } from "../const";
import { getColorStyle } from "./getColorStyle"

export const getKeyboardColorStyle = (expectedWord, introducedWords) => {

    const lettersList = [];
    const colorList = [COLOR.absent, COLOR.present, COLOR.correct];
    
    for (const word of introducedWords) {
        lettersList.push(...getColorStyle(word, expectedWord));
    }

    const lettersGroup = lettersList.reduce((acc, obj) => {
        acc[obj.letter] ??= [];
        acc[obj.letter].push(obj);
        return acc;
    },{})

    const result = {};

    for (const letter in lettersGroup) {
        const color = lettersGroup[letter]
            .map(el => el.color)
            .sort((a,b) => colorList.indexOf(b) - colorList.indexOf(a));

        result[letter] = color[0];
    }
    return result;
}

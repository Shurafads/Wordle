import { COLOR } from "../const";
import { getColorStyle } from "./getColorStyle"

export const getKeyboardColorStyle = (expectedWord, introducedWords) => {

    const lettersList = [];

    for (const word of introducedWords) {
        lettersList.push(...getColorStyle(word, expectedWord));
    }

    const lettersGroup = Object.groupBy(lettersList, ({letter}) => letter);

    const colorList = [COLOR.absent, COLOR.present, COLOR.correct]

    const result = {}

    for (const letter in lettersGroup) {
        const color = lettersGroup[letter]
            .map(el => el.color)
            .sort((a,b) => colorList.indexOf(b) - colorList.indexOf(a));

        result[letter] = color[0];
    }
    return result;
}

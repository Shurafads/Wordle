import { COLOR } from "../const";

export const getColorStyle = (introduceWord, expectedWord) => {
  
    let lettersCount = {}
    const result = [];

    for (let i = 0; i < introduceWord.length; i++) {
        lettersCount[expectedWord[i]] ??= [];
        if (introduceWord[i] !== expectedWord[i]) {
            lettersCount[expectedWord[i]].push(i);
        }
    }

    for (let i = 0; i< introduceWord.length; i++) {
        if (introduceWord[i] === expectedWord[i]) {
            result.push({'letter': introduceWord[i], 'color': COLOR.correct});
            continue;
        }
        if (expectedWord.includes(introduceWord[i]) && lettersCount[introduceWord[i]].length > 0) {
            result.push({'letter': introduceWord[i], 'color': COLOR.present});
        } else {
            result.push({'letter': introduceWord[i], 'color': COLOR.absent});
        }
    }

    return result;
}

import { EXPECTED_WORD_LENGTH } from "../const";

export function getRandomWord(data) {
    const slicedWordsList = Object.keys(data).filter(word => word.length === EXPECTED_WORD_LENGTH);
    const randomIndex = Math.floor(Math.random() * slicedWordsList.length);
    return slicedWordsList[randomIndex].toUpperCase();
}
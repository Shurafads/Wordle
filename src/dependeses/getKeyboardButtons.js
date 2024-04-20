import { ALPHABET_ENG, ALPHABET_RUS, LANGUAGE } from "../const";

export function getKeyboardButtons() {
    return ({
        [LANGUAGE.ENG]: [ALPHABET_ENG.slice(0,10), ALPHABET_ENG.slice(10,19), ALPHABET_ENG.slice(19)],
        [LANGUAGE.RUS]: [ALPHABET_RUS.slice(0,12), ALPHABET_RUS.slice(12,23), ALPHABET_RUS.slice(23)],
    });
}
import { useEffect, useState } from "react"
import { Keyboard } from "./components/keyboard";
import { Board } from "./components/board";
import { engWords } from "./api/engWords";
import { getRandomWord } from "./dependeses/getRandomWord";
import { AMOUNT_OF_LETTERS, LANGUAGE } from "./const";
import { EndGameModal } from "./components/endGameModal";
import { WrongWordModal } from "./components/wrongWordModal";
import { Selection } from "./components/selection";
import { rusWords } from "./api/rusWords";
import { getKeyboardColorStyle } from "./dependeses/getKeyboardColorStyle";

export function Main() {

    const [state, setState] = useState({
        expectedWord: '',
        currentWord: '',
        introducedWords: [],
    })

    const [currentLanguageData, setCurrentDataLanguage] = useState(engWords);
    const [currentLanguage, setCurrentLanguage] = useState(LANGUAGE.RUS);

    const [endGameModalStatus, setEndGameModalStatus] = useState(false);
    const [wrongWordModalStatus, setWrongWordModalStatus] = useState(false);

    const [gameStatus, setGameStatus] = useState(true)

    useEffect(() => {
        if (currentLanguage === LANGUAGE.ENG) {
            setCurrentDataLanguage(engWords);
            setState((prev) => ({...prev, expectedWord: getRandomWord(engWords)}));
        }
        if (currentLanguage === LANGUAGE.RUS) {
            setCurrentDataLanguage(rusWords);
            setState(prev => ({...prev, expectedWord: getRandomWord(rusWords)}));
        }
    }, [currentLanguage]);

    const onLetterButtonClick = (letter) => {
        if (state.currentWord.length < state.expectedWord.length && gameStatus) {
            setState(({currentWord, ...prev}) => ({...prev, currentWord: currentWord + letter}));
        }
    }

    const onEnterButtonClick = () => {
        if (state.currentWord.length === state.expectedWord.length && gameStatus) {
            if (currentLanguageData[state.currentWord.toLowerCase()] === undefined) {
                setWrongWordModalStatus(true);
                setTimeout(() => setWrongWordModalStatus(false), 1000);
                return;
            }
            if (state.currentWord === state.expectedWord || state.introducedWords.length === AMOUNT_OF_LETTERS - 1) {   
                setEndGameModalStatus(true);
                setGameStatus(false);
            }
            setState(({introducedWords, ...prev}) => ({...prev, introducedWords: [...introducedWords, state.currentWord]}));
            setState(({currentWord, ...prev}) => ({...prev, currentWord: ''}));
        }
    }

    const onDeleteButtonClick = () => {
        if (gameStatus) {
            setState(({currentWord, ...prev}) => ({...prev, currentWord: currentWord.slice(0, currentWord.length - 1)}));
        }
    }

    const keyboardColorStyle = () => {
        if (state.introducedWords.length === 0) {
            return [];
        }
        return getKeyboardColorStyle(state.expectedWord, state.introducedWords);
    }

    const onModalClose = () => {
        setEndGameModalStatus(false);
    }

    const onModalSubmit = () => {
        setState(({introducedWords, ...prev}) => ({...prev, introducedWords: []}));
        setState(prev => ({...prev, expectedWord: getRandomWord(currentLanguageData)}));
        setEndGameModalStatus(false);
        setGameStatus(true);
    }

    const onRestartButtonClick = () => {
        setState(prev => ({...prev, currentWord: ''}));
        setState(prev => ({...prev, introducedWords: []}));
        setState(prev => ({...prev, expectedWord: getRandomWord(currentLanguageData)}));
        setGameStatus(true);
    }

    const onOverlayClick = () => {
        setEndGameModalStatus(false);
    }

    const onInputChange = (language) => {
        setCurrentLanguage(language);
    }

    return (
        <main className="main">

            {endGameModalStatus &&
                <EndGameModal
                    expectedWord={state.expectedWord}
                    onModalClose={onModalClose}
                    onModalSubmit={onModalSubmit}
                    onOverlayClick={onOverlayClick}
                    introducedWords={state.introducedWords}
                ></EndGameModal>
            }

            {wrongWordModalStatus &&
                <WrongWordModal></WrongWordModal>
            }

            <h1 className='main__title'>Wordle</h1>

            <Selection
                onRestartButtonClick={onRestartButtonClick}
                currentLanguage={currentLanguage}
                onInputChange={onInputChange}
                isDisabled={state.currentWord.length > 0 || state.introducedWords.length > 0}
            ></Selection>

            <Board
                expectedWord={state.expectedWord}
                introducedWords={state.introducedWords}
                currentWord={state.currentWord}
            />

            <Keyboard
                onLetterButtonClick={onLetterButtonClick}
                onEnterButtonClick={onEnterButtonClick}
                onDeleteButtonClick={onDeleteButtonClick}
                colorStyle={keyboardColorStyle()}
                currentLanguage={currentLanguage}
            />
        </main>
    )
}
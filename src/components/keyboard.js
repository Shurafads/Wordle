import { useEffect } from "react";
import { ALPHABET_ENG, ALPHABET_RUS, LANGUAGE } from "../const"
import { getKeyboardButtons } from "../dependeses/getKeyboardButtons";
import { getKeyboardButtonClassName } from "../dependeses/getKeyboardButtonClassName";

export function Keyboard({onLetterButtonClick, onEnterButtonClick, onDeleteButtonClick, colorStyle, currentLanguage}) {

    useEffect(() => {
        const callback = (evt) => {
            if (currentLanguage === LANGUAGE.RUS && ALPHABET_RUS.includes(evt.key.toUpperCase())) {
                onLetterButtonClick(evt.key.toUpperCase());
            }
            if (currentLanguage === LANGUAGE.ENG && ALPHABET_ENG.includes(evt.key.toUpperCase())) {
                onLetterButtonClick(evt.key.toUpperCase());
            }
            if (evt.key === 'Enter') {
                onEnterButtonClick();
            }
            if (evt.key === 'Backspace') {
                onDeleteButtonClick();
            }
        }
        
        window.addEventListener('keydown', callback);

        return () => {
            window.removeEventListener('keydown', callback)
        }
    }, [onLetterButtonClick, onEnterButtonClick, onDeleteButtonClick, currentLanguage])

    return (
        <div className="keyboard">
            <div className="keyboard__row">
                {
                    getKeyboardButtons()[currentLanguage][0]
                    .map(letter => 
                        <button
                            className={`keyboard__button ${getKeyboardButtonClassName(letter, colorStyle)}`}
                            onClick={() => onLetterButtonClick(letter)}
                            key={letter}
                        >
                            {letter}
                        </button> 
                    )
            }
            </div>
            <div className="keyboard__row">
                {
                    getKeyboardButtons()[currentLanguage][1]
                        .map(letter => 
                            <button
                                className={`keyboard__button ${getKeyboardButtonClassName(letter, colorStyle)}`}
                                onClick={() => onLetterButtonClick(letter)}
                                key={letter}
                            >
                                {letter}
                            </button>
                        )
                }
            </div>
            <div className="keyboard__row">
                <button className="keyboard__button button--wide" onClick={onDeleteButtonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22px" height="22px">
                        <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/>
                    </svg>
                </button>
                {
                    getKeyboardButtons()[currentLanguage][2]
                    .map(letter => 
                        <button
                            className={`keyboard__button ${getKeyboardButtonClassName(letter, colorStyle)}`}
                            onClick={() => onLetterButtonClick(letter)}
                            key={letter}
                        >
                            {letter}
                        </button>
                    )
            }
                <button className="keyboard__button button--wide" onClick={onEnterButtonClick}>Enter</button>
            </div>
        </div>
    )
}
import { LANGUAGE } from "../const";

export function Selection({onRestartButtonClick, currentLanguage, onInputChange, isDisabled}) {

    const getClassName = (language) => {
        let className = 'selection__label';
        className += currentLanguage === language ? ' selection__label--current' : '';
        className += isDisabled ? ' selection__label--disabled' : '';
        return className;
    }

    return (
        <div className="main__selection selection">
        <button className="selection__restart-button" onClick={onRestartButtonClick}>Начать заново</button>
        <div className="selection__container">
            <label className={getClassName(LANGUAGE.ENG)} name="eng">
                <input className="selection__input" type="radio" checked={currentLanguage === LANGUAGE.ENG} onChange={() => onInputChange(LANGUAGE.ENG)} disabled={isDisabled}></input>
                eng
            </label>
            <label className={getClassName(LANGUAGE.RUS)} name="rus">
                <input className="selection__input" type="radio" checked={currentLanguage === LANGUAGE.RUS} onChange={() => onInputChange(LANGUAGE.RUS)} disabled={isDisabled}></input>
                рус
            </label>
        </div>
    </div>
    )
}
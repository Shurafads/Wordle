import { LANGUAGE } from "../const";

export function Selection({onRestartButtonClick, currentLanguage, onInputChange, isDisabled}) {

    return (
        <div className="selection">
        <button className="selection__restart-button" onClick={onRestartButtonClick}>Начать заново</button>
        <div className="selection__container">
            <label className={`selection__label ${currentLanguage === LANGUAGE.ENG ? 'selection__label--current' : ''} ${isDisabled ? 'selection__label--disabled' : ''}`} name="eng">
                <input className="selection__input" type="radio" checked={currentLanguage === LANGUAGE.ENG} onChange={() => onInputChange(LANGUAGE.ENG)} disabled={isDisabled}></input>
                eng
            </label>
            <label className={`selection__label ${currentLanguage === LANGUAGE.RUS ? 'selection__label--current' : ''} ${isDisabled ? 'selection__label--disabled' : ''}`} name="rus">
                <input className="selection__input" type="radio" checked={currentLanguage === LANGUAGE.RUS} onChange={() => onInputChange(LANGUAGE.RUS)} disabled={isDisabled}></input>
                рус
            </label>
        </div>
    </div>
    )
}
export function EndGameModal({expectedWord, onModalClose, onModalSubmit, onOverlayClick, introducedWords}) {
    
    const title = introducedWords.at(-1) === expectedWord ? 'Вы выиграли!' : 'Вы проиграли!';

    return (
        <div
            className="end-modal"
            onClick={(evt) => {
                if (evt.target.className === 'modal') {
                    onOverlayClick();
                }
            }
        }>
            <div className ="end-modal__container">
                <button className="end-modal__button-close" onClick={onModalClose}>
                    <span>x</span>
                </button>
                <h2 className="end-modal__title">{title}</h2>
                <p className="end-modal__text">
                    Загаданное слово:
                    <b> {expectedWord}</b>
                </p>
                <button className="end-modal__button-submit" onClick={onModalSubmit}>Играть еще раз</button>
            </div>
        </div>
    );
}
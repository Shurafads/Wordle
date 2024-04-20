export function EndGameModal({expectedWord, onModalClose, onModalSubmit, onOverlayClick, introducedWords}) {
    
    const title = introducedWords.at(-1) === expectedWord ? 'Вы выиграли!' : 'Вы проиграли!';

    return (
        <div
            className="modal"
            onClick={(evt) => {
                if (evt.target.className === 'modal') {
                    onOverlayClick();
                }
            }
        }>
            <div className ="modal__container">
                <button className="modal__button--close" onClick={onModalClose}>
                    <span>x</span>
                </button>
                <h2 className="modal__title">{title}</h2>
                <p className="modal__text">
                    Загаданное слово:
                    <b> {expectedWord}</b>
                </p>
                <button className="modal__button--submit" onClick={onModalSubmit}>Играть еще раз</button>
            </div>
        </div>
    );
}
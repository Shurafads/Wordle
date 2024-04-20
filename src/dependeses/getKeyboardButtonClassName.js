export const getKeyboardButtonClassName = (letter, colorStyle) => {
    let className = 'keyboard__button';
    const findedLetter = colorStyle[letter];
    className += findedLetter ? ` keyboard__button${findedLetter}` : '';
    return className;
}
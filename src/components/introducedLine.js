import { EXPECTED_WORD_LENGTH } from "../const";
import { getColorStyle } from "../dependeses/getColorStyle";

export function IntroducedLine({word = '', expectedWord}) {

    const colorStyle = getColorStyle(word, expectedWord);

    const getClassName = (index) => {
        let className = 'letter';
        className += colorStyle ? ` letter${colorStyle[index].color}` : '';
        return className;
    }

    return (
        <div className="line">
            {Array(EXPECTED_WORD_LENGTH).fill('').map((_,i) => <div className={getClassName(i, word[i])} key={i}>{word[i] ?? ''}</div>)}
        </div>
    )
} 
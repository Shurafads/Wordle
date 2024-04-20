import { EXPECTED_WORD_LENGTH } from "../const";

export function CurrentLine({word = ''}) {

    return (
        <div className="line">
            {Array(EXPECTED_WORD_LENGTH).fill('').map((_,i) => <div className='letter' key={i}>{word[i] ?? ''}</div>)}
        </div>
    )
} 
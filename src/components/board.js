import { AMOUNT_OF_LETTERS } from "../const";
import { IntroducedLine } from "./introducedLine";
import { CurrentLine } from "./currentLine";
import { EmptyLine } from "./emptyLine";


export function Board({introducedWords, expectedWord, currentWord}) {

    const emptyLineCount = (AMOUNT_OF_LETTERS - introducedWords.length - 1) >= 0 ? (AMOUNT_OF_LETTERS - introducedWords.length - 1) : 0;

    return (
        <div className="board">
            {Array(introducedWords.length)
                .fill('')
                .map((_,index) => <IntroducedLine key={index} word={introducedWords[index]} expectedWord={expectedWord} ></IntroducedLine>)
            }
            {introducedWords.length < AMOUNT_OF_LETTERS && <CurrentLine word={currentWord}/>}
            {Array(emptyLineCount)
                .fill('')
                .map((_,index) => <EmptyLine key={index}></EmptyLine>)
            }
        </div>
    )
}


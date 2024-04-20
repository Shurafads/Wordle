export async function getEnglishWords() {
    
    // const response = await fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json').then(response => response.json())
    // const wordsList = await response.then((words) => Object.keys(words).filter(word => word.length === 5));

    // return fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json')
    //     .then(response => response.json())
    //     .then((words) => Object.keys(words)
    //     .filter(word => word.length === 5)).catch(err => throw new Error(err));

    try {
        const response = fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json').then(response => response.json());
        const wordsList = response.then(words =>  Object.keys(words).filter(word => word.length === 5))
        return wordsList;
    }   catch(error) {
        throw new Error(error);
    }
}

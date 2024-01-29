export default function wordValue(arrOfWords) {
  // utilities
  // () => {a: 1, b: 2, ... z: 26}
  function getDitionaryEnglishLetterIndex() {
    const resDictionary = {};

    // `a`.charCodeAt(0) === 97
    // `z`.charCodeAt(0) === 122
    for (let i = 97; i <= 122; i += 1) {
      // i - 96 => 1 ... 26
      resDictionary[String.fromCharCode(i)] = i - 96;
    }
    return resDictionary;
  }

  // logic implementation
  if (arrOfWords.length === 0) {
    return arrOfWords;
  }

  // {a: 1, ... z: 26}
  const ditionaryEnglishLetterIndex = getDitionaryEnglishLetterIndex();

  // ['abc', 'abc abc', 'xyz'] => [6, 12, 75]
  const arrOfSumsOfWordLettersIndexes = arrOfWords.map((word) => {
    // 'abc' => ['a', 'b', 'c']
    // '' => []
    const arrOfLetters = word.match(/[a-z]/gi) || [];
    return arrOfLetters.reduce(
      (sum, letter) => sum + ditionaryEnglishLetterIndex[letter],
      0,
    );
  });

  // [6, 12, 75] => [6 * index + 1, 12 * index + 1, 75 * index + 1] => [6, 24, 225]
  const arrOfMultiplesSumsIndexes = arrOfSumsOfWordLettersIndexes.map(
    (sumOfLettersIndexes, index) => sumOfLettersIndexes * (index + 1),
  );

  return arrOfMultiplesSumsIndexes;
}

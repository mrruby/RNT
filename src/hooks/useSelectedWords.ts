import {useState} from 'react';

export const useSelectedWords = () => {
  const [selectedWords, setSelectedWords] = useState<string[]>([
    'rival',
    'share',
    'van',
    'bicycle',
    'special',
    'year',
    'prize',
    'napkin',
    'gown',
    'idle',
    'cake',
    'weekend',
  ]);

  const addWord = (word: string) => {
    if (selectedWords.length < 12 && !selectedWords.includes(word)) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const removeWord = (word: string) => {
    setSelectedWords(selectedWords.filter(w => w !== word));
  };

  return {
    selectedWords,
    addWord,
    removeWord,
  };
};

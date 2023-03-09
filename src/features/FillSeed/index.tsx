import {useHeaderHeight} from '@react-navigation/elements';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Alert, Platform, ScrollView} from 'react-native';

import {storePrivateKey} from '../../helpers';
import {useSelectedWords} from '../../hooks';
import {RootStackParamList} from '../../models';
import {
  ApproveButton,
  ApproveButtonText,
  BottomContainer,
  Container,
  Header,
  InputContainer,
  KeyboardAvoiding,
  RemoveButton,
  RemoveIcon,
  SeedInput,
  SubmitButton,
  WordListContainer,
  WordPill,
  WordText,
} from './FillSeed.styled';

type Props = NativeStackScreenProps<RootStackParamList, 'FillSeed'>;

const FillSeed = ({navigation}: Props) => {
  const [inputWord, setInputWord] = useState<string>('');
  const height = useHeaderHeight();

  const {selectedWords, addWord, removeWord} = useSelectedWords();

  const onAddWord = (word: string) => {
    addWord(word);
    setInputWord('');
  };

  const saveSeed = async () => {
    try {
      await storePrivateKey(selectedWords);
      navigation.navigate('AccountDetails');
    } catch (e) {
      console.log(e);
      Alert.alert(
        'Error',
        e instanceof Error && e.message === 'Invalid mnemonic phrase'
          ? 'You need to use mnemonic approved words'
          : 'There is an issue with derive your seed recovery seed',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      );
    }
  };

  return (
    <KeyboardAvoiding
      keyboardVerticalOffset={height}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container>
        <ScrollView automaticallyAdjustKeyboardInsets>
          <Header>
            <WordText>
              Write a choose from the list below 12 words that will be access
              key to all your funds in the wallet. Write it down and keep it in
              a safe or locked vault. Without the phase you will not be able to
              recover your money
            </WordText>
            <WordListContainer>
              {selectedWords.map((word, index) => (
                <WordPill key={word}>
                  <WordText>{`${index + 1}. ${word}`}</WordText>
                  <RemoveButton onPress={() => removeWord(word)}>
                    <RemoveIcon>X</RemoveIcon>
                  </RemoveButton>
                </WordPill>
              ))}
            </WordListContainer>
          </Header>
        </ScrollView>
        <BottomContainer>
          {selectedWords.length === 12 ? (
            <ApproveButton onPress={saveSeed}>
              <ApproveButtonText>Approve</ApproveButtonText>
            </ApproveButton>
          ) : (
            <InputContainer>
              <SeedInput
                numberOfLines={3}
                value={inputWord}
                onChangeText={setInputWord}
              />
              <SubmitButton onPress={() => onAddWord(inputWord)}>
                <WordText>Add word</WordText>
              </SubmitButton>
            </InputContainer>
          )}
        </BottomContainer>
      </Container>
    </KeyboardAvoiding>
  );
};

export default FillSeed;

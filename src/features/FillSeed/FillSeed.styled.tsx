import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.white};
`;

const KeyboardAvoiding = styled.KeyboardAvoidingView`
  flex: 1;
`;

const Header = styled.View`
  padding: 24px;
`;

const WordListContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 16px;
`;

const WordPill = styled.View`
  width: 45%;
  margin: 8px;
  padding: 8px;
  border-color: ${props => props.theme.main};
  border-width: 1px;
  border-radius: 16px;
`;

const WordText = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;

const RemoveButton = styled.TouchableOpacity`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${props => props.theme.white};
  align-items: center;
  justify-content: center;
`;

const RemoveIcon = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.main};
`;

const BottomContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  padding-bottom: 32px;
  background-color: ${props => props.theme.white};
`;

const InputContainer = styled.View`
  position: relative;
`;

const SubmitButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const SeedInput = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
`;

const ApproveButton = styled.TouchableOpacity`
  margin-top: 10px;
  background-color: ${props => props.theme.main};
  padding: 10px;
  border-radius: 4px;
  align-items: center;
`;

const ApproveButtonText = styled.Text`
  color: ${props => props.theme.white};
  font-size: 16px;
`;

export {
  Container,
  Header,
  WordListContainer,
  WordPill,
  WordText,
  RemoveButton,
  RemoveIcon,
  BottomContainer,
  SeedInput,
  KeyboardAvoiding,
  SubmitButton,
  InputContainer,
  ApproveButton,
  ApproveButtonText,
};

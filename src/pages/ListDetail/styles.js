import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  margin: 10px;
`;

export const ListAmount = styled.View`
  align-self: stretch;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 2px dashed #028090;
  margin: 15px 10px;
  height: 44px;
`;

export const Amount = styled.Text`
  font-size: 16px;
  color: #028090;
  font-weight: bold;
`;

export const ListActions = styled.View`
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const FinishButton = styled(RectButton)`
  background: #028090;
  height: 44px;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 10px 5px 20px 10px;
  border-radius: 4px;
`;

export const FinishButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`;

export const HistoryButton = styled(RectButton)`
  background: #028090;
  height: 44px;
  align-items: center;
  justify-content: center;
  width: 100px;
  margin: 10px 10px 20px 5px;
  border-radius: 4px;
`;

export const NewProductButton = styled.TouchableOpacity`
  height: 120px;
  width: 120px;
  border-radius: 6px;
  margin: 5px;
  flex-grow: 1;
  flex-basis: 0;
  justify-content: center;
  align-items: center;
  border: 2px dashed #028090;
`;

export const NewProductButtonText = styled.Text`
  font-size: 20px;
  color: #028090;
  font-weight: bold;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  background: #028090;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

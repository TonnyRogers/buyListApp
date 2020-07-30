import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// https://coolors.co/05668d-028090-00a896-02c39a-f0f3bd Pallete

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.View`
  margin: 50px 10px 10px;
  background: rgba(255, 255, 255, 0.5);
  flex: 1;
  padding: 12px;
`;

export const BuyListener = styled.FlatList``;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
`;

export const ListButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: #028090;
  margin: 5px 0;
  padding: 12px;
  border-radius: 4px;
`;

export const ListInfo = styled.View`
  border-left-width: 1px;
  border-left-color: #fff;
`;

export const ListIcon = styled(Icon)`
  margin-right: 8px;
`;

export const ListName = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  margin-left: 8px;
`;

export const EmptyList = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  padding: 12px;
  border-radius: 4px;
  border: 1px dashed #028090;
`;

export const EmptyListText = styled.Text`
  font-size: 16px;
  color: #028090;
  margin-left: 8px;
`;

export const NewListButton = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.3);
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  margin-bottom: 12px;
  margin-right: 12px;
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

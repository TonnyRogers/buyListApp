import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.6);
  justify-content: center;
`;

export const ModalContainer = styled.Modal``;

export const Content = styled.View`
  flex: 1;
  background: #fff;
  margin: 20px 10px;
  border-radius: 4px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #e1e1e1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
  width: 30px;
  height: 30px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  background: #028090;
`;

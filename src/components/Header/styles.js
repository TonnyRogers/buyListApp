import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 12px;
`;

export const BackButton = styled(RectButton)`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background: rgba(2, 128, 144, 0.3);
  align-items: center;
  justify-content: center;
`;

export const PageInfo = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 18px;
`;

import styled from 'styled-components/native';

export const Container = styled.View``;

export const ProducButton = styled.TouchableOpacity`
  background: #fff;
  height: 120px;
  width: 120px;
  border-radius: 6px;
  margin: 5px;
  flex-grow: 1;
  flex-basis: 0;
  justify-content: space-between;
  align-items: center;
  border: ${(props) => (props.selected ? '2px solid #028090' : 'none')};
`;

export const ProductDetails = styled.View`
  padding: 10px 0;
`;

export const Name = styled.Text`
  font-size: 16px;
  text-transform: capitalize;
`;

export const ProductPrice = styled.View`
  background: ${(props) => (props.selected ? '#028090' : '#e9e9e9')};
  align-self: stretch;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 35px;
  align-items: center;
  padding: 5px 0;
`;

export const Price = styled.Text`
  font-size: 16px;
  color: ${(props) => (props.selected ? '#FFF' : '#000')};
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

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Modal as RNModal} from 'react-native';

import {
  Container,
  Content,
  CloseButton,
  ModalContainer,
  Header,
  Title,
} from './styles';

const Modal = ({visible, children, onRequestClose, testID, title}) => {
  return (
    <ModalContainer
      testID={testID}
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onRequestClose}>
      <Container>
        <Content>
          <Header>
            <Title>{title}</Title>
            <CloseButton testID="new-list-close-btn" onPress={onRequestClose}>
              <Icon name="close" size={24} color="#FFF" />
            </CloseButton>
          </Header>
          {children}
        </Content>
      </Container>
    </ModalContainer>
  );
};

export default Modal;

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, BackButton, PageInfo, Title} from './styles';

const Header = ({handlePressBack, list}) => {
  return (
    <Container>
      <BackButton onPress={handlePressBack}>
        <Icon name="arrow-back" size={27} color="#028090" />
      </BackButton>
      <PageInfo>
        <Title>{list && list.name}</Title>
      </PageInfo>
    </Container>
  );
};

export default Header;

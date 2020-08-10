import React, {useState} from 'react';
import {View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {
  Container,
  ProducButton,
  ProductDetails,
  Name,
  ProductPrice,
  Price,
} from './styles';
import Modal from '../Modal';

const Products = ({item}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function selectProduct() {
    setIsSelected(!isSelected);
  }

  function toggleEditProductModal(product) {
    setIsModalVisible(!isModalVisible);
  }

  return (
    <>
      <ProducButton
        onPress={selectProduct}
        onLongPress={toggleEditProductModal}
        selected={isSelected}>
        <ProductDetails>
          <Name>{item.name}</Name>
        </ProductDetails>
        <ProductPrice selected={isSelected}>
          <Price selected={isSelected}>R${item.amount}</Price>
        </ProductPrice>
      </ProducButton>
      <Modal
        title="Editar"
        visible={isModalVisible}
        onRequestClose={toggleEditProductModal}>
        <Name> Hello</Name>
      </Modal>
    </>
  );
};

export default Products;

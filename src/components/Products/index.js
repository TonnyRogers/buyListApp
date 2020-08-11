import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProducButton,
  ProductDetails,
  Name,
  ProductPrice,
  Price,
  SubmitButton,
} from './styles';
import Modal from '../Modal';
import TextInput from '../TextInput';

import {
  openEditProductModal,
  closeEditProductModal,
} from '../../store/modules/products/actions';

const Products = ({item}) => {
  const [isSelected, setIsSelected] = useState(false);
  const products = useSelector((state) => state.products);
  const isModalVisible = products.editListModalOpen;
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);
  const [unitPrice, setUnitValue] = useState(item.price);
  const dispatch = useDispatch();

  function selectProduct() {
    setIsSelected(!isSelected);
  }

  function openEditProduct() {
    dispatch(openEditProductModal());
  }

  function closeEditProduct() {
    dispatch(closeEditProductModal());
  }

  return (
    <>
      <ProducButton
        onPress={selectProduct}
        onLongPress={openEditProduct}
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
        onRequestClose={closeEditProduct}>
        <TextInput
          placeholder="Nome do Produto"
          value={name}
          onChange={setName}
        />
        <TextInput
          placeholder="Quantidade"
          value={quantity}
          onChange={setQuantity}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Valor unitário"
          value={unitPrice}
          onChange={setUnitValue}
          keyboardType="numeric"
        />
        <SubmitButton onPress={() => {}}>
          <Icon name="check" size={24} color="#FFF" />
        </SubmitButton>
      </Modal>
    </>
  );
};

export default Products;

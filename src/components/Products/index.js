import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  ProducButton,
  ProductDetails,
  Name,
  ProductPrice,
  Price,
  SubmitButton,
  ActionsContent,
  DeleteButton,
  ModalContainer,
} from './styles';
import Modal from '../Modal';
import TextInput from '../TextInput';

import {
  openEditProductModal,
  closeEditProductModal,
  updateProductRequest,
  deleteProductRequest,
} from '../../store/modules/products/actions';

import {setListTotal} from '../../store/modules/list/actions';

const Products = ({item}) => {
  const [isSelected, setIsSelected] = useState(false);
  const products = useSelector((state) => state.products);
  const isModalVisible = products.editListModalOpen;
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);
  const [unitPrice, setUnitPrice] = useState(item.price);
  const dispatch = useDispatch();

  function handleSelectProduct(product) {
    dispatch(setListTotal(product));
    setIsSelected(!isSelected);
  }

  function openEditProduct() {
    dispatch(openEditProductModal());
  }

  function closeEditProduct() {
    dispatch(closeEditProductModal());
  }

  function handleUpdateProduct(productId) {
    dispatch(
      updateProductRequest({
        name,
        quantity,
        unitPrice,
        productId,
      }),
    );
  }

  function handleDeleteProduct(productId) {
    dispatch(deleteProductRequest(productId));
  }

  return (
    <>
      <ProducButton
        onPress={() => handleSelectProduct(item)}
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
        <ModalContainer>
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
            onChange={setUnitPrice}
            keyboardType="numeric"
          />
          <ActionsContent>
            <SubmitButton onPress={() => handleUpdateProduct(item.id)}>
              <Icon name="check" size={24} color="#FFF" />
            </SubmitButton>
            <DeleteButton onPress={() => handleDeleteProduct(item.id)}>
              <Icon name="delete" size={24} color="#FFF" />
            </DeleteButton>
          </ActionsContent>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default Products;

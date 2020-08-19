import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {LogBox} from 'react-native';

import {
  Container,
  ProductList,
  ListAmount,
  Amount,
  ListActions,
  FinishButton,
  FinishButtonText,
  HistoryButton,
  NewProductButton,
  NewProductButtonText,
  SubmitButton,
} from './styles';
import Products from '../../components/Products';
import Modal from '../../components/Modal';
import Header from '../../components/Header';
import TextInput from '../../components/TextInput';

import {
  createProductRequest,
  openCreateProductModal,
  closeCreateProductModal,
  getProductsRequest,
} from '../../store/modules/products/actions';

import {cleanListTotal} from '../../store/modules/list/actions';

LogBox.ignoreAllLogs();

const ListDetail = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {list} = route.params;
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitValue] = useState(0.0);
  const [listTotal, setListTotal] = useState(0.0);
  const products = useSelector((state) => state.products);
  const selectedProducts = useSelector((state) => state.list.selectedProducts);
  const isNewProductModalVisible = products.createListModalOpen;

  useEffect(() => {
    dispatch(getProductsRequest(list.id));

    let totalList = 0;

    selectedProducts.map((product) => {
      if (product.listId === list.id) {
        totalList += product.amount;
      }
    });

    setListTotal(totalList);
  }, [list, dispatch, selectedProducts]);

  function closeProducModal() {
    dispatch(closeCreateProductModal());
  }

  function openProducModal() {
    dispatch(openCreateProductModal());
  }

  function handleCreateProduct(listId) {
    if (!name || !quantity || !unitPrice) {
      return;
    }

    dispatch(createProductRequest({name, unitPrice, quantity, listId}));
    setName('');
    setQuantity('');
    setUnitValue('');
  }

  function handlePressBack() {
    dispatch(cleanListTotal());
    navigation.navigate('Main');
  }

  return (
    <Container>
      <Header handlePressBack={handlePressBack} list={list} />
      <ProductList
        data={products.data}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        renderItem={({item}) =>
          item.fake ? (
            <NewProductButton onPress={openProducModal}>
              <NewProductButtonText>Novo</NewProductButtonText>
            </NewProductButton>
          ) : (
            <Products item={item} />
          )
        }
      />
      <ListAmount>
        <Amount> Total gasto : R$ {listTotal}</Amount>
      </ListAmount>
      <ListActions>
        <FinishButton>
          <FinishButtonText>Finalizar Lista</FinishButtonText>
        </FinishButton>
        <HistoryButton>
          <Icon name="book" size={24} color="#FFF" />
        </HistoryButton>
      </ListActions>
      <Modal
        title="Novo Produto"
        visible={isNewProductModalVisible}
        onRequestClose={closeProducModal}>
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
        <SubmitButton onPress={() => handleCreateProduct(list.id)}>
          <Icon name="check" size={24} color="#FFF" />
        </SubmitButton>
      </Modal>
    </Container>
  );
};

export default ListDetail;

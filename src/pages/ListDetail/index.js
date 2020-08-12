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

import {
  createProductRequest,
  openCreateProductModal,
  closeCreateProductModal,
  getProductsRequest,
} from '../../store/modules/products/actions';
import Products from '../../components/Products';
import Modal from '../../components/Modal';
import TextInput from '../../components/TextInput';

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
  const selectedList = useSelector((state) => state.list.selectedProducts);
  const isNewProductModalVisible = products.createListModalOpen;

  useEffect(() => {
    dispatch(getProductsRequest(list.id));
  }, [list, dispatch]);

  navigation.setOptions({
    title: list.name,
  });

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

  return (
    <Container>
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

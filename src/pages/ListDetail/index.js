import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
import TextInput from '../../components/TextInput';

console.disableYellowBox = true;

const ListDetail = ({route}) => {
  const navigation = useNavigation();
  const {list} = route.params;
  const [isNewProductModalVisible, setIsNewProductModalVisible] = useState(
    false,
  );
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [unitValue, setUnitValue] = useState(0.0);
  const [listTotal, setListTotal] = useState(0.0);
  const [products, setProducts] = useState([
    {
      id: 0,
      name: '',
      price: null,
      quantity: null,
      amount: null,
      fake: true,
    },
  ]);

  navigation.setOptions({
    title: list.name,
  });

  function toggleNewProducModalVisible() {
    setIsNewProductModalVisible(!isNewProductModalVisible);
  }

  function handleCreateProduct() {
    if (!name || !quantity || !unitValue) {
      return;
    }

    const newProduct = {
      id: products.length + 2,
      name,
      quantity,
      price: unitValue,
      amount: quantity * unitValue,
    };

    setProducts([...products, newProduct]);
    toggleNewProducModalVisible(false);
    setListTotal(quantity * unitValue + listTotal);
    setName('');
    setQuantity('');
    setUnitValue('');
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        renderItem={({item}) =>
          item.fake ? (
            <NewProductButton onPress={toggleNewProducModalVisible}>
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
        onRequestClose={toggleNewProducModalVisible}>
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
          value={unitValue}
          onChange={setUnitValue}
          keyboardType="numeric"
        />
        <SubmitButton onPress={handleCreateProduct}>
          <Icon name="check" size={24} color="#FFF" />
        </SubmitButton>
      </Modal>
    </Container>
  );
};

export default ListDetail;

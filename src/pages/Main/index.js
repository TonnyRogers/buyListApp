import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {
  Container,
  Content,
  Title,
  ListButton,
  ListName,
  BuyListener,
  NewListButton,
  EmptyList,
  EmptyListText,
  ListInfo,
  ListIcon,
  SubmitButton,
} from './styles';

import {
  createListRequest,
  closeListModal,
  openListModal,
} from '../../store/modules/list/actions';
import Modal from '../../components/Modal';
import Input from '../../components/TextInput';

const Main = ({navigation}) => {
  // const navigation = useNavigation();
  const lists = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const isNewListModalOpen = lists.creatListModalOpen;

  const [listName, setListName] = useState('');

  function listDetail(list) {
    navigation.navigate('ListDetail', {list});
  }

  function newListModalClose() {
    dispatch(closeListModal());
  }

  function newListModalOpen() {
    dispatch(openListModal());
  }

  function handleCreateList() {
    if (!listName) {
      return;
    }

    dispatch(createListRequest(listName));
    setListName('');
    newListModalClose();
  }

  return (
    <Container>
      <Content>
        <Title>Suas Listas de Compras</Title>
        <BuyListener
          testID="list-list"
          data={lists.data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => (
            <ListButton
              testID={`list-${item.id}`}
              onPress={() => listDetail(item)}>
              <ListIcon name="shopping-cart" size={24} color="#FFF" />
              <ListInfo>
                <ListName>{item.name}</ListName>
              </ListInfo>
            </ListButton>
          )}
          ListEmptyComponent={() => (
            <EmptyList>
              <Icon name="remove-shopping-cart" size={24} color="#028090" />
              <EmptyListText>Você não possui listas</EmptyListText>
            </EmptyList>
          )}
        />
      </Content>

      <NewListButton testID="new-list-btn" onPress={newListModalOpen}>
        <Icon name="add-shopping-cart" size={24} color="#00a896" />
      </NewListButton>

      <Modal
        testID="new-list-modal"
        visible={isNewListModalOpen}
        onRequestClose={newListModalClose}
        title="Nova Lista">
        <Input
          testID="new-list-input"
          placeholder="Dê um nome da sua nova lista"
          value={listName}
          onChange={setListName}
        />
        <SubmitButton testID="new-list-btn-submit" onPress={handleCreateList}>
          <Icon name="check" size={24} color="#FFF" />
        </SubmitButton>
      </Modal>
    </Container>
  );
};

export default Main;

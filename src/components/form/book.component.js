import React from 'react';
import { View } from "react-native";
import { Button, Input } from '@ui-kitten/components';
import API from '../../config/API';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const FormBook = () => {
    const [book, setBook] = React.useState({});

    const onPressBook = () => {
      axios({
        method: 'POST',
        url: `${API.baseURL}/books`,
        data: book,
      })
        .then(function (response) {
          console.log(response);
          AsyncStorage.setItem('token', response.data.data[0].token);
          AsyncStorage.setItem(
            'refreshToken',
            response.data.data[0].refreshToken,
          );
          //   if (response.status == 200) {
          //     navigation.navigate('Home');
          //   } else {
          //     alert('user or pass not valid');
          //   }
        })
        .catch(function (error) {
          console.log(error);
          console.log(error.response);
        });
    };
    
    return (
      <>
        <View>
          <Input
            label="Title"
            placeholder="Place your Text"
            value={book.book_name}
            onChangeText={(nextValue) =>
              setBook({...book, book_name: nextValue})
            }
          />
          {/* <Input
            label="image"
            placeholder="Place your Text"
            value={book.image}
            onChangeText={(nextValue) =>
              setBook({...book, image: nextValue})
            }
          /> */}
            <Select
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}>
              <SelectItem title="Option 1" />
            </Select>
          <Input
            label="genre"
            placeholder="Place your Text"
            value={book.genre_name}
            onChangeText={(nextValue) =>
              setBook({...book, genre_name: nextValue})
            }
          />
          <Input
            label="Author"
            placeholder="Place your Text"
            value={book.author_name}
            onChangeText={(nextValue) =>
              setBook({...book, author_name: nextValue})
            }
          />
          <Input
            label="Stock"
            placeholder="Place your Text"
            value={book.stock}
            onChangeText={(nextValue) => setBook({...book, stock: nextValue})}
          />
          <Input
            label="Status"
            placeholder="Place your Text"
            value={book.status}
            onChangeText={(nextValue) => setBook({...book, status: nextValue})}
          />
          <Input
            label="Description"
            placeholder="Place your Text"
            value={book.description}
            onChangeText={(nextValue) =>
              setBook({...book, description: nextValue})
            }
          />
          <Button onPress={onPressBook} status="info" appearance="outline">
            Save
          </Button>
        </View>
      </>
    );
};

export default FormBook;

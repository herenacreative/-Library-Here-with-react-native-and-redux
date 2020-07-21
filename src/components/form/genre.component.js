import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import {Icon, Button, Input} from '@ui-kitten/components';
import API from '../../config/API';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
// import {useNavigation} from '@react-navigation/native';

const FormGenre = (props) => {
  const [genre, setGenre] = React.useState({genre_name: ''});

  const onPressGenre = () => {
    // console.log(props.route.params, 'auth')
    // const token = props.auth.data.token
    // console.log(AsyncStorage.getItem("token"), 'ini token')
    AsyncStorage.getItem("token", (error, result) => {
      // console.log(result)
      axios({
      method: 'POST',
      url: `${API.baseURL}/genres`,
      data: genre,
      headers: {
        Authorization: result
      }
    })
    .then(function (response) {
      console.log(response);
      // AsyncStorage.setItem('token', response.data.data[0].token);
      // AsyncStorage.setItem(
      //   'refreshToken',
      //   response.data.data[0].refreshToken
      // );
    })
    .catch(function (error) {
      console.log(error);
    });
    })
    
  };

  return (
    <>
      <View>
        <Input
          label="Genre Name"
          placeholder="Name..."
          value={genre.genre_name}
          onChangeText={(nextValue) => setGenre({...genre, genre_name: nextValue})}
        />
        <Button onPress={onPressGenre} status="info" appearance="outline">
          Save
        </Button>
      </View>
    </>
  );
};

export default FormGenre;

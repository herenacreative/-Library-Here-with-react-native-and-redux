import React, {useState, useEffect} from 'react';
import {Card, Layout, Text} from '@ui-kitten/components';
import { Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import API from '../../config/API';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';


const CardBookScreen = () => {
 const navigation = useNavigation();
 const [book, setBook] = useState([])


  const navigateDetailsBook = item = () => {
    let id = item.book_id;
    navigation.navigate('Details', { id });
  };

  useEffect(() => {
    AsyncStorage.getItem("token", (error, result) => {
        axios({
          method: 'GET',
          url: `${API.baseURL}/books`,
          headers: {
            Authorization: result
          }
        })
        .then(res => {
          setBook(res.data.data.results)
        })
        .catch(error => {
          console.log(error)
          console.log(error.response);
        })
    })
  }, [])

  const navigateDetails = () => {
    navigation.navigate('Details');
  };
 
  return (
    <Layout style={styles.container}>
      <ScrollView>
        <Layout style={styles.layout} level="1">
          {book.map((Book) => (
            <Card onPress={navigateDetails}>
              <Layout style={styles.card}>
                {console.log(
                  `http://192.168.1.6:8080/uploads/${Book.image}`,
                  'image',
                )}
                <Image
                  style={styles.images}
                  source={{
                    url: `http://192.168.1.6:8080/uploads/${Book.image}`
                  }}
                />
                <Layout style={styles.text}>
                  <Text style={styles.title}>{Book.book_name}</Text>
                  <Text>{Book.genre_name}</Text>
                </Layout>
              </Layout>
            </Card>
          ))}
        </Layout>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    // justifyContent: 'space-between',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  card: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  text: {
    width: '70%'
  },
  title: {
    fontSize:14,
    fontWeight: 'bold',
    paddingBottom: 2
  },
});

export default CardBookScreen;
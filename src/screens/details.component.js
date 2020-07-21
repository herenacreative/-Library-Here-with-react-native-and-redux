import React, { useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Image} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import API from '../config/API';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import CardDetail from '../components/card/CardDetail.component';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const DetailsScreen = ({navigation}) => {

  // const [book, setBook] = useState([])

  // useEffect(() => {
  //   AsyncStorage.getItem("token", (error, result) => {
  //     axios({
  //       method: 'GET',
  //       url: `${API.baseURL}/books/${params}`,
  //       headers: {
  //         Authorization: result
  //       }
  //     })
  //       .then(res => {
  //         setBook(res.data.data.results)
  //       })
  //       .catch(error => {
  //         console.log("Error")
  //       })
  //   })
  // }, [])



  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="MyApp"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <CardDetail/>
      {/* <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">DETAILS</Text>
      </Layout> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
});

export default DetailsScreen

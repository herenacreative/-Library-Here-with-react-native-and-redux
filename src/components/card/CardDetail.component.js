import React,  {useState, useEffect}  from 'react';
import { StyleSheet, View, Image, SafeAreaView, ImageBackground} from 'react-native';
import { Button, Card, Layout, Text } from '@ui-kitten/components';
import API from '../../config/API';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const Header = (props) => (
    <View {...props}>
        <Text category='h6'>Maldives</Text>
        <Text category='s1'>By Wikipedia</Text>
    </View>
);

const Footer = (props) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
        <Button
            style={styles.footerControl}
            size='small'
            status='basic'>
            CANCEL
    </Button>
        <Button
            style={styles.footerControl}
            size='small'>
            ACCEPT
    </Button>
    </View>
);

const CardDetail = () => {
    const [book, setBook] = useState([])
    useEffect(() => {
        AsyncStorage.getItem("token", (error, result) => {
            const params = book_id
            axios({
                method: 'GET',
                url: `${API.baseURL}/books/${params}`,
                headers: {
                    Authorization: result
                }
            })
                .then(res => {
                    setBook(res.data.data.results)
                })
                .catch(error => {
                    console.log("Error")
                })
        })
    }, [])

    return(
      <React.Fragment>
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={styles.container}>
                {/* <Layout style={styles.header}>
                    
                </Layout> */}
                    {book.map(Book => (
                <Layout style={styles.footer}>
                    <ImageBackground
                        style={styles.image}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <Layout>
                                <Text>{Book.book_name}</Text>
                    </Layout>
                    <Layout>
                                <Text>{Book.genre} / {Book.stock}</Text>
                    </Layout>
                    <Layout>
                        <Text>
                                    {Book.description}
                        </Text>
                    </Layout>
                    <Layout>
                        <Button>borrow</Button>
                    </Layout>
                    {/* <Text style={styles.textFooter}>Welcome</Text> */}
                    {/* <Card style={styles.card} header={Header} footer={Footer}>
                        <Text>
                            The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea
                            of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian
                            continent
                        </Text>
                    </Card> */}
                </Layout>
                    ))}
            </Layout>
        </SafeAreaView>
    </React.Fragment>     
    )
};

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        flex: 1,
        margin: 2,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 2,
    },
    image: {
        width: 360,
        height: 300,
        // marginRight: 15,
    },
    container: {
        flex: 1,
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        // alignItems: 'center',

        paddingVertical: 20,
        paddingHorizontal: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#FF6C37',
        
    },
    footer: {
        flex: 2,
        backgroundColor: '#FF6C37',
        // borderTopRightRadius: 30,
        // borderTopLeftRadius: 30,
    },
    textFooter: {
        color: '#2B335A',
        fontWeight: 'bold',
        fontSize: 30
    },
    form: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#2B335A',
        borderBottomColor: '#2B335A',
        marginTop: 10
    }
});

export default CardDetail
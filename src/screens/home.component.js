import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  BottomNavigation,
  BottomNavigationTab,
  Icon
} from '@ui-kitten/components';
import CardBookScreen from '../components/card/CardBook.component';
import SearchScreen from '../components/Layout/Search.component';

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;

const BellIcon = (props) => <Icon {...props} name="bell-outline" />;

export const HomeScreen = ({navigation}) => {
   const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navigateDetails = () => {
    navigation.navigate('Details');
  };
  const navigateBooks = () => {
    navigation.navigate('Books');
  };
  const navigateAuthor = () => {
    navigation.navigate('Author');
  };
  const navigateHistory = () => {
    navigation.navigate('History');
  };
  const navigateRegister = () => {
    navigation.navigate('Register');
  };
  const navigateGenre = () => {
    navigation.navigate('Genre');
  };


  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout style={{flex: 1}}>
        <SearchScreen />
        <CardBookScreen />
        {/* <Button onPress={navigateDetails}>OPEN DETAILS</Button> */}
        {/* <Button onPress={navigateGenre}>OPEN Genre</Button> */}
        {/* <Button onPress={navigateAuthor}>OPEN Author</Button> */}
      </Layout>
      {/* <Layout style={{flex: 2, justifyContent: 'right', alignItems: 'right'}}>
        <Button onPress={navigateRegister}>Register</Button>
      </Layout> */}
      {/* <BottomMenu /> */}
      {/* <BottomMenu/> */}
      {/* <BottomNavigation
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}>
        <BottomNavigationTab
          onPress={navigateBooks}
          icon={PersonIcon}
          title="Home"
        />
        <BottomNavigationTab
          onPress={navigateHistory}
          icon={BellIcon}
          title="History"
        />
        <BottomNavigationTab
          onPress={navigateBooks}
          icon={PersonIcon}
          title="Admin"
        />
      </BottomNavigation> */}
    </SafeAreaView>
  );
};

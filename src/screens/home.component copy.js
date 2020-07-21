import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  BottomNavigation,
  BottomNavigationTab,
  // Icon
} from '@ui-kitten/components';
// import BottomMenu from '../routes/BottomMenu';

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
    navigation.navigate('Authors');
  };
  const navigateRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
      {/* <Layout style={{flex: 2, justifyContent: 'right', alignItems: 'right'}}>
        <Button onPress={navigateRegister}>Register</Button>
      </Layout> */}
      {/* <BottomMenu /> */}
      {/* <BottomMenu/> */}
      <BottomNavigation
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}>
        <BottomNavigationTab
          onPress={navigateBooks}
          icon={PersonIcon}
          title="Books"
        />
        <BottomNavigationTab
          onPress={navigateAuthor}
          icon={BellIcon}
          title="Authors"
        />
      </BottomNavigation>
    </SafeAreaView>
  );
};

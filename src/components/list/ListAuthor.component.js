import React from 'react';
import {Button, Icon, List, ListItem} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const data = new Array(8).fill({
  title: 'Name Author',
});

const ListAuthor = () => {
  const renderItemAccessory = (props) => (<>
  <Button size="tiny" style={{marginRight: 10}}>Edit</Button>
  <Button size="tiny">Delete</Button></>);

  const renderItem = ({item, index}) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      accessoryRight={renderItemAccessory}
    />
  );

  return <List style={styles.container} data={data} renderItem={renderItem} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default ListAuthor;

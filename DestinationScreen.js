// DestinationListScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const data = [
  { id: '1', location: 'Paris', image: require('./images/paris.jpg') },
  { id: '2', location: 'New York', image: require('./images/new_york.jpg') },
  { id: '3', location: 'London', image: require('./images/london.jpg') },
  { id: '4', location: 'Tokyo', image: require('./images/tokyo.jpg') },
  { id: '5', location: 'Sydney', image: require('./images/sydney.jpg') },
  { id: '6', location: 'Rome', image: require('./images/rome.jpg') },
  { id: '7', location: 'Cairo', image: require('./images/cairo.jpg') },
  { id: '8', location: 'Dubai', image: require('./images/dubai.jpg') },
  { id: '9', location: 'New Delhi', image: require('./images/new_delhi.jpg') },
  { id: '10', location: 'Islamabad', image: require('./images/islamabad.jpg') },
  // Add more destinations as needed
];

const DestinationListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('DetailsScreen', { location: item.location })}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light background color
  },
  listContainer: {
    padding: 16,
  },
  itemContainer: {
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white', // Item background color
    elevation: 5, // Android elevation for shadow
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 8,
  },
  textContainer: {
    padding: 12,
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Text color
  },
});

export default DestinationListScreen;

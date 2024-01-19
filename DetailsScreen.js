// DetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking , ImageBackground } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Import or define the 'data' array
const data = [
  { id: '1', location: 'Paris', latitude: 48.8566, longitude: 2.3522 },
  { id: '2', location: 'New York', latitude: 40.7128, longitude: -74.0060 },
  { id: '3', location: 'London', latitude: 51.5099, longitude: -0.1180 },
  { id: '4', location: 'Tokyo', latitude: 35.6895, longitude: 139.6917 },
  { id: '5', location: 'Sydney', latitude: -33.8688, longitude: 151.2093 },
  { id: '6', location: 'Rome', latitude: 41.9028, longitude: 12.4964 },
  { id: '7', location: 'Cairo', latitude: 30.0444, longitude: 31.2357 },
  { id: '8', location: 'Dubai', latitude: 25.276987, longitude: 55.296249 },
  { id: '9', location: 'New Delhi', latitude: 28.6139, longitude: 77.2090 },
  { id: '10', location: 'Islamabad', latitude: 33.6844, longitude: 73.0479 },
  // Add more destinations as needed
];

const DetailsScreen = ({ route }) => {
  const { location } = route.params;
  const selectedLocation = data.find((item) => item.location === location);
  let description = '';
  if (location === 'Paris') {
    description = 'Paris is the capital and most populous city of France. Known as the "City of Love," it is renowned for its art, culture, and iconic landmarks such as the Eiffel Tower.';
  } else if (location === 'New York') {
    description = 'New York City, often simply called New York, is the most populous city in the United States. It is known for its diverse culture, world-class entertainment, and iconic landmarks like Times Square and Central Park.';
  } else if (location === 'London') {
    description = 'London is the capital and largest city of England and the United Kingdom. With its rich history, diverse culture, and iconic landmarks like the Tower of London, it\'s a global city known for finance, fashion, and arts.';
  } else if (location === 'Tokyo') {
    description = 'Tokyo is the capital city of Japan, known for its futuristic technology, bustling streets, and vibrant culture. Explore ancient temples, modern skyscrapers, and enjoy delicious Japanese cuisine.';
  } else if (location === 'Sydney') {
    description = 'Sydney is the largest and most populous city in Australia, famous for its stunning harbor, iconic Sydney Opera House, and beautiful beaches like Bondi. Enjoy a mix of urban and natural attractions.';
  } else if (location === 'Rome') {
    description = 'Rome, the capital of Italy, is a city steeped in history and culture. Explore ancient ruins like the Colosseum, visit Vatican City, and savor delicious Italian cuisine in this timeless city.';
  } else if (location === 'Cairo') {
    description = 'Cairo, the capital of Egypt, is a vibrant city with a rich history. Discover ancient wonders like the Pyramids of Giza and the Sphinx, explore bustling markets, and experience the unique charm of Cairo.';
  } else if (location === 'Dubai') {
    description = 'Dubai, a city in the United Arab Emirates, is known for its modern architecture, luxury shopping, and lively nightlife. Visit the Burj Khalifa, Palm Jumeirah, and experience the unique blend of tradition and innovation.';
  } else if (location === 'New Delhi') {
    description = 'New Delhi is the capital of India, known for its historical landmarks, diverse culture, and bustling markets. Explore attractions like the Red Fort, India Gate, and immerse yourself in the vibrant street life.';
  } else if (location === 'Islamabad') {
    description = 'Islamabad is the capital city of Pakistan, nestled against the backdrop of the Margalla Hills. Known for its modern architecture, greenery, and diplomatic enclave, it offers a unique blend of natural beauty and urban development.';
  }

  const openGoogleMaps = () => {
    const { latitude, longitude } = selectedLocation;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  return (
    <ImageBackground
      source={require('./images/travelback.jpg')} // Replace with the path to your background image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Location Title */}
        <Text style={styles.title}>{location}</Text>

        {/* Location Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>

        {/* Google Maps and Touchable Map Container */}
        <View style={styles.mapContainer}>
          {/* Google Maps */}
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: selectedLocation.latitude,
              longitude: selectedLocation.longitude,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            }}
          >
            <Marker
              coordinate={{ latitude: selectedLocation.latitude, longitude: selectedLocation.longitude }}
              title={location}
              description="Marker Description"
            />
          </MapView>

          {/* Touchable Map */}
          <TouchableOpacity style={styles.touchableMap} onPress={openGoogleMaps}>
            <Text style={styles.touchableText}>Open in Google Maps</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Center the text
    color: 'black', // Text color
    fontFamily: 'System',
    fontWeight: 'bold',
    marginTop: 40,
    textDecorationLine: 'underline',
  },
  descriptionContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 17,
    backgroundColor: 'rgba(200, 200, 200, 0.8)', // R: 200, G: 200, B: 200 (light gray), Alpha: 0.8
    marginTop: 40,
    borderRadius: 10,
  overflow: 'hidden',
  },
  description: {
    fontSize: 16,
    color: 'black', // Text color
    textAlign: 'center', // Center the text
  },
  mapContainer: {
    marginTop: 16,
  },
  map: {
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  touchableMap: {
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 5,
    alignItems: 'center',
  },
  touchableText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
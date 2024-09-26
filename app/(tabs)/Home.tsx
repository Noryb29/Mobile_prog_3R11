import { Text, View, Image } from 'react-native';
import React from 'react';
import styles from '@/assets/styles/home_style'; // Import the separated stylesheet

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Page</Text>
    </View>
  );
};

export default Home;

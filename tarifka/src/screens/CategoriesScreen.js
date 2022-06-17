import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import api from '../api';
import CategoriesCard from '../components/CategoriesCard';

const CategoriesScreen = ({navigation}) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/categories.php');
        setCategories(response.data.categories);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({item}) => {
          return <CategoriesCard item={item} navigation={navigation} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'orange',
  },
});

export default CategoriesScreen;

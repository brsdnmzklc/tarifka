import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import api from '../api';
import MealsCard from '../components/MealsCard';

const MealsScreen = ({route, navigation}) => {
  const categoryName = route.params.categoryName;
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/filter.php?c=${categoryName}`);
        setMeals(response.data.meals);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={({item}) => {
          return <MealsCard item={item} navigation={navigation} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
});

export default MealsScreen;

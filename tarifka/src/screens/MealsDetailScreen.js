import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import YoutubeButton from '../components/YoutubeButton';
import api from '../api';

const MealsDetailScreen = ({route}) => {
  const mealName = route.params.mealName;
  const source = route.params.source;
  const [mealDetail, setMealDetail] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/search.php?s=${mealName}`);
        setMealDetail(response.data.meals[0]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  const youtubeUrl = mealDetail && mealDetail.strYoutube;
  return <View style={styles.container}>
    <Image source={{uri: source}} style={styles.image} />
    <Text style={styles.mealText}>{mealName}</Text>
    {mealDetail && <Text style={styles.areaText}>{mealDetail.strArea}</Text>}
    <View style={{borderWidth: 1, borderColor: 'rgba(52,52,52,0.8)'}} />
    <ScrollView>
      {mealDetail && <Text style={styles.instructionsText}>
          {mealDetail.strInstructions}
        </Text>}
    </ScrollView>
    <YoutubeButton url={youtubeUrl} />
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 250,
  },
  mealText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'brown',
    marginBottom: 5,
  },
  areaText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'brown',
    marginBottom: 5,
  },
  instructionsText: {
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
  },
});

export default MealsDetailScreen;

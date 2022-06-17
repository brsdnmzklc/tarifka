import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const MealsCard = ({item, navigation}) => {
  const source = item.strMealThumb;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.mealsContainer}
        onPress={() =>
          navigation.navigate('MealsDetailScreen', {
            mealName: item.strMeal,
            source,
          })
        }>
        <Image source={{uri: source}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.strMeal}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    margin: 10,
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 10,
  },
  text: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#fff',
  },
  textContainer: {
    height: 50,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default MealsCard;

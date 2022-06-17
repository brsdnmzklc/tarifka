import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const CategoriesCard = ({item, navigation}) => {
  const source = item.strCategoryThumb;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerCategory}
        onPress={() =>
          navigation.navigate('MealsScreen', {categoryName: item.strCategory})
        }>
        <Image style={styles.image} source={{uri: source}} />
        <Text style={styles.text}>{item.strCategory}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 70,
    backgroundColor: '#ffff',
    borderRadius: 50,
    margin: 10,
    justifyContent: 'center',
  },
  containerCategory: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    alignSelf: 'center',
  },
  image: {
    height: 70,
    width: 110,
    marginRight: 13,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
});

export default CategoriesCard;

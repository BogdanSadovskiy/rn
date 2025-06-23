import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const EventsCard = ({data, onPress}: any) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.cardWrapper}
        source={{ uri: data.wrapper }} // ← тут правильне зображення з data.wrapper
      />
      <Text style={styles.cardType}>{data.type}</Text>
      <Text style={styles.cardTitle}>{data.title}</Text>
      <View style={styles.cardPrice}>
        <Text style={styles.cardPriceDicount}>
          {data.currencySymbol} {data.discountPrice}
        </Text>
        <Text style={styles.cardPriceRegular}>
          {data.currencySymbol} {data.regularPrice}
        </Text>
      </View>
      <View style={styles.cardDetails}>
        <View>
          <Text>{data.participants} Participants</Text>
        </View>

        <View>
          <Text>{data.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    paddingBottom: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  cardWrapper: {
    width: '100%',
    height: 136,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
  },
  cardType: {
    position: 'absolute',
    top: 14,
    left: 0,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#1668E3',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: 12,
    color: '#fff',
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    marginBottom: 10,
    marginLeft: 10,
  },
  cardPrice: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  cardPriceDicount: {
    fontSize: 12,
    color: '#FF3A46',
    fontWeight: '600',
    marginLeft: 10,
    marginRight: 8,
  },
  cardPriceRegular: {
    fontSize: 10,
    color: '#A3A3A3',
    fontWeight: '500',
    textDecorationLine: 'line-through',
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'flex-end',
  },
});

export default EventsCard;

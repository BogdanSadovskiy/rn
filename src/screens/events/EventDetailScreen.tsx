import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import LocationIcon from '../../assets/WhiteLocationIcon.png'

const EventDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {event} = route.params;

  return (
    <ScrollView style={styles.container}>

      <Image style={styles.banner} source={{ uri: event.wrapper }} />

      <View style={styles.content}>

        <Text style={styles.title}>{event.title}</Text>


        <View style={styles.priceRow}>
          <Text style={styles.discountPrice}>
            {event.currencySymbol} {event.discountPrice}
          </Text>
          <Text style={styles.regularPrice}>
            {event.currencySymbol} {event.regularPrice}
          </Text>
        </View>


        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Image
              source={require('../../assets/smallUserIcon.png')}
              style={styles.metaIcon}
            />
            <Text style={styles.metaText}>
              {event.participants} Participants
            </Text>
          </View>

          <View style={styles.metaItem}>
            <Image
              source={require('../../assets/calendar.png')}
              style={styles.metaIcon}
            />
            <Text style={styles.metaText}>{event.date}</Text>
          </View>

          <View style={styles.metaItem}>
            <Image
              source={require('../../assets/blueLocationIcon.png')}
              style={styles.metaIcon}
            />
            <Text style={styles.metaText}>Jakarta, Indonesia</Text>
          </View>
        </View>


        <Text style={styles.sectionTitle}>About Event</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          lobortis erat nisi, at pretium tellus facilisis aliquet. Nam sit amet
          lacinia odio. Aenean ornare eu orci at tincidunt. Aliquam ac ultrices
          odio.
        </Text>


        <TouchableOpacity style={styles.mapButton}>
         <Image source={LocationIcon} style={styles.mapButtonIcon} />
         <Text style={styles.mapButtonText}>View Maps Location</Text>
         <View style={{ width: 24 }} />
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('EventRegistrationScreen', { event })}
        >
          <Text style={styles.registerButtonText}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#FFFFFF' },
  banner: {
    width: '100%',
    height: 220,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 12,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  discountPrice: {
    fontSize: 18,
    color: '#FF3A46',
    fontFamily: 'Poppins-Bold',
    marginRight: 12,
  },
  regularPrice: {
    fontSize: 14,
    color: '#A3A3A3',
    textDecorationLine: 'line-through',
    fontFamily: 'Poppins-Regular',
  },
   metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
   },
    metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    width: '48%',
   },

  metaIcon: {
    minWidth: 24,
    minHeight: 24,
    marginRight: 8,
  },
  metaText: {
    fontSize: 14,
    color: '#7A7A7A',
    fontFamily: 'Poppins-Regular',
  },
  sectionTitle: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#444444',
    fontFamily: 'Poppins-Regular',
    marginBottom: 20,
    lineHeight: 22,
  },
  mapButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 335,
    minHeight: 50,
    paddingHorizontal: 20,
    paddingVertical: 13,
    backgroundColor: '#E12632',
    borderRadius: 50,
    marginBottom: 16,

  },

  mapButtonIcon: {
    width: 24,
    height: 24,
  },
  mapButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
  registerButton: {
    minWidth: 335,
    minHeight: 50,
    backgroundColor: '#1668E3',
    paddingVertical: 16,
    borderRadius: 50,
    marginBottom: 40,
    alignItems: 'center',
  },
  registerButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
  },
});

export default EventDetailsScreen;

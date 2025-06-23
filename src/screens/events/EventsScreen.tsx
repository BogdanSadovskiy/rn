import {
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useMemo, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import EventsCard from '../../components/eventsCard.tsx';



const EventsScreen = () => {
  const navigation = useNavigation();
  const [filter, setFilter] = useState([
    {
      label: 'All',
      value: 'all',
      active: true,
    },
    {
      label: 'New',
      value: 'new',
      active: false,
    },
    {
      label: 'Offline',
      value: 'off',
      active: false,
    },
    {
      label: 'Online',
      value: 'on',
      active: false,
    },
    {
      label: 'Free',
      value: 'free',
      active: false,
    },
  ]);
  const eventsData = [
    {
      id: 1,
      type: 'online',
      title: 'Mastering the Entrepreneur Mindset 1',
      regularPrice: 45.5,
      discountPrice: 25.5,
      currency: 'USD',
      currencySymbol: '$',
      participants: 12,
      date: 'May 22, 2025',
      wrapper: 'https://picsum.photos/seed/picsum/200/300',
    },
    {
      id: 2,
      type: 'offline',
      title: 'Mastering the Entrepreneur Mindset 2',
      regularPrice: 45.5,
      discountPrice: 25.5,
      currency: 'USD',
      currencySymbol: '$',
      participants: 12,
      date: 'May 22, 2025',
      wrapper: 'https://picsum.photos/seed/picsum/200/300',
    },
    {
      id: 3,
      type: 'new',
      title: 'Mastering the Entrepreneur Mindset 3 ',
      regularPrice: 45.5,
      discountPrice: 25.5,
      currency: 'USD',
      currencySymbol: '$',
      participants: 12,
      date: 'May 22, 2025',
      wrapper: 'https://picsum.photos/seed/picsum/200/300',
    },
    {
      id: 4,
      type: 'free',
      title: 'Mastering the Entrepreneur Mindset 4',
      regularPrice: 45.5,
      discountPrice: 25.5,
      currency: 'USD',
      currencySymbol: '$',
      participants: 12,
      date: 'May 22, 2025',
      wrapper: 'https://picsum.photos/seed/picsum/200/300',
    },
  ];
  // handlers
  // count
  const filteredEvents = useMemo(() => {
    // filtering events by type
    const activeFilter = filter.filter(item => item.active)[0];
    return activeFilter.value !== 'all'
      ? eventsData.filter(
          item => item.type === activeFilter.label.toLowerCase(),
        )
      : eventsData;
  }, [filter, eventsData]);

  // TODO: need optimize
  const handleFilterChange = (value: string) => {
    let newFilter = [...filter];
    newFilter.map(item => {
      item.value === value ? (item.active = true) : (item.active = false);
    });
    setFilter(newFilter);
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.topSectionContainer}>
          <Text style={styles.topSectionTitle}>Event</Text>
          <View style={styles.topSectionImages}>
            <Image
              style={styles.topSectionIcons}
              source={require('../../assets/favorite_icon.png')}
            />
            <Image
              style={styles.topSectionIcons}
              source={require('../../assets/cart_icon.png')}
            />
          </View>
        </View>
        <View style={styles.divideLine} />
        <View style={styles.filters}>
          {filter.map((item: any, index: number) => (
            <TouchableOpacity
              key={index}
              style={{
                ...styles.filtersBtn,
                borderColor: item.active && '#1668E3',
              }}
              onPress={() => {
                handleFilterChange(item.value);
              }}>
              <Text
                style={{
                  ...styles.filtersBtnTxt,
                  color: item.active && '#1668E3',
                }}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
       <ScrollView showsVerticalScrollIndicator={false}>
         {filteredEvents.map((item: any, index: number) => (
           <EventsCard
             key={index}
             data={item}
             onPress={() => navigation.navigate('EventDetailsScreen', { event: item })}
           />
         ))}
       </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingBottom: 200,
  },
  topSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  topSectionTitle: {
    fontSize: 24,
    fontWeight: 600,
  },
  topSectionImages: {
    flexDirection: 'row',
  },
  topSectionIcons: {
    maxHeight: 22,
    maxWidth: 22,
    minWidth: 22,
    minHeight: 22,
    marginLeft: 16,
  },
  divideLine: {
    height: 0.5,
    backgroundColor: '#A3A3A3',
    marginBottom: 18,
  },
  filters: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  filtersBtn: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#A3A3A3',
    borderRadius: 8,
  },
  filtersBtnTxt: {
    color: '#A3A3A3',
    fontSize: 10,
    fontWeight: 600,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});

export default EventsScreen;

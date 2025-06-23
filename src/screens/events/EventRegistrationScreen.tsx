import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

const EventRegistrationScreen = () => {
  const {event} = useRoute().params;
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (field, value) => {
    setForm({...form, [field]: value});
  };

  const isFormValid =
    form.name && form.email && form.phone && form.address ? true : false;

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: event.wrapper}} style={styles.image} />
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.price}>
        <Text style={styles.discount}>${event.discountPrice}</Text>{' '}
        <Text style={styles.regular}>${event.regularPrice}</Text>
      </Text>
      <Text style={styles.info}>Fill in your biodata to continue payment</Text>

      <TextInput
        placeholder="Name"
        value={form.name}
        onChangeText={value => handleChange('name', value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={form.email}
        onChangeText={value => handleChange('email', value)}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Phone Number"
        value={form.phone}
        onChangeText={value => handleChange('phone', value)}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="Address"
        value={form.address}
        onChangeText={value => handleChange('address', value)}
        style={styles.input}
      />

      <TouchableOpacity
        style={[styles.btn, !isFormValid && styles.btnDisabled]}
        disabled={!isFormValid}>
        <Text style={styles.btnTxt}>Continue Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20},
  image: {width: '100%', height: 200, borderRadius: 10},
  title: {fontSize: 20, fontWeight: 'bold', marginVertical: 10},
  price: {fontSize: 18, marginBottom: 10},
  discount: {color: 'red'},
  regular: {
    textDecorationLine: 'line-through',
    color: '#888',
    fontSize: 14,
  },
  info: {marginBottom: 10},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 12,
  },
  btn: {
    backgroundColor: '#1668E3',
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  btnDisabled: {
    backgroundColor: '#ccc',
  },
  btnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default EventRegistrationScreen;

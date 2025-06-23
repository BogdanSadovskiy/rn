import React from 'react';
import {Alert, Text, TouchableOpacity, PermissionsAndroid, Platform, View, StyleSheet} from 'react-native';
import {launchCamera, CameraOptions} from 'react-native-image-picker';
import Geolocation from '@react-native-community/geolocation';

const ImagePickerDemo = () => {
  const handleTakePhoto = async () => {
    try {
      /* ==== runtime permissions ==== */
      if (Platform.OS === 'android') {
        const permissions: string[] = [
          PermissionsAndroid.PERMISSIONS.CAMERA,
        ];

        // permission needed to save to gallery
        if (Platform.Version < 29) {
          permissions.push(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
        } else if (Platform.Version >= 33 && PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES) {
          permissions.push(PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES);
        }

        // @ts-ignore
        const granted = await PermissionsAndroid.requestMultiple(permissions);

        if (granted[PermissionsAndroid.PERMISSIONS.CAMERA] !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('Відмовлено', 'Немає дозволу на камеру');
          return;
        }

        if (
          (Platform.Version < 29 &&
            granted[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] !== PermissionsAndroid.RESULTS.GRANTED) ||
          (Platform.Version >= 33 &&
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES &&
            granted[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] !== PermissionsAndroid.RESULTS.GRANTED)
        ) {
          Alert.alert('Відмовлено', 'Немає дозволу на збереження фото');
          return;
        }
      }

      /* ==== open camera ==== */
      const options: CameraOptions = {
        mediaType: 'photo',
        cameraType: 'back',
        saveToPhotos: true,
        quality: 0.8,
      };

      const result = await launchCamera(options);

      console.log('launchCamera result', result);

      if (result.didCancel) {
        console.log('Користувач скасував');
        return;
      }

      if (result.errorCode) {
        Alert.alert('Помилка камери', result.errorMessage ?? result.errorCode);
        return;
      }

      if (result.assets && result.assets.length > 0) {
        const { uri } = result.assets[0];
        Alert.alert('Фото збережено', uri ?? 'URI відсутній');
      }
    } catch (e: any) {
      console.error('handleTakePhoto error', e);
      Alert.alert('Несподівана помилка', JSON.stringify(e));
    }
  };
  const handleGetLocation = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs location permission to get your current position',
          buttonPositive: 'OK',
        },
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Permission Denied', 'Location permission not granted');
        return;
      }
    }

    Geolocation.getCurrentPosition(
      position => {
        Alert.alert(
          'Geolocation',
          `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`,
        );
      },
      error => {
        Alert.alert('Error', error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
        <Text style={styles.text}>Зробити фото</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleGetLocation}>
        <Text style={styles.text}>Отримати геолокацію</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginVertical: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#115a41',
    borderRadius: 8,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default ImagePickerDemo;

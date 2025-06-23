import {Text} from 'react-native-gesture-handler';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
  destScreen: string;
};

const ProfileButton = ({title, destScreen}: Props) => {
  // init
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          // @ts-ignore
          navigation.navigate(destScreen);
        }}>
        <Text>{title}</Text>
        <Image style={styles.arrow} source={require('../assets/arrow.png')} />
      </TouchableOpacity>
      <View style={styles.line}></View>
    </>
  );
};

const styles = StyleSheet.create({
  arrow: {
    width: 24,
    height: 24,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20
  },
  line: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 20,
  },
});

export default ProfileButton;

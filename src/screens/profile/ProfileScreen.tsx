import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DividerProfile from '../../components/dividerProfile.tsx';
import ProfileButton from '../../components/profileButton.tsx';
import LogOutBtn from '../../components/logOutBtn.tsx';

const ProfileScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.area}>
        <View style={styles.info}>
          <Image
            style={styles.infoImg}
            source={require('../../assets/profile.png')}
          />
          <View style={styles.infoTxt}>
            <Text style={styles.infoTitle}>Claudia Alves</Text>
            <Text style={styles.infoMail}>claudiaalves@mail.com</Text>
          </View>
        </View>
        <DividerProfile />
        <View style={styles.actions}>
          <ProfileButton title="Edit Profile" destScreen="EditProfile" />
          <ProfileButton title="Product Purchased" destScreen="EditProfile" />
          <ProfileButton title="Transaction History" destScreen="EditProfile" />
          <ProfileButton title="Contact Us" destScreen="EditProfile" />
          <ProfileButton title="Settings" destScreen="SettingsScreen" />
        </View>
        <DividerProfile />
        <LogOutBtn />
        <Text style={styles.version}>App Version 1.0</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  area: {
    position: 'relative',
    height: '100%',
  },
  version: {
    position: 'absolute',
    bottom: 34,
    // left: '50%',
    // transform: [{translateX: -50}],
    alignSelf: 'center',
    color: '#CCC',
    fontSize: 14,
  },
  info: {
    marginTop: 8,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  infoImg: {
    width: 55,
    height: 55,
    borderRadius: 50,
    objectFit: 'cover',
  },
  infoTxt: {
    marginLeft: 8,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 600,
    color: '#000',
  },
  infoMail: {
    fontSize: 14,
    color: '#000',
    opacity: 0.5,
    fontWeight: 400,
  },
  actions: {
    marginBottom: 20,
  },
});

export default ProfileScreen;

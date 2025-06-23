import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {logOut} from '../store/slices/authSlice.ts';
import auth from "../utils/auth.ts";

const LogOutBtn = () => {
  //init
  const dispatch = useDispatch();

  //handlers
  const handleLogout = () => {
    auth.logOut();
    dispatch(logOut());
  };
  return (
    <>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          handleLogout();
        }}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 20,
  },
  btnText: {
    color: '#FF3A46',
    fontSize: 14,
    fontWeight: 600,
  },
});

export default LogOutBtn;

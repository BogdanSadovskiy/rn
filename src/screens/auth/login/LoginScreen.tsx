import {Text, TouchableOpacity} from 'react-native';
import auth from '../../../utils/auth.ts';
import {useDispatch} from 'react-redux';
import {setToken} from '../../../store/slices/authSlice.ts';

const LoginScreen = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Text>Login Screen</Text>
      <TouchableOpacity
        onPress={async () => {
          await auth.setToken('accessToken');
          dispatch(setToken('accessToken'));
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </>
  );
};

export default LoginScreen;

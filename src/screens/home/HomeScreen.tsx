import {Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement} from "../../store/slices/globalSlice.ts";
import {RootState} from '../../store';

const HomeScreen = () => {
  const test = useSelector((state: RootState) => state.example.value);
  const dispatch = useDispatch();
  return (
    <>
      <Text>HomeScreen - {test}</Text>
        <TouchableOpacity onPress={() => dispatch(decrement())}>
            <Text>
                Decrement
            </Text>
        </TouchableOpacity>
    </>
  );
};

export default HomeScreen;

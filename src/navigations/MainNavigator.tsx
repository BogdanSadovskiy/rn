import StackNavigator from './StackNavigator.tsx';
import AuthNavigator from './AuthNavigator.tsx';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {NavigationContainer} from '@react-navigation/native';

const MainNavigator = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  useEffect(()=>{
    console.log(isAuthenticated)
  }, [isAuthenticated]);
  return (
    <NavigationContainer>
      {isAuthenticated ? <StackNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;

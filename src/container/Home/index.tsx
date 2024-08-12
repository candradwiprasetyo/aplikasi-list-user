import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import List from './List'; // The screen with the FlatList
import DetailUser from './Detail'; // The screen that shows the details

type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type RootStackParamList = {
  ListUser: undefined;
  DetailUser: {item: User}; // Define the parameters passed to the DetailScreen
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListUser">
        <Stack.Screen name="ListUser" component={List} />
        <Stack.Screen name="DetailUser" component={DetailUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

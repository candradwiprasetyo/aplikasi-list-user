import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {RootStackParamList} from './index';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'DetailUser'>;

type Props = {
  route: DetailScreenRouteProp;
};

const DetailScreen: React.FC<Props> = ({route}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.containerMap}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: Number(item.address.geo.lat),
            longitude: Number(item.address.geo.lng),
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            coordinate={{
              latitude: Number(item.address.geo.lat),
              longitude: Number(item.address.geo.lng),
            }}
          />
        </MapView>
      </View>
      <ScrollView style={{top: 390, maxHeight: 400}}>
        <View style={{flex: 1, alignItems: 'center', marginBottom: 20}}>
          <Image
            source={{uri: 'https://i.pravatar.cc/300?v=' + item.id}}
            style={{width: 100, height: 100, borderRadius: 10}}
          />
        </View>
        <View>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.title}>{item.email}</Text>
        </View>
        <View>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.title}>{item.phone}</Text>
        </View>
        <View>
          <Text style={styles.label}>Website</Text>
          <Text style={styles.title}>{item.website}</Text>
        </View>
        <View>
          <Text style={styles.label}>Company</Text>
          <Text style={styles.title}>{item.company.name}</Text>
        </View>
        <View>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.title}>
            {item.address.street +
              ', ' +
              item.address.suite +
              ', ' +
              item.address.city +
              ', ' +
              item.address.zipcode}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: 'regular',
  },
  containerMap: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default DetailScreen;

/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../../styles';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from 'react-native-responsive-fontsize';

export default class RetailerCard extends Component {
  render() {
    return (
      <>
        <View>
          <TouchableOpacity
            style={{
              padding: 20,
              margin: 10,
              backgroundColor: '#fff',
              elevation: 1,
            }}
            onPress={() => {
              this.props.navigation.navigate('retailers');
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.greyText, { textAlign: 'left' }]}>
                Guest
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    'Warning',
                    'Are you sure that you want to remove this retailer ?',
                    [
                      {
                        text: 'Yes',
                        onPress: () => console.log('Yes button clicked'),
                      },
                      {
                        text: 'No',
                        onPress: () => console.log('No button clicked'),
                        style: 'cancel',
                      },
                    ],
                    {
                      cancelable: true,
                    },
                  );
                }}>
                <Icon
                  name="circle-with-cross"
                  color="#FE3F3F"
                  size={RFValue(25)}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="location-pin" color="#93bdfd" size={RFValue(20)} />
              <Text
                allowFontScaling={false}
                style={[
                  styles.greyText,
                  { color: '#999', fontSize: RFValue(15) },
                ]}>
                {' '}
                Location: 3-4 km
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'center',
              }}>
              <Text
                allowFontScaling={false}
                style={[
                  styles.greyText,
                  { color: '#999', fontSize: RFValue(15) },
                ]}>
                Generate Coupon
                {'  '}
              </Text>
              <MaterialCommunityIcons
                name="tag"
                color="#93bdfd"
                size={RFValue(20)}
              />
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

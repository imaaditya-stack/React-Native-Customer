/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

import { styles } from '../../styles';
import { PRIMARY_COLOR } from '../../styles/colors';

class Welcome extends Component {
  render() {
    return (
      <React.Fragment>
        <StatusBar
          translucent
          backgroundColor="#93bdfd"
          barStyle="light-content"
        />
        <View
          style={[
            styles.justifiedContainer,
            { backgroundColor: PRIMARY_COLOR },
          ]}>
          <Text
            style={[styles.boldText, { fontSize: RFValue(60) }]}
            allowFontScaling={false}>
            SLOUNGE
          </Text>
          <Text
            style={[styles.whiteText, { fontSize: RFValue(20) }]}
            allowFontScaling={false}>
            A happier place for consumers
          </Text>
          <Image
            source={require('../../assets/images/cart.png')}
            style={{
              width: wp('60%'),
              height: hp('30%'),
              marginTop: 30,
              marginBottom: 20,
            }}
          />
          <Text
            style={[styles.boldText, { fontSize: RFValue(40) }]}
            allowFontScaling={false}>
            Get Started
          </Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={[
                styles.whitebutton,
                {
                  marginTop: 20,
                  marginBottom: 20,
                  marginRight: 10,
                  elevation: 10,
                },
              ]}
              activeOpacity={0.5}
              onPress={() => {
                this.props.navigation.navigate('register');
              }}>
              <Text
                style={[styles.greyText, { color: '#93bdfd' }]}
                allowFontScaling={false}>
                SIGN UP
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.whitebutton,
                {
                  marginTop: 20,
                  marginBottom: 20,
                  backgroundColor: '#93bdfd',
                  elevation: 5,
                },
              ]}
              activeOpacity={0.5}
              onPress={() => {
                this.props.navigation.navigate('login');
              }}>
              <Text style={[styles.whiteText]} allowFontScaling={false}>
                LOG IN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default Welcome;

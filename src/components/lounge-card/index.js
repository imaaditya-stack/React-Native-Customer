/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import { PRIMARY_COLOR } from '../../styles/colors';

class Lounge extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={[styles.greyText, { textAlign: 'left' }]}
              allowFontScaling={false}>
              {this.props.name}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons
                name="clock-time-three-outline"
                color={PRIMARY_COLOR}
                size={RFValue(20)}
              />
              <Text
                allowFontScaling={false}
                style={[styles.greyText, { fontSize: RFValue(15) }]}>
                {' '}
                {this.props.date}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Lounge;

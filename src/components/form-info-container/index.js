/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { styles } from '../../styles';
import { PRIMARY_COLOR } from '../../styles/colors';

class Container extends React.Component {
  render() {
    return (
      <>
        <View
          style={{
            backgroundColor: PRIMARY_COLOR,
            width: wp('100%'),
            justifyContent: 'center',
            alignItems: 'center',
            height: hp('50%'),
          }}>
          <Image
            source={this.props.img_name}
            style={{
              width: RFValue(100),
              height: RFValue(100),
              marginBottom: 10,
            }}
          />
          <Text
            style={[
              styles.boldText,
              { fontSize: RFValue(40), textAlign: 'center' },
            ]}
            allowFontScaling={false}>
            {this.props.title}
          </Text>
          <Text
            style={[
              styles.whiteText,
              { fontSize: RFValue(25), textAlign: 'center' },
            ]}
            allowFontScaling={false}>
            {this.props.text}
          </Text>
        </View>
      </>
    );
  }
}

export default Container;

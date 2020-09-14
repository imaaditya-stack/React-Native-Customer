/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, Image } from 'react-native';
import { styles } from '../../styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

class Content extends React.Component {
  render() {
    return (
      <>
        <Image
          source={this.props.img_name}
          style={{ width: wp('100%'), height: RFValue(300), marginTop: 60 }}
        />
        <Text
          allowFontScaling={false}
          style={[
            styles.greyText,
            {
              fontSize: RFValue(25),
              padding: 10,
              textAlign: 'center',
              marginTop: 20,
            },
          ]}>
          {this.props.title}
        </Text>
      </>
    );
  }
}

export default Content;

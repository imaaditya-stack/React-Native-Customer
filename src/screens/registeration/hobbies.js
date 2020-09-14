/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import { styles } from '../../styles';
import { RFValue } from 'react-native-responsive-fontsize';
import Content from '../../components/skip-screens-content';
import Images from '../../assets/images/config';

class Hobbies extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={[styles.justifiedContainer]}>
            <Content img_name={Images.hobbies} title="Tell us your Hobbies" />
            <TextInput
              allowFontScaling={false}
              style={[styles.input]}
              autoCapitalize="none"
              placeholder="Reading, Travelling, ..."
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                this.props.navigation.navigate('profession');
              }}>
              <Text
                style={[styles.greyText, { fontSize: RFValue(15) }]}
                allowFontScaling={false}>
                Skip for now
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </React.Fragment>
    );
  }
}

export default Hobbies;

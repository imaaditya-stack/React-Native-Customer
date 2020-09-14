/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RFValue } from 'react-native-responsive-fontsize';

import Container from '../../components/form-info-container';
import Images from '../../assets/images/config';
import { styles } from '../../styles';
import { PRIMARY_COLOR } from '../../styles/colors';

class phoneNumber extends React.Component {
  render() {
    return (
      <>
        <StatusBar
          translucent
          backgroundColor="#93bdfd"
          barStyle="light-content"
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Container
            img_name={Images.login}
            title="Welcome"
            text="Tell us your phone number"
          />
          <View style={styles.container}>
            <TextInput
              allowFontScaling={false}
              style={[styles.input]}
              autoCapitalize="none"
              placeholder="Phone number"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                this.props.navigation.navigate('birth');
              }}>
              <Icon
                name="arrow-circle-right"
                size={RFValue(60)}
                color={PRIMARY_COLOR}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default phoneNumber;

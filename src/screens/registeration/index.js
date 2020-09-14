/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
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

class Register extends React.Component {
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
            text="Login to your account"
          />
          <View style={styles.container}>
            <TextInput
              allowFontScaling={false}
              style={[styles.input]}
              autoCapitalize="none"
              placeholder="Name"
              placeholderTextColor="#999"
            />
            <TextInput
              allowFontScaling={false}
              style={[styles.input]}
              placeholder="Email"
              autoCapitalize="none"
              placeholderTextColor="#999"
              name="name"
            />
            <TextInput
              allowFontScaling={false}
              style={[styles.input]}
              autoCapitalize="none"
              placeholder="Password"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                this.props.navigation.navigate('phonenumber');
              }}>
              <Icon
                name="arrow-circle-right"
                size={RFValue(60)}
                color="#93bdfd"
              />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.greyText} allowFontScaling={false}>
                Already have an account?
              </Text>
              <TouchableOpacity>
                <Text
                  style={[styles.greyText, { color: PRIMARY_COLOR }]}
                  allowFontScaling={false}>
                  {' '}
                  Log in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Register;

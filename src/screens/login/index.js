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

import Container from '../../components/form-info-container';
import Images from '../../assets/images/config';
import { styles } from '../../styles';
import { PRIMARY_COLOR } from '../../styles/colors';

class Login extends React.Component {
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
              placeholder="Email"
              placeholderTextColor="#999"
            />
            <TextInput
              allowFontScaling={false}
              style={[styles.input]}
              autoCapitalize="none"
              placeholder="Password"
              placeholderTextColor="#999"
            />
            <TouchableOpacity>
              <Text style={[styles.greyText, { marginVertical: 10 }]}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { margin: 10, elevation: 5 }]}
              activeOpacity={0.5}
              onPress={() => {
                this.props.navigation.navigate('home');
              }}>
              <Text style={styles.whiteText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.greyText} allowFontScaling={false}>
                Don't have an account?
              </Text>
              <TouchableOpacity>
                <Text
                  style={[styles.greyText, { color: PRIMARY_COLOR }]}
                  allowFontScaling={false}>
                  {' '}
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Login;

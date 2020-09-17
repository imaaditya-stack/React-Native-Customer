/* eslint-disable no-alert */
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

import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  handleName = (value) => {
    this.setState({ name: value });
  };

  handleEmail = (value) => {
    this.setState({ email: value });
  };

  handlePassword = (value) => {
    this.setState({ password: value });
  };

  handleSubmit = () => {
    const { name, email, password } = this.state;
    this.props.registerUser(name, email, password);
    this.props.navigation.navigate('phonenumber');
  };

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
              onChangeText={this.handleName}
            />
            <TextInput
              allowFontScaling={false}
              style={[styles.input]}
              placeholder="Email"
              autoCapitalize="none"
              placeholderTextColor="#999"
              name="name"
              onChangeText={this.handleEmail}
            />
            <TextInput
              allowFontScaling={false}
              style={[styles.input]}
              autoCapitalize="none"
              placeholder="Password"
              placeholderTextColor="#999"
              onChangeText={this.handlePassword}
            />
            <TouchableOpacity activeOpacity={0.5} onPress={this.handleSubmit}>
              <Icon
                name="arrow-circle-right"
                size={RFValue(60)}
                color={PRIMARY_COLOR}
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

const mapDispatchToProps = (dispatch) => ({
  registerUser: (name, email, password) => {
    dispatch(registerUser(name, email, password));
  },
});

export default connect(null, mapDispatchToProps)(Register);

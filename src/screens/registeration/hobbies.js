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

import { connect } from 'react-redux';
import { addHobbies } from '../../redux/actions';

class Hobbies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies: '',
    };
  }

  handleHobbies = (value) => {
    this.setState({ hobbies: value });
  };

  handleSubmit = () => {
    this.props.addHobbies(this.state.hobbies);
    this.props.navigation.navigate('profession');
  };

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
              onChangeText={this.handleHobbies}
            />
            <TouchableOpacity activeOpacity={0.5} onPress={this.handleSubmit}>
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

const mapDispatchToProps = (dispatch) => ({
  addHobbies: (hobbies) => {
    dispatch(addHobbies(hobbies));
  },
});

export default connect(null, mapDispatchToProps)(Hobbies);

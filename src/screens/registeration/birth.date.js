/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { styles } from '../../styles';
import { RFValue } from 'react-native-responsive-fontsize';
import DateTimePicker from '@react-native-community/datetimepicker';
import Content from '../../components/skip-screens-content';
import Images from '../../assets/images/config';

import { connect } from 'react-redux';
import { addBirthDate } from '../../redux/actions';

class Birth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthDate: null,
      visible: false,
    };
  }

  onDateChange = (event, selectedDate) => {
    this.setState({ birthDate: selectedDate, visible: false });
    this.props.addBirthDate(this.state.birthDate);
    this.props.navigation.navigate('anniversary');
  };

  render() {
    return (
      <React.Fragment>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={[styles.justifiedContainer]}>
            <Content
              img_name={Images.birthday}
              title="Tell us your Birth Date"
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={() => {
                this.setState({ visible: true });
              }}>
              <Text style={[styles.whiteText]} allowFontScaling={false}>
                Select Birth Date
              </Text>
            </TouchableOpacity>
            {this.state.visible && (
              <DateTimePicker
                testID="dateTimePicker"
                is24Hour={true}
                display="default"
                value={new Date()}
                onChange={this.onDateChange}
                mode="date"
              />
            )}
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                this.props.navigation.navigate('anniversary');
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

const mapDispatchToProps = (dispatch) => ({
  addBirthDate: (birthDate) => {
    dispatch(addBirthDate(birthDate));
  },
});

export default connect(null, mapDispatchToProps)(Birth);

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { styles } from '../../styles';
import { RFValue } from 'react-native-responsive-fontsize';
import DateTimePicker from '@react-native-community/datetimepicker';
import Content from '../../components/skip-screens-content';
import Images from '../../assets/images/config';

import { connect } from 'react-redux';
import { addAnniversayDate } from '../../redux/actions';

class Anniversary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      anniversary_date: null,
    };
  }

  onDateChange = (event, selectedDate) => {
    this.setState({ anniversary_date: selectedDate, visible: false });
    this.props.addAnniversayDate(this.state.anniversary_date);
    this.props.navigation.navigate('hobby');
  };

  render() {
    return (
      <React.Fragment>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={[styles.justifiedContainer]}>
            <Content
              img_name={Images.anniversary}
              title="Tell us your Anniversary Date"
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={() => {
                this.setState({ visible: true });
              }}>
              <Text style={[styles.whiteText]} allowFontScaling={false}>
                Select Anniversary Date
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
                this.props.navigation.navigate('hobby');
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
  addAnniversayDate: (anniversaryDate) => {
    dispatch(addAnniversayDate(anniversaryDate));
  },
});

export default connect(null, mapDispatchToProps)(Anniversary);

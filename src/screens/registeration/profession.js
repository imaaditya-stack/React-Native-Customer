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
import Content from '../../components/skip-screens-content';
import Images from '../../assets/images/config';

import { connect } from 'react-redux';
import { addProfession } from '../../redux/actions';

class Profession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profession: '',
    };
  }

  handleProfession = (value) => {
    this.setState({ profession: value });
  };

  handleSubmit = () => {
    this.props.addProfession(this.state.profession);
  };

  render() {
    console.log(this.props.state);
    return (
      <React.Fragment>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={[styles.justifiedContainer]}>
            <Content
              img_name={Images.profession}
              title="Tell us your Profession"
            />
            <TextInput
              allowFontScaling={false}
              style={[styles.input]}
              autoCapitalize="none"
              placeholder="Eg: Manager, Clerk, ..."
              placeholderTextColor="#999"
              onChangeText={this.handleProfession}
            />
            <TouchableOpacity
              style={[styles.button, { margin: 10, elevation: 5 }]}
              activeOpacity={0.5}
              onPress={this.handleSubmit}>
              <Text style={styles.whiteText}>Create my account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  addProfession: (profession) => {
    dispatch(addProfession(profession));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profession);

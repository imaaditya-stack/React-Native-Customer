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

class Profession extends React.Component {
  render() {
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
            />
            <TouchableOpacity
              style={[styles.button, { margin: 10, elevation: 5 }]}
              activeOpacity={0.5}
              onPress={() => {
                this.props.navigation.navigate('login');
              }}>
              <Text style={styles.whiteText}>Create my account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </React.Fragment>
    );
  }
}

export default Profession;

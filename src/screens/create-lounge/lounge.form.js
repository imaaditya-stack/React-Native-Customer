/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../../styles';
import { RFValue } from 'react-native-responsive-fontsize';

export default class LoungeForm extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <TextInput
          allowFontScaling={false}
          style={styles.input}
          placeholder="Product Name"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
        <TextInput
          allowFontScaling={false}
          style={styles.input}
          placeholder="Minimum price"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
        <TextInput
          allowFontScaling={false}
          style={styles.input}
          placeholder="Maximum price"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
        <TextInput
          allowFontScaling={false}
          style={styles.input}
          placeholder="Preferred Brand"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
        <TextInput
          allowFontScaling={false}
          style={styles.input}
          placeholder="Specifications"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
        <TouchableOpacity
          style={[styles.button, { margin: 10, elevation: 5 }]}
          activeOpacity={0.5}
          onPress={() => {
            this.props.navigation.navigate('mylounge');
          }}>
          <Text style={styles.whiteText}>Create Lounge</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

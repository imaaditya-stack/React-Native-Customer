import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles';

class Label extends React.Component {
  render() {
    return (
      <>
        <View>
          <Text style={styles.greyText}>{this.props.children}</Text>
        </View>
      </>
    );
  }
}

export default Label;

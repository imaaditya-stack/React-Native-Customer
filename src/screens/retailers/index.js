/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../../styles';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Button, Divider, Dialog, Portal } from 'react-native-paper';
import axios from 'axios';
import RetailerCard from '../../components/retailer-card';

export default class Retailers extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dialogVisible: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get('http://192.168.0.106:8000/api/lounge/products')
      .then((response) => this.setState({ data: response.data }))
      .then((error) => console.error(error));
  };

  openDialog = () => {
    this.setState({ dialogVisible: true });
  };

  closeDialog = () => {
    this.setState({ dialogVisible: false });
  };

  render() {
    return (
      <>
        <TouchableOpacity
          style={[styles.button, { margin: 10, borderRadius: 0, padding: 20 }]}
          activeOpacity={0.5}
          onPress={this.openDialog}>
          <Text
            style={[styles.whiteText, { textAlign: 'center' }]}
            allowFontScaling={false}>
            SORT BY{'   '}
            <MaterialCommunityIcons
              name="filter-variant"
              color="#fafafa"
              size={RFValue(20)}
            />
          </Text>
          <Portal>
            <Dialog
              visible={this.state.dialogVisible}
              onDismiss={this.closeDialog}>
              <Dialog.Title>
                <Text style={styles.bluetext} allowFontScaling={false}>
                  SORT BY
                </Text>
              </Dialog.Title>
              <Dialog.Content>
                <TouchableOpacity style={{ margin: 10 }}>
                  <Text style={styles.bluetext} allowFontScaling={false}>
                    Ditsance
                  </Text>
                </TouchableOpacity>
                <Divider />
                <TouchableOpacity style={{ margin: 10 }}>
                  <Text style={styles.bluetext} allowFontScaling={false}>
                    Product Uploaded
                  </Text>
                </TouchableOpacity>
                <Divider />
                <TouchableOpacity style={{ margin: 10 }}>
                  <Text style={styles.bluetext} allowFontScaling={false}>
                    Message Received
                  </Text>
                </TouchableOpacity>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={this.closeDialog}>
                  <Text
                    style={[styles.bluetext, { fontSize: RFValue(15) }]}
                    allowFontScaling={false}>
                    CANCEL
                  </Text>
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </TouchableOpacity>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.data}
          renderItem={({ item }) => <RetailerCard />}
        />
      </>
    );
  }
}

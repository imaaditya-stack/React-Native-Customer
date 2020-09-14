/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { styles } from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button, Dialog, Portal } from 'react-native-paper';
import Container from '../../components/form-info-container';
import Images from '../../assets/images/config';
import { PRIMARY_COLOR } from '../../styles/colors';

export default class SelectCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
      menuVisible: false,
      dialogVisible: false,
      data: [
        {
          value: 'Laptops & accessories',
          label: 'Laptops & accessories',
        },
        {
          value: 'Mobiles & accessories',
          label: 'Mobiles & accessories',
        },
        {
          value: 'Washing Machine',
          label: 'Washing Machine',
        },
        {
          value: 'Air Conditioners',
          label: 'Air Conditioners',
        },
        {
          value: 'Refrigerator',
          label: 'Refrigerator',
        },
        {
          value: 'Air and water purifiers',
          label: 'Air and water purifiers',
        },
        {
          value: 'Television',
          label: 'Television',
        },
      ],
    };
  }

  updateSearch = (search) => {
    this.setState({ search });
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
        <StatusBar
          translucent
          backgroundColor="#93bdfd"
          barStyle="light-content"
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Container
            img_name={Images.lounge}
            title="Welcome"
            text="Create a new lounge"
          />
          <View style={styles.container}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  margin: 10,
                  padding: 20,
                  backgroundColor: '#eee',
                  elevation: 2,
                },
              ]}
              activeOpacity={0.5}
              onPress={this.openDialog}>
              <Text style={styles.greyText} allowFontScaling={false}>
                I AM LOOKING FOR
              </Text>
              <Portal>
                <Dialog
                  visible={this.state.dialogVisible}
                  onDismiss={this.closeDialog}>
                  <Dialog.Title>
                    <Text style={styles.greyText} allowFontScaling={false}>
                      Select one category
                    </Text>
                  </Dialog.Title>
                  <Dialog.Content>
                    {this.state.data &&
                      this.state.data.map((option) => {
                        return (
                          <TouchableOpacity
                            style={{ margin: 10, backgroundColor: '#ccc' }}>
                            <Text
                              style={[
                                styles.greyText,
                                { textAlign: 'left', padding: 10 },
                              ]}
                              allowFontScaling={false}>
                              {option.label}
                            </Text>
                          </TouchableOpacity>
                        );
                      })}
                  </Dialog.Content>
                  <Dialog.Actions>
                    <Button onPress={this.closeDialog}>
                      <Text style={styles.greyText} allowFontScaling={false}>
                        CANCEL
                      </Text>
                    </Button>
                  </Dialog.Actions>
                </Dialog>
              </Portal>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                this.props.navigation.navigate('loungeform');
              }}>
              <Icon
                name="arrow-circle-right"
                size={RFValue(60)}
                color={PRIMARY_COLOR}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }
}

/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Button, Menu, Divider, Dialog, Portal } from 'react-native-paper';
import { styles } from '../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { PRIMARY_COLOR } from '../../styles/colors';
import axios from 'axios';
import Lounge from '../../components/lounge-card';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      menuVisible: false,
      dialogVisible: false,
    };
  }

  openMenu = () => {
    this.setState({ menuVisible: true });
  };

  closeMenu = () => {
    this.setState({ menuVisible: false });
  };

  openDialog = () => {
    this.setState({ dialogVisible: true });
  };

  closeDialog = () => {
    this.setState({ dialogVisible: false });
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get('http://192.168.0.106:8000/api/customer/lounge')
      .then((response) => this.setState({ data: response.data }))
      .then((error) => console.error(error));
  };

  render() {
    return (
      <React.Fragment>
        <View style={[{ marginTop: 24 }]}>
          <View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <View
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: hp('10%'),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: RFValue(15),
                  paddingTop: 30,
                  elevation: 5,
                }}>
                <Text style={styles.whiteText} allowFontScaling={false}>
                  Welcome John Doe
                </Text>
                <Menu
                  visible={this.state.menuVisible}
                  onDismiss={this.closeMenu}
                  anchor={
                    <TouchableOpacity onPress={this.openMenu}>
                      <MaterialCommunityIcons
                        name="dots-vertical"
                        color="#fafafa"
                        size={RFValue(25)}
                      />
                    </TouchableOpacity>
                  }>
                  <Menu.Item
                    onPress={() => {}}
                    title={
                      <Text
                        style={[styles.greyText, { fontSize: RFValue(15) }]}
                        allowFontScaling={false}>
                        <Icon name="bell" color="#93bdfd" size={RFValue(18)} />
                        {'  '}Notifications
                      </Text>
                    }
                  />
                  <Menu.Item
                    onPress={() => {
                      this.setState({ menuVisible: false });
                      this.props.navigation.navigate('profile');
                    }}
                    title={
                      <Text
                        style={[styles.greyText, { fontSize: RFValue(15) }]}
                        allowFontScaling={false}>
                        <Icon
                          name="user-alt"
                          color="#93bdfd"
                          size={RFValue(18)}
                        />
                        {'  '}Profile
                      </Text>
                    }
                  />
                  <Menu.Item
                    onPress={() => {
                      this.props.navigation.navigate('login');
                    }}
                    title={
                      <Text
                        style={[styles.greyText, { fontSize: RFValue(15) }]}
                        allowFontScaling={false}>
                        <Icon
                          name="power-off"
                          color="#93bdfd"
                          size={RFValue(18)}
                        />
                        {'  '}Log out
                      </Text>
                    }
                  />
                </Menu>
              </View>
              <Text
                style={[
                  styles.greyText,
                  {
                    textAlign: 'left',
                    padding: 15,
                    fontSize: RFValue(20),
                    marginTop: 10,
                  },
                ]}>
                New Lounge
              </Text>
              <TouchableOpacity
                allowFontScaling={false}
                style={[
                  styles.button,
                  { margin: 10, borderRadius: 0, padding: 20 },
                ]}
                activeOpacity={0.5}
                onPress={() =>
                  this.props.navigation.navigate('selectcategory')
                }>
                <Text
                  style={[styles.whiteText, { textAlign: 'center' }]}
                  allowFontScaling={false}>
                  CREATE A NEW LOUNGE
                </Text>
              </TouchableOpacity>
              <Text
                allowFontScaling={false}
                style={[
                  styles.greyText,
                  { textAlign: 'left', padding: 15, fontSize: RFValue(20) },
                ]}>
                Your Lounge
              </Text>
              <TouchableOpacity
                style={[
                  styles.button,
                  { margin: 10, borderRadius: 0, padding: 20 },
                ]}
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
                      <Text style={styles.greyText} allowFontScaling={false}>
                        SORT BY
                      </Text>
                    </Dialog.Title>
                    <Dialog.Content>
                      <TouchableOpacity style={{ margin: 10 }}>
                        <Text style={styles.greyText} allowFontScaling={false}>
                          Recent
                        </Text>
                      </TouchableOpacity>
                      <Divider />
                      <TouchableOpacity style={{ margin: 10 }}>
                        <Text style={styles.greyText} allowFontScaling={false}>
                          Test 1
                        </Text>
                      </TouchableOpacity>
                      <Divider />
                      <TouchableOpacity style={{ margin: 10 }}>
                        <Text style={styles.greyText} allowFontScaling={false}>
                          Test 2
                        </Text>
                      </TouchableOpacity>
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
              <FlatList
                showsVerticalScrollIndicator={false}
                data={this.state.data}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      padding: 20,
                      margin: 10,
                      backgroundColor: '#fff',
                      elevation: 1,
                    }}
                    onPress={() => {
                      this.props.navigation.navigate('retailers', {
                        name: item.product_name,
                      });
                    }}>
                    <Lounge name={item.product_name} date={item.created_at} />
                  </TouchableOpacity>
                )}
              />
            </ScrollView>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default Home;

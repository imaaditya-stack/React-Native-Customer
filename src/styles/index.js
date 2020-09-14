import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  WHITE_COLOR,
  GREY_COLOR,
  SECONDARY_COLOR,
  PRIMARY_COLOR,
} from './colors';

const styles = StyleSheet.create({
  justifiedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: SECONDARY_COLOR,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: SECONDARY_COLOR,
  },
  whiteText: {
    fontFamily: 'Jost-Medium',
    fontSize: RFValue(18),
    color: WHITE_COLOR,
  },
  greyText: {
    fontFamily: 'Jost-Medium',
    fontSize: RFValue(18),
    color: GREY_COLOR,
  },
  boldText: {
    fontFamily: 'Jost-Bold',
    fontSize: RFValue(18),
    color: WHITE_COLOR,
  },
  whitebutton: {
    backgroundColor: '#fafafa',
    padding: 20,
    borderRadius: 40,
    elevation: 5,
  },
  input: {
    width: wp('95%'),
    padding: 15,
    color: GREY_COLOR,
    fontSize: RFValue(18),
    fontFamily: 'Jost-Medium',
    backgroundColor: '#f7f9fb',
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    padding: 18,
    marginVertical: 10,
    elevation: 1,
  },
});

export { styles };

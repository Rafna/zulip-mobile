import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, Touchable } from '../common';

export default class ModalNavBar extends React.Component {

  props: {
    nav: any,
    title: string,
    popRoute: () => void,
  }

  render() {
    const { nav, title, popRoute } = this.props;

    return (
      <View style={styles.navBar}>
        {nav.index > 0 &&
          <Touchable onPress={popRoute}>
            <Icon style={styles.navButton} name="ios-arrow-back" />
          </Touchable>
        }
        <Text style={styles.navTitle}>
          {title}
        </Text>
      </View>
    );
  }
}

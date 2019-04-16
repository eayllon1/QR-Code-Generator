import React, { Component } from 'react'
import {
  View
} from 'react-native'
import QRCode from 'react-native-qrcode-svg';

export default class Code extends Component {
  render() {
    return (
      <View>
        <QRCode size={this.props.size} value={this.props.publickey}/>
      </View>
    )
  }
}

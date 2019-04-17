import React, { Component } from 'react'
import {
  View
} from 'react-native'
import QRCode from 'qrcode.react';

export default class Code extends Component {
  render() {
    return (
      <View>
        <QRCode style = {{width: this.props.size, height: this.props.size}} value={this.props.value}/>
      </View>
    )
  }
}

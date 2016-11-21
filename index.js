/**
 * React-Native Quantity TextInput
 * https://github.com/mdnahian/react-quantity-textinput
 * md.islam007@rutgers.edu
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';


module.exports = React.createClass({
  getInitialState: function () {

    var styleTextInput = styles.textinput;
    var styleButton = styles.button;
    var editable = true;
    var stepsize = 1;
    var value = "0";
    var min = 0;
    var max = null;

    if(this.props.styleTextInput != null) {
      styleTextInput = this.props.styleTextInput;
    }

    if(this.props.styleButton != null) {
      styleButton = this.props.styleButton;
    }

    if(this.props.editable != null) {
      editable = this.props.editable;
    }

    if(this.props.stepsize != null) {
      stepsize = this.props.stepsize;
    }

    if(this.props.initialValue != null) {
      value = this.props.initialValue.toString();
    }

    if(this.props.min != null) {
      min = this.props.min;
    }

    if(this.props.max != null) {
      max = this.props.max;
    }

    return {
      styleTextInput: styleTextInput,
      styleButton: styleButton,
      editable: editable,
      stepsize: stepsize,
      value: value,
      min: min,
      max: max
    }
  },
  render: function () {
    return <View style={styles.horizontal}>
      <TextInput
        style={this.state.styleTextInput}
        editable={this.state.editable}
        keyboardType={'numeric'}
        value={this.state.value}
        onChangeText={(text) => this.setState({value: text})}/>
      <View style={styles.verticle}>
        <TouchableHighlight underlayColor={'#999999'} onPress={this.upBtnPressed} style={this.state.styleButton}>
          <Image source={require('./up.png')} style={styles.image} />
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'#999999'} onPress={this.downBtnPressed} style={this.state.styleButton}>
          <Image source={require('./down.png')} style={styles.image} />
        </TouchableHighlight>
      </View>
    </View>
  },
  upBtnPressed: function () {
    if(this.state.value != this.state.max){
      this.setState({
        value: (parseInt(this.state.value) + parseInt(this.state.stepsize)).toString()
      });
    }
  },
  downBtnPressed: function () {
    if(this.state.value != this.state.min){
      this.setState({
        value: (parseInt(this.state.value) - parseInt(this.state.stepsize)).toString()
      });
    }
  }
});


var styles = StyleSheet.create({
  verticle: {
    flexDirection: 'column'
  },
  horizontal: {
    flexDirection: 'row'
  },
  textinput: {
    flex:10,
    backgroundColor: '#eeeeee',
    padding: 5
  },
  button: {
    backgroundColor: '#dedede',
    padding: 5
  },
  image: {
    width: 18,
    height: 18
  }
});
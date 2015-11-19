'use strict';

var React = require('react-native');
var {
    Platform
} = React;

var DateTimePickerAndroid = require('./android/DateTimePicker.js');
var DateTimePickerIOS= require('./ios/DateTimePicker.js');
var DateTimePicker = (Platform.OS === 'android') ? DateTimePickerAndroid : DateTimePickerIOS;


module.exports = DateTimePicker;

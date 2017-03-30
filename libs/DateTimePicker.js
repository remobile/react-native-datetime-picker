'use strict';

const React = require('react-native');
const {
    Platform,
} = React;

const DateTimePickerAndroid = require('./android/DateTimePicker.js');
const DateTimePickerIOS = require('./ios/DateTimePicker.js');
const DateTimePicker = (Platform.OS === 'android') ? DateTimePickerAndroid : DateTimePickerIOS;

module.exports = DateTimePicker;

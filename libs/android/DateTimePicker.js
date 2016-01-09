'use strict';

var React = require('react-native');
var {
    View,
    NativeModules,
} = React;

var RCTDateTimePicker= NativeModules.DateTimePicker;



module.exports =  React.createClass({
    showDatePicker(date, callback) {
        date = date || new Date();
        var options = {year:date.getFullYear(), month:date.getMonth(), day:date.getDate()};
        RCTDateTimePicker.showDatePicker(options, function (year, month, day) {
            date.setFullYear(year);
            date.setMonth(month);
            date.setDate(day);
            callback(date);
        });
    },
    showTimePicker(date, callback) {
        date = date || new Date();
        var options = {hour:date.getHours(), minute:date.getMinutes()};
        RCTDateTimePicker.showTimePicker(options, function (hour, minute) {
            date.setHours(hour);
            date.setMinutes(minute);
            callback(date);
        });
    },
    showDateTimePicker(date, callback) {
        date = date || new Date();
        var options = {year:date.getFullYear(), month:date.getMonth(), day:date.getDate(), hour:date.getHours(), minute:date.getMinutes()};
        RCTDateTimePicker.showDateTimePicker(options, function (year, month, day, hour, minute) {
            date.setFullYear(year);
            date.setMonth(month);
            date.setDate(day);
            date.setHours(hour);
            date.setMinutes(minute);
            callback(date);
        });
    },
    render() {
        return (
            null
        )
    }
});

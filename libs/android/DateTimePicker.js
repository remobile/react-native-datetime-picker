'use strict';

var React = require('react-native');
var {
    View,
    NativeModules,
} = React;

var CRTDateTimePicker= NativeModules.DateTimePicker;



module.exports =  React.createClass({
    showDatePicker(date, callback) {
        date = date || new Date();
        var options = {year:date.getFullYear(), month:date.getMonth(), day:date.getDate()};
        CRTDateTimePicker.showDatePicker(options, function (year, month, day) {
            date.setFullYear(year);
            date.setMonth(month);
            date.setDate(day);
            callback(date);
        });
    },
    showTimePicker(date, callback) {
        date = date || new Date();
        var options = {hour:date.getHours(), minute:date.getMinutes()};
        CRTDateTimePicker.showTimePicker(options, function (hour, minute) {
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

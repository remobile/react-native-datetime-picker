'use strict';

const React = require('react-native');
const {
    View,
    NativeModules,
} = React;

const RCTDateTimePicker= NativeModules.DateTimePicker;



module.exports =  React.createClass({
    showDatePicker(date, callback) {
        date = date || new Date();
        const options = {year:date.getFullYear(), month:date.getMonth(), day:date.getDate()};
        RCTDateTimePicker.showDatePicker(options, function (year, month, day) {
            date.setFullYear(year);
            date.setMonth(month);
            date.setDate(day);
            callback(date);
        });
    },
    showTimePicker(date, callback) {
        date = date || new Date();
        const options = {hour:date.getHours(), minute:date.getMinutes()};
        RCTDateTimePicker.showTimePicker(options, function (hour, minute) {
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

/*
* (The MIT License)
* Copyright (c) 2015-2016 YunJiang.Fang <42550564@qq.com>
*/
'use strict';

var React = require('react-native');
var { Animated, StyleSheet, View, Dimensions} = React;

const DEFAULT_ANIMATE_TIME = 200;

module.exports = React.createClass({
    getInitialState() {
        return {
            fadeAnim: new Animated.Value(0),
        };
    },
    componentWillReceiveProps(newProps) {
        return Animated.timing(this.state.fadeAnim, {
            toValue: newProps.visible ? 1 : 0,
            duration: DEFAULT_ANIMATE_TIME
        }).start();
    },

    render() {
        return (
            <Animated.View style={[styles.overlay, {opacity: this.state.fadeAnim}]}>
                {this.props.children}
            </Animated.View>
        );
    }
});

var styles = StyleSheet.create({
    overlay: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        position: 'absolute'
    }
});

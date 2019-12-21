import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Tags extends Component {
    render() {
        return (
            <View style={{ minHeight: 20, minWidth: 40, padding: 5, backgroundColor: 'white', borderColor: '#dddddd', borderWidth: 1, borderRadius: 2 }}>
                <Text style={{ fontWeight: '700', fontSize: 10 }}>{ this.props.name }</Text>
            </View>
        )
    }
}

export default Tags; 
import React,  { Component } from "react";
import {View, Text, StyleSheet, Image} from 'react-native'; 


class Category extends Component{
    render(){
        return (
            <View style={{height: 130, width: 130,  marginLeft: 20, borderColor: '#dddddd', borderWidth:0.5 }} >
            <View style={{flex: 2}}>
                <Image source={this.props.imageUri} style={{flex: 1, width: null, height: null, resizeMode:'cover'}} />
            </View>
            <View style={{flex: 1}}>
                <Text style={{flex: 1, paddingLeft: 10, paddingTop: 10}}> {this.props.name} </Text>

            </View>
        </View>
        )
    }
}

export default Category; 


const Styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent:'center'
    }
}); 
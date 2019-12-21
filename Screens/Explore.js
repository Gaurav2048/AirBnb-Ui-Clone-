import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, Image, Platform, StatusBar, ScrollView, Dimensions, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../Components/Explore/Category';
import Home from "../Components/Explore/Home";
import Tags from "../Components/Explore/Tags";

const { width, height } = Dimensions.get('window');

class Explore extends Component {

    componentWillMount() {
        this.startHeaderHeight = 80
        this.scrollY = new Animated.Value(0); 
        this.endHeaderHeight = 50 
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
            this.endHeaderHeight = 70 + StatusBar.currentHeight
        }
        
        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange : [0, 50], 
            outputRange: [this.startHeaderHeight, this.endHeaderHeight], 
            extrapolate: 'clamp'
        })

        this.animateOpacity = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight], 
            outputRange: [0,1 ], 
            extrapolate: 'clamp'
        })

        this.animateTagTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight], 
            outputRange: [-30,10 ], 
            extrapolate: 'clamp'
        })

    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{ flex: 1 }}>

                  
                        <Animated.View style={{ height: this.animatedHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }} >
                            <View style={{ flexDirection: 'row', padding: 10, backgroundColor: 'white', marginHorizontal: 20, shadowOffset: { width: 0, height: 0 }, shadowColor: 'black', shadowOpacity: 0.2, elevation: 1, marginTop: Platform.OS == 'android' ? 30 : null }}>
                                <Icon name="ios-search" size={20} />
                                <TextInput placeholder="Try Guwahati" placeholderTextColor="grey" style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }} />
                            </View>
                            <Animated.View  style={{flexDirection:'row', marginHorizontal: 20, position: 'relative', top: this.animateTagTop, marginRight: 5 , opacity : this.animateOpacity}}>
                               <Tags name="Guests"  />
                               <Tags name = "Dates" />
                            </Animated.View>
                        </Animated.View>
                        <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16}
                            onScroll = {Animated.event(
                                [
                                    {nativeEvent:{contentOffset: {y: this.scrollY}}}
                                ]
                            )}>
                        <ScrollView 
                        >
                            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }} >
                                <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                    What can we help you find, Gunjan? </Text>
                                <View style={{ height: 130, marginTop: 20 }}>
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
                                        <Category imageUri={require('../assets/home.jpg')} name="Home" />
                                        <Category imageUri={require('../assets/experiences.jpg')} name="Experiences" />
                                        <Category imageUri={require('../assets/restaurant.jpg')} name="Restaurant" />
                                    </ScrollView>
                                </View>
                            </View>
                        </ScrollView>


                        <View style={{ marginTop: 40, paddingHorizontal: 20 }} >
                            <Text style={{ fontSize: 24, fontWeight: '700' }}>Introducing AirBnb Plus </Text>
                            <Text style={{ fontWeight: '100', marginTop: 10 }}>A new section of homes veried for quality and comfort </Text>
                            <View style={{ width: width - 40, height: 200, marginTop: 20, }}>
                                <Image source={require('../assets/home.jpg')} style={{ flex: 1, height: null, width: width - 40, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }} />
                            </View>
                        </View>

                        <View style={{ marginTop: 40}} >
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }} >Homes Around the world</Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-between' }} >
                                <Home width={width}  name = "The Cozy Place" type = "PRIVATE ROOM - 2 BEDS" price={94} rating ={4} />
                                <Home width={width} name = "The Cozy Place" type = "PRIVATE ROOM - 2 BEDS" price={94} rating ={4}  />
                                <Home width={width}  name = "The Cozy Place" type = "PRIVATE ROOM - 2 BEDS" price={94} rating ={4}  />
                            </View>
                        </View>

                    </ScrollView>

                </View>




            </SafeAreaView>
        );
    }
}

export default Explore; 
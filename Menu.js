import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import Tentang from './Tentang';
import Data from './Data';
import Penjualan from './Penjualan';

export default class Home extends Component {
    render() {
      return (
          <MyApp />
      )
    }
  }

class ThisHome extends Component {
  render() {
    return (
        <View style={styles.containerMain}>
            <View style={{height:24}}>

            </View>
            <View style={{flex:1, alignItems:'center',
                        justifyContent:'space-around',
                        backgroundColor:'#ff0000'}}>
                <Text style={{fontSize:30,
                            color:'white'}}>APLIKASI KASIR</Text>
            </View>
            <View style={{flex:3, alignItems:'center',
                        justifyContent:'space-around',
                        margin:10}}>
                <Image  style={{width: 400, height: 240}}
                        source={require("./tokot.png")}/>
            </View>
            <View style={{flex:3}}>
                <View style={{flex:1,
                            flexDirection:'row'}}>
                    <View style={{flex:1,
                                alignItems:'center',
                                justifyContent:'space-around',
                                backgroundColor:'#0000cc',
                                borderRadius:20,
                                margin:5}}>
                        <TouchableHighlight style={{ flex: 1,
                                                  alignItems: 'center',
                                                  justifyContent: 'center',
                                                  borderRadius: 20,
                                                  backgroundColor: '#0000cc',
                                                  margin: 10, }}
                                            onPress={ () => this.props.navigation.navigate('ScreenBuy')}
                                            underlayColor='#F4B400'
                                            ><Text style={{color:'white', fontSize:25}}>Penjualan</Text></TouchableHighlight>
                    </View>
                    <View style={{flex:1,
                                alignItems:'center',
                                justifyContent:'space-around',
                                backgroundColor:'#0000cc',
                                borderRadius:20,
                                margin:5}}>
                        <TouchableHighlight style={{ flex: 1,
                                                  alignItems: 'center',
                                                  justifyContent: 'center',
                                                  borderRadius: 20,
                                                  backgroundColor: '#0000cc',
                                                  margin: 10, }}
                                            onPress={ () => this.props.navigation.navigate('ScreenData')}
                                            underlayColor='#F4B400'
                                            ><Text style={{color:'white', fontSize:25}}>Data Barang</Text></TouchableHighlight>
                    </View>
                </View>
                <View style={{flex:1,
                            justifyContent:'space-around'}}>
                    <View style={{flex:1,
                    alignItems:'center',
                    justifyContent:'space-around',
                    backgroundColor:'#0000cc',
                    borderRadius:20,
                    margin:5}}>
                    <TouchableHighlight style={{ flex: 1,
                                                  alignItems: 'center',
                                                  justifyContent: 'center',
                                                  borderRadius: 20,
                                                  backgroundColor: '#0000cc',
                                                  margin: 10, }}
                                            onPress={ () => this.props.navigation.navigate('ScreenAbout')}
                                            underlayColor='#F4B400'
                                            ><Text style={{color:'white', fontSize:25}}>Tentang Kami</Text></TouchableHighlight>
                    </View>
                </View>
            </View>
            <View style={{flex:1, alignItems:'center',
                        justifyContent:'space-around',
                        backgroundColor:'#ff9900'}}>
                <Text style={{color:'white', fontSize:14}}>Copyright (C)  Made Jaya</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
    }
})

const MyDrawerNavigator = createDrawerNavigator(
    {
      ScreenHome: {
        screen: ThisHome,
      },
      ScreenBuy: {
        screen: Penjualan,
      },
      ScreenData: {
        screen: Data,
      },
      ScreenAbout: {
        screen: Tentang,
      },
    },
    {
      initialRouteName: "ScreenHome",
    }
  );

const MyApp = createAppContainer(MyDrawerNavigator);;

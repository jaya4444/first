import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.containerMain}>
        <View style={{height:24}}></View>
        <View style={{flex:1, alignItems:'center',
                    justifyContent:'space-around',
                    backgroundColor:'#ff0000'}}>
            <Text style={{fontSize:30,
                        color:'white'}}>DATA BARANG</Text>
        </View>
        <View style={{flex:3,
                    alignItems:'stretch'}}>
            <View>
                <Text style={styles.boxData}>001 - Parfum</Text>
                  <Text style={styles.boxData}>002 - Silver Queen </Text>
                    <Text style={styles.boxData}>003 - Sikat Gigi</Text>
                      <Text style={styles.boxData}>004 - Pulpy Orange</Text>

            </View>
        </View>
        <View style={{flex:3}}></View>
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
    },

    boxData:{
        backgroundColor:'#2eb82e',
        fontSize:20,
        margin:5,
        alignItems:'stretch',
        color:'white',
        borderRadius:10,
        paddingLeft:5
    }
})

export default Data;

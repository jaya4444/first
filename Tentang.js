import React, { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

class Tentang extends Component {

  render() {
    return (
        <View style={styles.containerMain}>
            <View style={{height:24}}>

            </View>
            <View style={{flex:1.5, alignItems:'center',
                        justifyContent:'space-around',
                        backgroundColor:'#ff0000'}}>
                <Text style={{fontSize:30,
                            color:'white'}}>TENTANG KAMI</Text>
            </View>
            <View style={{flex:3}}>
                <View style={{flex:1,
                            flexDirection:'row'}}>
                    <View style={{flex:1,
                                alignItems:'flex-end',
                                justifyContent:'space-around',
                                borderRadius:20}}>
                        
                    </View>
                    <View style={{flex:2,
                                alignItems:'stretch',
                                justifyContent:'space-evenly',
                                margin:5}}>
                        <Text style={{borderWidth:1, fontSize:15, paddingLeft:10}}>Nama  : Made Jaya</Text>
                        <Text style={{borderWidth:1, fontSize:15, paddingLeft:10}}>NIM   : 1715051046</Text>
                        <Text style={{borderWidth:1, fontSize:15, paddingLeft:10}}>Kelas : 4C</Text>
                        <Text style={{borderWidth:1, fontSize:15, paddingLeft:10}}>Jurusan : Pendidikan Teknik Informatika</Text>
                        <Text style={{borderWidth:1, fontSize:15, paddingLeft:10}}>Skill : Programer</Text>
                    </View>
                </View>
            </View>
            <View style={{flex:6}}>

            </View>
            <View style={{flex:1, alignItems:'center',
                        justifyContent:'space-around',
                        backgroundColor:'#ff9900'}}>
                <Text style={{color:'white', fontSize:14}}>Copyright (C) Made Jaya</Text>
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

export default Tentang;

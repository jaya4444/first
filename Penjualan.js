import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

class Penjualan extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.containerMain}>
            <View style={{height:24}}></View>

            <View style={{flex:1.5, alignItems:'center',
                        justifyContent:'space-around',
                        backgroundColor:'#ff0000'}}>
                <Text style={{fontSize:30,
                            color:'white'}}>PENJUALAN</Text>
            </View>

            <View style={{flex:4}}>
                <View style={{flex:2, flexDirection:'row',
                            justifyContent:'space-around'}}>
                    <View style={{flex:1,
                                justifyContent:'space-around',
                                alignItems:'flex-end',
                                marginRight:10}}>
                        <View style={{alignItems:'flex-end'}}>
                            <Text>Kode Barang</Text>
                        </View>
                        <View style={{alignItems:'flex-end'}}>
                            <Text>Jumlah Beli</Text>
                        </View>
                        <View style={{alignItems:'flex-end'}}>
                            <Text>Jumlah Harga</Text>
                        </View>
                    </View>
                    <View style={{flex:2,
                                alignItems:'stretch',
                                justifyContent:'space-around',
                                paddingRight:10}}>
                        <TextInput style={{borderWidth:1,
                                        alignItems:'flex-start'}}/>
                        <TextInput style={{borderWidth:1,
                                        alignItems:'flex-start'}}/>
                        <TextInput style={{borderWidth:1,
                                        alignItems:'flex-start'}}/>
                    </View>
                </View>
                <View style={{flex:1,
                            alignItems:'center',
                            justifyContent:'space-around',
                            backgroundColor:'blue',
                            borderRadius:10,
                            margin:10}}>
                    <Text style={{color:'white',
                                fontSize:40}}>Hitung</Text>
                </View>
            </View>

            <View style={{flex:5}}>
                <View style={{
                            alignItems:'flex-start',
                            justifyContent:'space-around'}}>
                    <Text style={{fontSize:30,
                                margin:10}}>Total Belanja Anda: </Text>
                    <Text style={{fontSize:30,
                                margin:10,
                                alignContent:'flex-end'
                                }}>Rp. </Text>
                </View>
                <View style={{
                            flexDirection:'row',}}>
                    <View style={{flex:1,
                                alignItems:'flex-end',
                                justifyContent:'space-around'}}>
                        <Text style={{alignItems:'flex-end'}}>Uang Bayar</Text>
                    </View>
                    <View style={{flex:2,
                                alignItems:'stretch',
                                justifyContent:'space-around'}}>
                        <TextInput style={{borderWidth:1,
                                         alignItems:'flex-start',
                                         margin:10}}/>
                    </View>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <Text style={{fontSize:20,
                                margin:10}}>Kembalian Anda:</Text>
                    <Text style={{fontSize:20,
                                margin:10}}>Rp.</Text>
                </View>
            </View>
            <View>

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

export default Penjualan;

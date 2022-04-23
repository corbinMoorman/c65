import { StatusBar } from 'expo-status-bar';
import *as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';
import { Header } from 'react-native-elements';
import database from "./localDatabse"


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: "", displayText: "", chunks: []
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header backgroundColor={"black"} centerComponent={{ text: "Monkey Chunky", style: { color: "yellow", fontSize: 20 } }} />
        <Image style ={styles.imageIcon} source ={{ uri:"https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png"}}/>
        <TextInput
          style={styles.inputBox}
          onChangeText={(input) => {
            this.setState({ text: input })
          }}
          value={this.state.text}
        />
        <TouchableOpacity style={styles.goButton} onPress={() => {
          this.setState({ chunks: database[this.state.text].chunks })
        }}><Text style={styles.buttonText}>click here</Text></TouchableOpacity>
        <View>
          {this.state.chunks.map(
            (index) => {
              return (
                <TouchableOpacity style = {styles.chunkButton}><Text style={styles.displayText}> {index} </Text></TouchableOpacity>

              )
            }
          )}

        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',

  },
  inputBox: { marginTop: 20, width: '80%', alignSelf: 'center', height: 40, textAlign: 'center', borderWidth: 4, outline: 'none', }, goButton: { width: '50%', height: 55, alignSelf: 'center', padding: 10, margin: 10, }, buttonText: { textAlign: 'center', fontSize: 30, fontWeight: 'bold', }, displayText: { textAlign: 'center', fontSize: 30, },
  chunkButton:{ width: '60%', height: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 10, margin: 5, backgroundColor: 'red' },
  imageIcon: { width: 150, height: 150, marginLeft: 95, }

});
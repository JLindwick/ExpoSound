import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';
var icon = require('./image/Icon.png')

export default class App extends React.Component {
  constructor (props) {
   super(props)
   this.state = {
     isLooping: true,
     loopNumber: 5
   }
}

  playSound = async() => {
    const soundObject = new Audio.Sound();

    try {
      await soundObject.loadAsync(require('./assets/Sounds/hs.mp3'));
      if(this.state.isLooping===true)
      {
        soundObject.setIsLoopingAsync(true);
        await soundObject.playAsync();
      } else {
      await soundObject.playAsync();
    }
    } catch (error) {
    }
}

stop = async() => {
  soundObject.stopAsync();
}


  render() {
  return (
    <View style={styles.container}>
    {this.state.isLooping ? (
      <Button title="Loop" source={icon} onPress={this.playSound}/>
    ) : (
      <Button title="Not Loop" source={icon} onPress={this.playSound}/>
    )
  }
  {this.state.isLooping ? (
    <Button title="stop" source={icon} onPress={this.stop}/>
  ): null}
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

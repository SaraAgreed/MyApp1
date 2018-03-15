
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, Text, View, ImageBackground, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

export default class Bananas extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', text1: '' };
  } 
   _onPressButton() {
    Alert.alert('Welcome ')}
  
  render() {
   
        return (
          <View style={styles.container}>

                      <ImageBackground source={require('./src/BackgroundImage/loginpage.jpg')}
                  style={styles.backgroundImage}>

 <View style={styles.logoContainer}>
				  			<Image source={require('./src/BackgroundImage/logo.png')} 
					  style={styles.logo}>
					  </Image>
                  </View>

                  <View style={styles.top}>

            

              <Text style={styles.username}>User Name: </Text>

               <TextInput  placeholder="Enter UserName"
        style={{height:30, width: 200, color: 'white', justifyContent: 'space-between', borderColor: 'white', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
       
      />

              <Text style={styles.password}>Password: </Text>
               <TextInput  placeholder="Enter Password"
        style={{height:30, width: 200, color:'white',
         justifyContent: 'space-between', borderColor: 'white', borderWidth: 1}}
         text1={true}
         secureTextEntry={true}
        onChangeText={(text1) => this.setState({text1})}
       value={this.state.text1} 
      />
      
            </View>
    
    <View style={styles.check}>
           <Button title = "             SIGN    IN             " onPress={this._onPressButton}/>
     </View>   
  
       </ImageBackground>
            
            </View>
        )
    }

}
const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    backgroundImage: {
        flex:1,
        width: 500,
        height: 700,
       
    },

      top: {
      alignItems:'center',
      justifyContent:'space-between'
    },

header: {

  justifyContent: 'space-between',
  color: 'white',
  fontSize: 28,
  backgroundColor: 'rgba(255,255,255,.1)',
  padding: 20,
  paddingLeft: 40,
  paddingRight: 40
},

username: {

  justifyContent: 'space-between',
  color: 'white',
  height: 60,
  fontSize: 20,
 backgroundColor: 'rgba(255,255,255,.1)',
 padding: 10,
  paddingLeft: 20,
  paddingRight: 20


},

password: {
  height: 50,
justifyContent: 'space-between',
  color: 'white',
  fontSize: 20,
    backgroundColor: 'rgba(255,255,255,.1)',
padding: 10,
  paddingLeft: 20,
  paddingRight: 20

},
check:
{
flex: 1,
alignItems: 'center',
justifyContent: 'center'

},
 
	logoContainer: {
		flex: 1, 
		alignItems: 'center',
		padding: 60
		
		
	},
	logo: {
		width:140,
		height:140
	}
});

AppRegistry.registerComponent('AwesomeProject', () => Bananas);


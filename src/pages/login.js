import React, { useState } from 'react';
import {View,Text,TextInput,Button,StyleSheet,SafeAreaView,Alert,TouchableOpacity,} from 'react-native';

import { Logo } from "../components/logo";
//import { Colors } from 'react-native/Libraries/NewAppScreen';

export function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={styles.mainContainer}>
            <View style={styles.logoArea}><Logo /></View>
            <View style={styles.inputArea}>
                <TextInput autoCapitalize="none"
                    value={username} onChangeText={(text) => {
                        setUsername(text);
                    }} placeholder="Email" style={styles.usernameField} />
                <TextInput autoCapitalize="none"
                    value={password} onChangeText={(text) => {
                        setPassword(text);
                    }} placeholder="Password" style={styles.passwordField} secureTextEntry={true} />
                <TouchableOpacity style={styles.loginButton}>
                    <Text >Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.forgotButton}>
                    <Text >Forgot</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.footerArea}>
                <TouchableOpacity style={styles.legalButton}>
                    <Text >Legal</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footerButtonArea}>
                <TouchableOpacity style={styles.footerButton}>
                    <Text >Get Started</Text>
                </TouchableOpacity>
                    <View style={{width:1}}></View>
                <TouchableOpacity style={styles.footerButton}>
                    <Text >Learn More</Text>
                </TouchableOpacity>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerButtonArea:{
        marginTop:5,
        flexDirection:"row",
        alignContent:"stretch",
        justifyContent:"flex-end",
        
    },
    footerButton:{
        flex:1,
        height:70,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#9e9e9e",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    legalButton: {
        height: 40,
        backgroundColor: "white",
        marginTop:100,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    forgotButton: {
        height: 40,
        backgroundColor: "white",
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    loginButton: {
        height: 50,
        backgroundColor: "#9e9e9e",
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    passwordField: {
        height: 50,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderTopWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: "white",
        borderColor: "#9e9e9e"
    },
    usernameField: {
        height: 50,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "white",
        borderColor: "#9e9e9e"
    },
    footerArea: {
        flex: 1,
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    inputArea: {
        flex: 2,
        alignContent: "center",
        justifyContent: "center"
    },

    mainContainer: {
        flex: 1,
        backgroundColor: "white",
        alignContent: "center",
        margin: 0,
        padding: 0
    },
    logoArea: {
        flex: 2,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        padding: 0,
        margin: 0
    }

})
import React from 'react';
import { View ,Button} from 'react-native';
import * as Google from 'expo-google-app-auth';

const ANDROID_CLIENT_ID = "1036607690210-5oe48f62jfqqdtm6pmcuk72s5e0hnf4v.apps.googleusercontent.com";


const SignInButton = (props) =>{
 
    const SignInWithGoogle = async() =>{
        try{
            const result = await Google.logInAsync({
                androidClientId: ANDROID_CLIENT_ID,
                success:["profile","email"]
            });
            if(result.type === "success"){
                console.log("SignInButton.js",result.user.givenName);
                    props.navigation.navigate("profile")
                    return result.accessToken
            }else{
                return{cancelled:true};
            }
        }catch(error){
            console.log("SignInButton.js",error)
            return {error:true}
        }
    }






return(
    <View style={{flex:1,justifyContent:"center"}}>
        <Button title="Sign In with Google" onPress={SignInWithGoogle} />
    </View>
)
}

export default SignInButton;
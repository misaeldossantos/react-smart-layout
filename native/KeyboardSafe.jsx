import React from 'react'
import {KeyboardAvoidingView} from "react-native";

export default function({children}) {
    return <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        {children}
    </KeyboardAvoidingView>
}
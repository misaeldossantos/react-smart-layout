import React from 'react'
import constants from '../utils/constants'

const KeyboardAvoidingView = constants.RNModule.KeyboardAvoidingView

export default function({children}) {
    return <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        {children}
    </KeyboardAvoidingView>
}
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Button } from "../componentes/Button";

import colors from "../styles/colors";
import fonts from "../styles/fonts";



export default function Confirmation() {
  const navigation = useNavigation()
  function handleMoveOn(){
    navigation.navigate('Coins')
  }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    { '😀' }
                </Text>
asas
                <Text style={styles.title}>
                  Prontinho
                </Text>

                <Text style={styles.subtitle}>
                Agora vamos começar descobrir{'\n'}
                    mais sobre esse mundo.
                </Text>

                <View style={styles.footer}>
                    <Button title={"Começar"} onPress={handleMoveOn} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },

    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15
    },

    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 20,
        color: colors.heading
    },

    emoji: {
        fontSize: 78
    },

    footer: {
        width: '100%',
        paddingHorizontal: 75,
        marginTop: 20
    }

});
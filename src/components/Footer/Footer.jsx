import { View, Text, StyleSheet } from 'react-native'

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "black",
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: "white"
  }
})

export default Footer
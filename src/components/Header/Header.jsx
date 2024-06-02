import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    width: "100%",
    alignItems: "center",
    padding:10,
  },
  text: {
    color: "white"
  }
})

export default Header
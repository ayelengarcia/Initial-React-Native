// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Header from "./src/components/Header.jsx"
import Footer from "./src/components/Footer.jsx"

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <Text>Hola React Native...</Text>
        <Footer/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f1f1f1",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%"
  }
})


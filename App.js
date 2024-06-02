// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Header from "./src/components/Header/Header.jsx"
import Footer from "./src/components/Footer/Footer.jsx"
import Main from "./src/components/Main/Main.jsx";

export default function App() {
  return (
    <View style={styles.container}>
        <Header />
        <Main/>
        <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f1f1f1",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width:"100%"
  }
})


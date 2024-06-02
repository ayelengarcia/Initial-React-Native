import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native'
import { useState } from 'react'

// const tareas = [
//   { id: "1", value: "IR AL DENTISTA" },
//   { id: "2", value: "HACER COMPRAS" },
//   { id: "3", value: "JUGAR AL TENIS" },
//   { id: "4", value: "IR AL DOCTOR" }
// ]

const Main = () => {
  const [textItem, setTextItem] = useState("");
  const [listItem, setListItem] = useState([]);
  const [modalView, setModalView] = useState(false);
  const [itemSelected, setItemSelected] = useState([])

  const addItem = () => {
    // setListItem(listItem.push(textItem))
    setListItem(initialValue => [...initialValue, {
      id: Math.random().toString(),
      value: textItem
    }])
    setTextItem("")
    console.log(listItem)
  }


  const viewItem = (item) => {
    console.log(item.value)
    setItemSelected(item)
    setModalView(true)
  }
  const handleChangeText = (text) => setTextItem(text)

  const handleDelete = () => {
    const filter = listItem.filter( tarea => tarea !== itemSelected)
    setListItem(filter);
    setModalView(false);
  };
  
  const handleOmitir = () => {
    setModalView(false)
    setItemSelected({})
  }

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agregar tarea..."
          style={styles.input}
          value={textItem}
          onChangeText={handleChangeText}
        />
        <Button title="Agregar" onPress={addItem} />
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={listItem}
          keyExtractor={tarea => tarea.id.toString()}
          renderItem={({ item }) =>
            <TouchableOpacity
              onPress={() => viewItem(item)}
              style={styles.tareaStyle}
              value={itemSelected}
            >
              <Text style={styles.tareaStyleText}>{item.value}</Text>
            </TouchableOpacity>
          }
        />
      </View>

      <Modal
        visible={modalView}
        transparent={true}
        animationType='slide'>
        <View style={styles.modalStyle}>

          <View style={styles.modalContainer}>
            <View >
              <Text style={styles.tareaStyleText}>Esta seguro que quieres borrar:</Text>
            </View>
            <View style={styles.styleTarea}>
              <Text>{itemSelected ? itemSelected.value : ""}</Text>
            </View>
            <View style={styles.modalButtonsContainer} >
              <Button title='Borrar' onPress={handleDelete}/>
              <Button title='Omitir' onPress={handleOmitir} />
            </View>
          </View>
          
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  input: {
    backgroundColor: "#d9d9d9",
    borderRadius: "3px",
    textIndent: "10px",
    padding: 8,
    border: "1px solid rgb(33, 150, 243)"
  },
  listContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  tareaStyle: {
    backgroundColor: "black",
    width: "265px",
    marginBottom: 10,
    padding: 15,
    borderRadius: 3
  },
  tareaStyleText: {
    color: "white",
    textAlign: "center",
    fontWeight: 600
  },
  modalStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  modalContainer: {
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 3,
    padding: 40,
    gap:30
  },
  styleTarea: {
    backgroundColor: "#d9d9d9",
    paddingHorizontal: 50,
    paddingVertical: 8,
    borderRadius: 3,
    border: "1px solid rgb(33, 150, 243)"
  },
  modalButtonsContainer: {
    flexDirection: "row",
    gap: 10
  }
})


export default Main
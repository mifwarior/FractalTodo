import { StyleSheet } from 'react-native';


const bluePrints = {
  centerX: {
    alignItems: 'center',
  },
  centerY: {
    justifyContent: "center",
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  centerX: {
    ...bluePrints.centerX
  },
  centerY: {
    ...bluePrints.centerY
  },
  centerXY: {
    ...bluePrints.centerX,
    ...bluePrints.centerY
  },

  todo: {
    borderColor: '#ff0000',
    borderStyle: 'solid',
    borderWidth: 2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 5,
    marginBottom: 2
  },
  buttonAddTodo: {
    padding: 5,
  },
  header: {
    backgroundColor: "#841584",
    ...bluePrints.centerX,
    paddingTop: 20
  },
  title: {
    color: "white",
    fontSize: 24
  }
});

export default styles;

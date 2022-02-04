import React, { FunctionComponent, useState } from 'react';
import { Button, StyleSheet, TextBase, TextComponent, TextInput } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, TextProps, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  var usrName = "Nicolás";  
    var state = (
    <View style={styles.container}>          
      <Text>Not Found</Text>
    </View>
  );
  return state;  


  // function TextElement(thisHook: FireHook) {
  //   const [txtNumber,setName] = useState<string>("Testing");
  //   thisHook.hook = (v) => setName(v.val().highscore);
  //   return <Text>{txtNumber}</Text>;
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

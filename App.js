import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CarList from './components/CarList';

export default function App() {
  return (
    <View style={styles.container}>

      {/* <CarItem 
        name={'Model S'} 
        tagline={'Order Online For'}
        taglineCTA={'Touchless Delivery'}
        image={require('./assets/images/ModelS.jpeg')}
      /> */}

      <CarList/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});

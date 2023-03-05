import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeatResultsProvider from './context/HeatResultsProvider';
import HeatIndex from './pages/HeatIndex/HeatIndex';

const App = () => {
  return (
    // TODO: Add Routing to allow more pages
    <HeatResultsProvider>
      <HeatIndex></HeatIndex>
    </HeatResultsProvider>
  );
}

export default App;

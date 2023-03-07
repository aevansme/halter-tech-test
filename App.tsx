import { useFonts } from 'expo-font';
import HeatResultsProvider from './context/HeatResultsProvider';
import HeatIndex from './pages/HeatIndex/HeatIndex';

const App = () => {
  // 1. App font configuration to ensure Look-n-feel :)
  const [fontsLoaded] = useFonts({
    'SFPRO': require('./assets/fonts/SFUIDisplay-Regular.otf'),
  });

  return (
    // .... Routing goes here :)
    <HeatResultsProvider>
      <HeatIndex></HeatIndex>
    </HeatResultsProvider>
  );
}

export default App;
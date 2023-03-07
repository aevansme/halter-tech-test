import { useFonts } from 'expo-font';
import HeatResultsProvider from './context/HeatResultsProvider';
import HeatIndex from './pages/HeatIndex/HeatIndex';

const App = () => {
  // 1. App configuration to ensure Look-n-feel
  const [fontsLoaded] = useFonts({
    'SFPRO': require('./assets/fonts/SFUIDisplay-Regular.otf'),
  });

  return (
    // TODO: Add Routing to allow more pages
    <HeatResultsProvider>
      <HeatIndex></HeatIndex>
    </HeatResultsProvider>
  );
}

export default App;
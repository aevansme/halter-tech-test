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

// import React, { useCallback, useMemo, useRef } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// const App = () => {
//   // ref
//   const bottomSheetRef = useRef<BottomSheet>(null);

//   // variables
//   const snapPoints = useMemo(() => ['25%', '50%'], []);

//   // callbacks
//   const handleSheetChanges = useCallback((index: number) => {
//     console.log('handleSheetChanges', index);
//   }, []);

//   // renders
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <BottomSheet
//           ref={bottomSheetRef}
//           index={0}
//           snapPoints={snapPoints}
//           onChange={handleSheetChanges}
//         >
//           <View style={styles.contentContainer}>
//             <Text>Awesome 🎉</Text>
//           </View>
//         </BottomSheet>
//       </View>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: 'grey',
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// export default App;

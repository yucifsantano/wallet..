import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          'Roboto-Black': require('../assets/fonts/Roboto-Black.ttf'),
          'Roboto-BlackItalic': require('../assets/fonts/Roboto-BlackItalic.ttf'),
          'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
          'Roboto-BoldItalic': require('../assets/fonts/Roboto-BoldItalic.ttf'),
          'Roboto-Italic': require('../assets/fonts/Roboto-Italic.ttf'),
          'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
          'Roboto-LightItalic': require('../assets/fonts/Roboto-LightItalic.ttf'),
          'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
          'Roboto-MediumItalic': require('../assets/fonts/Roboto-MediumItalic.ttf'),
          'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
          'Roboto-Thin': require('../assets/fonts/Roboto-Thin.ttf'),
          'Roboto-ThinItalic': require('../assets/fonts/Roboto-ThinItalic.ttf'),
          'RobotoCondensed-Bold': require('../assets/fonts/RobotoCondensed-Bold.ttf'),
          'RobotoCondensed-BoldItalic': require('../assets/fonts/RobotoCondensed-BoldItalic.ttf'),
          'RobotoCondensed-Italic': require('../assets/fonts/RobotoCondensed-Italic.ttf'),
          'RobotoCondensed-Light': require('../assets/fonts/RobotoCondensed-Light.ttf'),
          'RobotoCondensed-LightItalic': require('../assets/fonts/RobotoCondensed-LightItalic.ttf'),
          'RobotoCondensed-Regular': require('../assets/fonts/RobotoCondensed-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}

// @flow

import {
  processColor,
  NativeModules,
} from 'react-native';

const NavigationBarManager = NativeModules.NavigationBarManager;

type NavigationBarType = {
  currentHeight: number,
  setBackgroundColor: (color: string, animated?: boolean) => void,
  setTranslucent: (translucent: boolean) => void,
}

const NavigationBar: NavigationBarType = {
  currentHeight: NavigationBarManager == null ? 0 : NavigationBarManager.HEIGHT,

  setBackgroundColor(color: string, animated?: boolean = false) {
    if (NavigationBarManager != null)
      NavigationBarManager.setColor(processColor(color), animated);
  },

  setTranslucent(translucent: boolean) {
    if (NavigationBarManager != null)
      NavigationBarManager.setTranslucent(translucent);
  }
}

export default NavigationBar;

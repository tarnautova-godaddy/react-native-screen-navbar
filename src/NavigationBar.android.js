// @flow

import {
  processColor,
  NativeModules,
} from 'react-native';

import {
  type NavigationBarType
} from '../types'


const NavigationBarManager = NativeModules.NavigationBarManager;


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

// @flow

import { type NavigationBarType } from '../types'

function noop() {}

const NavigationBar: NavigationBarType = {
  currentHeight: 0,
  setBackgroundColor: (noop: any),
  setTranslucent: (noop: any),
}

export default NavigationBar;

import { Dimensions, StatusBar, Platform } from "react-native";

/**
 *
 *  magic numbers
 *
 *  this modules changed a little bit
 *
 **/

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

function _isIphoneX() {
  let isIPhoneX = false;

  if (Platform.OS === "ios" && !Platform.isPad && !Platform.isTVOS) {
    isIPhoneX =
      (width === X_WIDTH && height === X_HEIGHT) ||
      (width === XSMAX_WIDTH && height === XSMAX_HEIGHT);
  }

  return isIPhoneX;
}

export const isIphoneX = _isIphoneX();

//ios status bar height
export const STATUS_BAR_HEIGHT_IOS = Platform.select({
  ios: isIphoneX ? 44 : 20,
  android: 0
});

//android
export const STATUS_BAR_HEIGHT_ANDROID = Platform.select({
  android: StatusBar.currentHeight,
  ios: 0
});

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;

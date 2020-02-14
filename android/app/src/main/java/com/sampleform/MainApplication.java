package com.sampleform;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import java.util.Arrays;
import com.airbnb.android.react.maps.MapsPackage;
import com.reactnativecommunity.netinfo.NetInfoPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.horcrux.svg.SvgPackage;
import com.agontuk.RNFusedLocation.RNFusedLocationPackage;
import com.kishanjvaghela.cardview.RNCardViewPackage;
import com.airbnb.android.react.lottie.LottiePackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;

public class MainApplication extends NavigationApplication {

  @Override
      protected ReactGateway createReactGateway() {
          ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
              // @javax.annotation.Nullable
              // @android.support.annotation.Nullable
              @Override
              protected String getJSMainModuleName() {
                  return "index";
              }
          };
          return new ReactGateway(this, isDebug(), host);
      }

      @Override
      public boolean isDebug() {
          return BuildConfig.DEBUG;
      }

      protected List<ReactPackage> getPackages() {
          // Add additional packages you require here
          // No need to add RnnPackage and MainReactPackage
          return Arrays.<ReactPackage>asList(
              new LinearGradientPackage(),
              new MapsPackage(),
              new RNFusedLocationPackage(),
              new NetInfoPackage(),
              new VectorIconsPackage(),
              new SvgPackage(),
              new RNCardViewPackage()
          );
      }

      @Override
      public List<ReactPackage> createAdditionalReactPackages() {
          return getPackages();
      }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
    sharedI18nUtilInstance.allowRTL(getApplicationContext(), false);
    initializeFlipper(this); // Remove this line if you don't want Flipper enabled
  }

  /**
   * Loads Flipper in React Native templates.
   *
   * @param context
   */
  private static void initializeFlipper(Context context) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.facebook.flipper.ReactNativeFlipper");
        aClass.getMethod("initializeFlipper", Context.class).invoke(null, context);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}

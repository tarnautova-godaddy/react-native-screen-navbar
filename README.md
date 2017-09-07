# react-native-onscreen-navbar
A React Native component to customize the Navigation Bar looks on Android.

![](http://i.imgur.com/g95jWQ5.gif)

## Usage

```javascript
import NavigationBar from 'react-native-screen-navbar'
NavigationBar.setBackgroundColor('#000000', isAnimated)
NavigationBar.setTranslucent(true)

```

#### Install
`npm install react-native-screen-navbar --save`

#### Linking (automatically)
`react-native link react-native-onscreen-navbar`

#### Linking (manually)

##### In `android/app/build.gradle`, add the lines

```diff
dependencies {
+   compile project(':react-native-screen-navbar')
    compile fileTree(dir: "libs", include: ["*.jar"])
    compile "com.android.support:appcompat-v7:23.0.1"
    compile "com.facebook.react:react-native:+"  // From node_modules
}
```

##### In `android/settings.gradle`, add the lines
```diff
include ':app'
+ include ':react-native-screen-navbar'
+ project(':react-native-screen-navbar').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-screen-navbar/android')
```

##### In `android/app/src/main/java/com/example/MainApplication.java`, add the `NavigationBarPackage` dependency.
```diff
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
+ import com.navbar.navigationbar.NavigationBarPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    ...
    
    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
+           new NavigationBarPackage()
        );
    }
}
```

## License

(c) 2016 Atte Huhtakangas, [MIT license](/LICENSE).

# react-native-expo-boilerplate
A beginner-friendly boiler/template that setups a react native project using Expo CLI.

### The goal of this project is to expose beginners to react native, expo, and react-navigation.


![Simulator Screen Shot - iPhone XR - 2021-12-26 at 15 01 51](https://user-images.githubusercontent.com/60866363/147422014-0d8de20f-8cd6-4244-a124-d33b78e72533.png)


## Built-in Functionality
* `react-navigation v6` including bottom tabs and stack navigators
* `react-native-async-storage/async-storage` that allows a simple auth key when handling authentication
* `redux` and `redux-thunk`
*  sample screens navigation including  sign in and sign up

## Running application

1. Install expo if not installed using `npm install --global expo-cli`
2. Run `https://github.com/liconl/react-native-expo-boilerplate` to clone repository
3. Run `yarn` or `npm install` to install dependencies
4. Run `npm start`


### Simulators 
The start script also runs a script that opens a simulator.
To open a simulator on mac, download xcode. 
On windows, download Android Studio and create an Android Virtual Device (AVD) on the settings page.

If you don't want to use a simulator, replace the `start` script from `"start": "open -a Simulator && expo start"` to `"expo start"` on the `package.json` file. Download Expo Go app on your phone and scan the bar code (use camera app on iOS and Expo Go on android)

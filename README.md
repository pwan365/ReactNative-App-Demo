# Assignment 1 - Tech Demo
This is an app created using React Native

The app is an goal setting app that helps the user manage their budge, that allows the user to create a goal with a name, a cost for the goal, a start and an end date for the goal.

## Setting up environment

To run this app on your machine, you will need Node and Android Studio. Follow the [Setup Guide](https://reactnative.dev/docs/environment-setup) on React Native's website up until the "Create a new application" section.

Clone this repository into a folder.

Open windows powershell or terminal within the repository folder

Use command 

`npm install`

## Running the app

Open windows powershell

Use cammand

`npx react-native start`

Keep the previous powershell running and open another new windows powershell

Use cammand
`npx react-native run-android`

## The code base

All the of the code that defines the app is within the App.js file. 

To give a simple overview of the code:

The top of the file are import statements, getting individual elements or functions from their packages, including the ones that came with React/React native, and the ones from external libraries.

Each `const` is an element of the UI or a screen.

The `const` with the name `App` is the main element of the app, usually where the main screen go. In this case, because navigation between screens is needed, the `App` has a Navigator element instead, and the main screen is declared below.

Below are the `HomeScreen`, which is the main screen of the app, and an `AddGoalScreen` which is the additional screen that can be transitioned to.

Lastly, at the bottom of the file is the CSS sheet for the UI of the app.

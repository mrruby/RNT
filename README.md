# React Native ETH Wallet

This is a mobile app built with React Native and TypeScript that allows users to input a twelve-word recovery seed, derive and store their private key, and view their ETH balance and address.

# Start the development server

npx react-native start

## For Android:

Start an Android emulator (if not already running)
You can use Android Studio to create and run an emulator
npx react-native run-android

## For iOS:

Open the Xcode project located in <project-name>/ios directory
Select a target device and run the app
npx react-native run-ios

## Securely retrieve, store and handle any sensitive API keys / secrets

- To retrieve sensitive API keys/secrets, I would create a .env file in the root directory of the project and add the sensitive keys/secrets as environment variables. This file would be added to the .gitignore file to ensure that it is not pushed to the repository.
- To store the sensitive API keys/secrets, I would use a secure storage mechanism such as Keychain or AsyncStorage. These storage mechanisms allow us to store data securely on the user's device.
- But according to the https://reactnative.dev/docs/security: "Never store sensitive API keys in your app code. Anything included in your code could be accessed in plain text by anyone inspecting the app bundle. Tools like react-native-dotenv and react-native-config are great for adding environment-specific variables like API endpoints, but they should not be confused with server-side environment variables, which can often contain secrets and API keys." and "the most secure way to handle this would be to build an orchestration layer between your app and the resource"

## Process of publishing the app to the Play Store and Apple App Store

In my experience, using CI/CD tools like Bitrise and Codemagic has made the process of publishing apps to the Play Store and Apple App Store much faster and easier. These tools provide a streamlined workflow, automatic building, testing, and publishing, and offer a wide range of integrations with other services, such as Slack, GitHub, and Jira. They also provide detailed logs and reports, making it easy to troubleshoot any issues that may arise during the publishing process.

1. Prepare your app for release by configuring the necessary settings, such as the version number, build number, signing keys, etc.

2. Generate the release build of your app by running the following commands in the terminal:

   - For Android: `./gradlew assembleRelease`
   - For iOS: `react-native run-ios --configuration Release`

3. Create an account on the Google Play Store and Apple App Store and set up a new app.

4. Upload the release build of your app to the corresponding app store using the web interface provided by the app store.

5. Fill in the required information, such as app name, description, screenshots, etc.

6. Submit your app for review, and wait for it to be approved.

7. Once your app is approved, it will be published on the app store.

8. Use a CI/CD tool to automate the entire process.

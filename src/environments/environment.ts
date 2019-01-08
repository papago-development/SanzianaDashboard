// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyBAPoaYiqNO-sghtL7WdVrPxYhI4SLkMOM',
    authDomain: 'sanziana-71537.firebaseapp.com',
    databaseURL: 'https://sanziana-71537.firebaseio.com',
    projectId: 'sanziana-71537',
    storageBucket: 'sanziana-71537.appspot.com',
    messagingSenderId: '830986064942'
  }
};


// <script src="https://www.gstatic.com/firebasejs/5.7.2/firebase.js"></script>
//   <script>
// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyBAPoaYiqNO-sghtL7WdVrPxYhI4SLkMOM",
//   authDomain: "sanziana-71537.firebaseapp.com",
//   databaseURL: "https://sanziana-71537.firebaseio.com",
//   projectId: "sanziana-71537",
//   storageBucket: "sanziana-71537.appspot.com",
//   messagingSenderId: "830986064942"
// };
// firebase.initializeApp(config);
// </script>

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

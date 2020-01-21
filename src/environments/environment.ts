// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://platzi-store.herokuapp.com/products/',
  firebase: {
    apiKey: 'AIzaSyD85fz3_oqMYQmyZDgkO2MtWGC5k8Anwz4',
    authDomain: 'platzi-store-e37af.firebaseapp.com',
    databaseURL: 'https://platzi-store-e37af.firebaseio.com',
    projectId: 'platzi-store-e37af',
    storageBucket: 'platzi-store-e37af.appspot.com',
    messagingSenderId: '593432219266',
    appId: '1:593432219266:web:bcafeaf1492e0cf25eae9b'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

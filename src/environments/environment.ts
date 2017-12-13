// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAIPa906Cb2_gdvaCuZEHSuQAR5UGkCuPk',
    authDomain: 'servsuite-gps-demo.firebaseapp.com',
    databaseURL: 'https://servsuite-gps-demo.firebaseio.com',
    projectId: 'servsuite-gps-demo',
    storageBucket: 'servsuite-gps-demo.appspot.com',
    messagingSenderId: '175866059081'
  }
};

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  mediaUrl: "https://resumescripters.com/apis/public/",

  //order count;
  order_count: [
    { count: 0.2, value: "Cover Letter Only" },
    { count: 0.3, value: "Cover Letter Only" },   //if difficult
    { count: 0.5, value: "Linkdin Only" },
    { count: 0.7, value: "Linkdin Only" },                     //if difficult
    { count: 1, value: "Resume Only" },
    { count: 1.2, value: "Resume + Cover Letter" },
    { count: 1.5, value: "Resume + Linkdin" },
    { count: 1.7, value: "Resume + Cover Letter + Linkdin" },
    { count: 2.2, value: "Resume + Cover Letter + Linkdin + Bio" },
    { count: 2.4, value: "2 Resume + 2 Cover Letter" },
    { count: 2.9, value: "2 Resume + 2 cover Letter + Linkdin" }
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

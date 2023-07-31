export const environment = {
  production: true,

  mediaUrl: "https://resumescripters.com/apis/public/",

  //order count;
  order_count: [
    { count: 0.2, value: "Cover Letter Only" },
    { count: 0.3, value: "Cover Letter Only" },   //if difficult
    { count: 0.5, value: "Linkdin Only" },
    { count: 0.7, value: "Linkdin Only" },      //if difficult
    { count: 1, value: "Resume Only" },
    { count: 1.2, value: "Resume + Cover Letter" },
    { count: 1.5, value: "Resume + Linkdin" },
    { count: 1.7, value: "Resume + Cover Letter + Linkdin" },
    { count: 2.2, value: "Resume + Cover Letter + Linkdin + Bio" },
    { count: 2.4, value: "2 Resume + 2 Cover Letter" },
    { count: 2.9, value: "2 Resume + 2 cover Letter + Linkdin" }
  ]
}

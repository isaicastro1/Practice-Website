const users = [
  {
    initials: "IO",
    name: `""><img src=x onerror=prompt(...`,
    company: "tested12's Company",
    title: "-",
    email: "zealmaker1@gmail.com",
    owned: "David Da Silva",
    street: "-",
    created: "10/19/2021",
    contacted: "4/28/2022",
  },
  {
    initials: "A",
    name: '"-alert(document.domain)-"',
    company: "Maillak",
    title: "-",
    email: "wosovip821@maillak.com",
    owned: "David Da Silva",
    street: "-",
    created: "10/19/2021",
    contacted: "",
  },
  {
    initials: "TS",
    name: '"The Soapman" Soapman',
    company: "The Soapman's Company",
    title: "-",
    email: "reginald@hmcgroupllc.com",
    owned: "-",
    street: "-",
    created: "8/11/2016",
    contacted: "8/16/2018",
  },
  {
    initials: "TS",
    name: "#TNM Member Services",
    company: "Tnmwordup",
    title: "-",
    email: "memberservices@tnmwordup...",
    owned: "Marketo Integration",
    street: "-",
    created: "4/6/2018",
    contacted: "",
  },
  {
    initials: "YM",
    name: "&#39;Yuliia Myshkovska&#39;",
    company: "Cloudastructure",
    title: "-",
    email: "juliia@cloudastructure.com",
    owned: "Kristi Lindstrom",
    street: "-",
    created: "12/30/2020",
    contacted: "",
  },
  {
    column: "Street",
    initials: "L",
    name: "&lt;liz@airbornedronesco&gt;",
    company: "Airborne Drones",
    title: "-",
    email: "liz@airbornedrones.co",
    owned: "-",
    street: "-",
    created: "2/5/2021",
    contacted: "2/15/2021",
  },
  {
    initials: "AA",
    name: "'Ale Bar Av'",
    company: "Cantera",
    title: "-",
    email: "ale@cantera.co",
    owned: "-",
    street: "-",
    created: "5/30/2018",
    contacted: "",
  },
  {
    column: "Last Contacted",
    initials: "AS",
    name: "'Amandeep Singh'",
    company: "Arrow PC Network Pvt. ltd.",
    title: "-",
    email: "aman@arrowpc.co.in",
    owned: "-",
    street: "-",
    created: "9/26/2016",
    contacted: "8/16/2018",
  },
  {
    name: "'Amit Kumar Mandal'",
    company: "Cleartax",
    title: "-",
    email: "amit.mandal@cleartax.in",
    owned: "Anya Gayvoronskaya",
    street: "-",
    created: "8/23/2017",
    contacted: "6/3/2019",
  },
  ,
  {
    name: "'Andreas Semmler'",
    company: "Werkmeister & Company GmbH",
    title: "-",
    email: "andreas.semmler@werko.de",
    owned: "-",
    street: "-",
    created: "6/20/2018",
    contacted: "7/11/2018",
  },
  {
    initials: "AL",
    name: "'Anita Lam'",
    company: "Beyond Media Group",
    title: "-",
    email: "alam@bmgww.com",
    owned: "-",
    street: "-",
    created: "6/28/2016",
    contacted: "",
  },
  {
    name: "'Annika DiMeo'",
    company: "Brand+Aid",
    title: "Chief of Staff",
    email: "annika@brandaiding.com",
    owned: "Colin Nee",
    street: "-",
    created: "7/17/2020",
    contacted: "9/23/2020",
  },
  {
    name: "'Azam Ameer'",
    company: "Dream Design Property",
    title: "-",
    email: "azam.a@ddpproperty.com.au",
    owned: "-",
    street: "-",
    created: "2/8/2016",
    contacted: "",
  },
  {
    name: "'Barb Merrill'",
    company: "Flathead Valley Brokers",
    title: "-",
    email: "barb@fvbmt.com",
    owned: "Nikolos Khachiyan",
    street: "-",
    created: "5/22/2019",
    contacted: "5/22/2019",
  },
  {
    name: "'Brittany George'",
    company: "Midwest Engineering",
    title: "-",
    email: "test@testing.com",
    owned: "-",
    street: "1234 Main St",
    created: "5/14/2015",
    contacted: "1/18/15",
  },
];

const allUsers = document.getElementById("all-users");

let i = 1;
let topPixels = 160;

users.map((user) => {
  const person = document.createElement("div");

  person.id = `person${i}`;
  i++;

  // creating all user's info
  let initials = document.createElement("div");
  let firstName = document.createElement("div");
  let company = document.createElement("div");
  let title = document.createElement("div");
  let email = document.createElement("div");
  let ownedBy = document.createElement("div");
  let street = document.createElement("div");
  let created = document.createElement("div");
  let lastContacted = document.createElement("div");

  //   initials
  let initialsText = document.createElement("p");
  initials.innerHTML = user.initials;
  initials.appendChild(initialsText);

  //   Rows
  let row1 = document.createElement("p");
  row1.classList.add("row1", "names");
  row1.innerHTML = user.name;
  firstName.appendChild(row1);

  let row2 = document.createElement("p");
  row2.classList.add("row2", "company");
  row2.innerHTML = user.company;
  company.appendChild(row2);

  let row3 = document.createElement("p");
  row3.classList.add("row3", "title");
  row3.innerHTML = user.title;
  title.appendChild(row3);

  let row4 = document.createElement("p");
  row4.classList.add("row4", "email");
  row4.innerHTML = user.email;
  email.appendChild(row4);

  let row5 = document.createElement("p");
  row5.classList.add("row5", "owned");
  row5.innerHTML = user.owned;
  ownedBy.appendChild(row5);

  let row6 = document.createElement("p");
  row6.classList.add("row6", "street");
  row6.innerHTML = user.street;
  street.appendChild(row6);

  let row7 = document.createElement("p");
  row7.classList.add("row7", "created");
  row7.innerHTML = user.created;
  created.appendChild(row7);

  let row8 = document.createElement("p");
  row8.classList.add("row8", "last-contacted");
  row8.innerHTML = user.contacted;
  lastContacted.appendChild(row8);

  console.log("row1", row1.innerHTML);
  console.log("row2", row2.innerHTML);
  console.log("row3", row3.innerHTML);
  console.log("row4", row4.innerHTML);
  console.log("row5", row5.innerHTML);
  console.log("row6", row6.innerHTML);
  console.log("row7", row7.innerHTML);
  console.log("row8", row8.innerHTML);

  // Adding all children
  person.append(
    firstName,
    company,
    title,
    email,
    ownedBy,
    street,
    created,
    lastContacted
  );

  //   Seperating all rows of users
  person.classList.add("users");
  person.style.top = topPixels + "px";
  topPixels += 51;

  allUsers.appendChild(person);
  console.log(person);
});

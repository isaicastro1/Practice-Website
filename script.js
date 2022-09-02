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
    name: "Ale Bar Av",
    company: "Cantera",
    title: "-",
    email: "ale@cantera.co",
    owned: "-",
    street: "-",
    created: "5/30/2018",
    contacted: "",
  },
  {
    initials: "AS",
    name: "Amandeep Singh",
    company: "Arrow PC Network Pvt. ltd.",
    title: "-",
    email: "aman@arrowpc.co.in",
    owned: "-",
    street: "-",
    created: "9/26/2016",
    contacted: "8/16/2018",
  },
  {
    initials: "AM",
    name: "Amit Kumar Mandal",
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
    initials: "AS",
    name: "Andreas Semmler",
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
    name: "Anita Lam",
    company: "Beyond Media Group",
    title: "-",
    email: "alam@bmgww.com",
    owned: "-",
    street: "-",
    created: "6/28/2016",
    contacted: "",
  },
  {
    initials: "AD",
    name: "Annika DiMeo",
    company: "Brand+Aid",
    title: "Chief of Staff",
    email: "annika@brandaiding.com",
    owned: "Colin Nee",
    street: "-",
    created: "7/17/2020",
    contacted: "9/23/2020",
  },
  {
    initials: "AA",
    name: "Azam Ameer",
    company: "Dream Design Property",
    title: "-",
    email: "azam.a@ddpproperty.com.au",
    owned: "-",
    street: "-",
    created: "2/8/2016",
    contacted: "",
  },
  {
    initials: "BM",
    name: "Barb Merrill",
    company: "Flathead Valley Brokers",
    title: "-",
    email: "barb@fvbmt.com",
    owned: "Nikolos Khachiyan",
    street: "-",
    created: "5/22/2019",
    contacted: "5/22/2019",
  },
  {
    initials: "BG",
    name: "Brittany George",
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

  // Columns
  let column1 = document.createElement("div");
  column1.classList.add("column-name", "col-1");
  column1.innerHTML = user.name;
  firstName.appendChild(column1);

  let column2 = document.createElement("div");
  column2.classList.add("column-name", "col-2");
  column2.innerHTML = user.company;
  company.appendChild(column2);

  let column3 = document.createElement("div");
  column3.classList.add("column-name", "col-3");
  column3.innerHTML = user.title;
  title.appendChild(column3);

  let column4 = document.createElement("div");
  column4.classList.add("column-name", "col-4");
  column4.innerHTML = user.email;
  email.appendChild(column4);

  let column5 = document.createElement("div");
  column5.classList.add("column-name", "col-5");
  column5.innerHTML = user.owned;
  ownedBy.appendChild(column5);

  let column6 = document.createElement("div");
  column6.classList.add("column-name", "col-6");
  column6.innerHTML = user.street;
  street.appendChild(column6);

  let column7 = document.createElement("div");
  column7.classList.add("column-name", "col-7");
  column7.innerHTML = user.created;
  created.appendChild(column7);

  let column8 = document.createElement("div");
  column8.classList.add("column-name", "col-8");
  column8.innerHTML = user.contacted;
  lastContacted.appendChild(column8);

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

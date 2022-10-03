require('./db')
const Issue = require('./issues')

const tempIssues = [
    {
      id: 1,
      owner: "Person-A",
      created: new Date("2022-09-19"),
      due: new Date("2022-09-25"),
      status: "Assigned",
      title: "This is the First issue",
      effort: 10
    },
    {
      id: 2,
      owner: "Person-B",
      created: new Date("2022-09-17"),
      due: new Date("2022-09-22"),
      status: "Resolved",
      title: "This is the Second issue",
      effort: 20
    },
  ];

Issue.insertMany(tempIssues).then(function(data){
    console.log()
})
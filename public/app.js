const IssueFilter = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Issue Filter");
};

const RowComponent = props => {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props.id), /*#__PURE__*/React.createElement("td", null, props.title), /*#__PURE__*/React.createElement("td", null, props.owner), /*#__PURE__*/React.createElement("td", null, props.created.toDateString()), /*#__PURE__*/React.createElement("td", null, props.due.toDateString()), /*#__PURE__*/React.createElement("td", null, props.status));
};

const IssueTable = ({
  issues
}) => {
  // const tempIssues = [
  //   {
  //     id: 1,
  //     owner: "Person-A",
  //     created: new Date("2022-09-19"),
  //     due: new Date("2022-09-25"),
  //     status: "Assigned",
  //     title: "This is the First issue",
  //   },
  //   {
  //     id: 2,
  //     owner: "Person-B",
  //     created: new Date("2022-09-17"),
  //     due: new Date("2022-09-22"),
  //     status: "Resolved",
  //     title: "This is the Second issue",
  //   },
  // ];
  // const newIssues = {
  //   // id:3,
  //   owner: "Person-C",
  //   created: new Date("2022-09-22"),
  //   due: new Date("2022-09-29"),
  //   status: "Assigned",
  //   title: "This is the Third issue",
  //   // id: 2,
  //   // owner: "Person-B",
  //   // created: new Date("2022-09-17"),
  //   // due: new Date("2022-09-22"),
  //   // status: "Resolved",
  //   // title: "This is the Second issue",
  // };
  // const [issues, setIssues] = React.useState(tempIssues);
  // setTimeout(() => {
  //   setIssues(tempIssues);
  // }, 2000);
  // setTimeout(() => {
  //   tempIssues.push(newIssues)
  //   setIssues(tempIssues);
  // }, 3000)
  // let counter = 0;
  // React.useEffect(() => {
  //   console.log("Hello", counter);
  //   setTimeout(() => {
  //     AddSingleIssue(newIssues);
  //   }, 2000);
  //   counter++;
  // }, []);
  // const AddSingleIssue = (newIssues) => {
  //   newIssues.id = issues.length + 1;
  //   let IssueList = issues.slice();
  //   IssueList.push(newIssues);
  //   setIssues(IssueList);
  // };
  const issueRows = issues.map(issue => /*#__PURE__*/React.createElement(RowComponent, {
    key: issue.id,
    owner: issue.owner,
    status: issue.status,
    created: issue.created,
    due: issue.due,
    id: issue.id,
    title: issue.title
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "This is placeholder for IssueTable"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "TITLE"), /*#__PURE__*/React.createElement("th", null, "OWNER"), /*#__PURE__*/React.createElement("th", null, "CREATED"), /*#__PURE__*/React.createElement("th", null, "DUE"), /*#__PURE__*/React.createElement("th", null, "STATUS"))), /*#__PURE__*/React.createElement("tbody", null, issueRows)));
};

const AddIssue = ({
  AddSingleIssue
}) => {
  function handleSubmit(e) {
    e.preventDefault();
    let form = document.forms.addForm;
    const newIssues = {
      owner: form.owner.value,
      created: new Date(form.created.value),
      due: new Date(form.due.value),
      status: form.status.value,
      title: form.title.value,
      effort: form.effort.value
    };
    AddSingleIssue(newIssues);
    form.reset();
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "This is placeholder for AddIssue"), /*#__PURE__*/React.createElement("form", {
    name: "addForm",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("input", {
    name: "owner",
    placeholder: "Owner",
    type: "text"
  }), /*#__PURE__*/React.createElement("input", {
    name: "status",
    placeholder: "Status",
    type: "text"
  }), /*#__PURE__*/React.createElement("input", {
    name: "effort",
    placeholder: "Effort",
    type: "text"
  }), /*#__PURE__*/React.createElement("input", {
    name: "created",
    placeholder: "Created",
    type: "text"
  }), /*#__PURE__*/React.createElement("input", {
    name: "due",
    placeholder: "Due",
    type: "text"
  }), /*#__PURE__*/React.createElement("input", {
    name: "title",
    placeholder: "Title",
    type: "text"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit")));
};

const IssueList = () => {
  const tempIssues = [{
    id: 1,
    owner: "Person-A",
    created: new Date("2022-09-19"),
    due: new Date("2022-09-25"),
    status: "Assigned",
    title: "This is the First issue",
    effort: 10
  }, {
    id: 2,
    owner: "Person-B",
    created: new Date("2022-09-17"),
    due: new Date("2022-09-22"),
    status: "Resolved",
    title: "This is the Second issue",
    effort: 20
  }];
  const newIssues = {
    owner: "Person-C",
    created: new Date("2022-09-22"),
    due: new Date("2022-09-29"),
    status: "Assigned",
    title: "This is the Third issue"
  };
  const [issues, setIssues] = React.useState(tempIssues);

  const AddSingleIssue = newIssues => {
    newIssues.id = issues.length + 1;
    let IssueList = issues.slice();
    IssueList.push(newIssues);
    setIssues(IssueList);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, {
    issues: issues
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(AddIssue, {
    AddSingleIssue: AddSingleIssue
  }));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(IssueList, null));
const IssueFilter = () => {
  return <h1>Issue Filter</h1>;
};

const RowComponent = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.owner}</td>
      <td>{props.created.toDateString()}</td>
      <td>{props.due.toDateString()}</td>
      <td>{props.status}</td>
    </tr>
  );
};

const IssueTable = ({ issues }) => {
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
  const issueRows = issues.map((issue) => (
    <RowComponent
      key={issue.id}
      owner={issue.owner}
      status={issue.status}
      created={issue.created}
      due={issue.due}
      id={issue.id}
      title={issue.title}
    />
  ));
  return (
    <div>
      <h2>This is placeholder for IssueTable</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>OWNER</th>
            <th>CREATED</th>
            <th>DUE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>{issueRows}</tbody>
      </table>
    </div>
  );
};

const AddIssue = ({ AddSingleIssue }) => {

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

  return <div>
    <h1>This is placeholder for AddIssue</h1>
    <form name="addForm" onSubmit={handleSubmit}>
      <input name="owner" placeholder="Owner" type="text" />
      <input name="status" placeholder="Status" type="text" />
      <input name="effort" placeholder="Effort" type="text" />
      <input name="created" placeholder="Created" type="text" />
      <input name="due" placeholder="Due" type="text" />
      <input name="title" placeholder="Title" type="text" />
      <button type="submit">Submit</button>
    </form>
  </div>;
};

const IssueList = () => {
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

  const newIssues = {
    owner: "Person-C",
    created: new Date("2022-09-22"),
    due: new Date("2022-09-29"),
    status: "Assigned",
    title: "This is the Third issue",
  };
  const [issues, setIssues] = React.useState(tempIssues);

  const AddSingleIssue = (newIssues) => {
    newIssues.id = issues.length + 1;
    let IssueList = issues.slice();
    IssueList.push(newIssues);
    setIssues(IssueList);
  };

  return (
    <div>
      <IssueFilter />
      <hr />
      <IssueTable issues={issues} />
      <hr />
      <AddIssue AddSingleIssue={AddSingleIssue} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<IssueList />);
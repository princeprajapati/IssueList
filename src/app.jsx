const IssueFilter = () => {
  return <h1>Issue Filter</h1>
};

const IssueRow = (props) => {
  return (
          <tr>
            <td style={props.rowStyle}>{props.Id}</td>
            <td style={props.rowStyle}>{props.Title}</td>
          </tr>
  )
}

const IssueTable = () => {
  const rowStyle = {border: "1px solid"};
  const issues = [{Id: 5, Title:"This is fifth issue"},
                  {Id: 6, Title:"This is sixth issue"}];
  const issueRows = issues.map(issue => (
    <IssueRow rowStyle={rowStyle} Id={issue.Id} Title={issue.Title}/>
  ))
  return (
    <div>
      <table>
        <thead>
            <th style={rowStyle}>ID</th>
            <th style={rowStyle}>Title</th>
        </thead>
        <tbody>
          <tr>
            <td style={rowStyle}>1</td>
            <td style={rowStyle}>This is first issue</td>
          </tr>
          <tr>
            <td style={rowStyle}>2</td>
            <td style={rowStyle}>This is second issue</td>
          </tr>
          <IssueRow rowStyle={rowStyle} Id={3} Title={"This is third issue"} />
          <IssueRow rowStyle={rowStyle} Id={4} Title={"This is fourth issue"} />
          {issueRows}
        </tbody>
      </table>
    </div>
  )
};

const AddIssue = () => {
  return <h1>Add Issue</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <IssueFilter />
    <hr />
    <IssueTable />
    <hr />
    <AddIssue />
  </React.StrictMode>
);

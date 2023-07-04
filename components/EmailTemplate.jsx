export const EmailTemplate = (props) => {
  const { name, companyName, email, phone, message } = props;
  return (
    <div>
      <h3>FULL NAME: {name}</h3>
      <h3>COMPANY NAME: {companyName}</h3>
      <h3>EMAIL ADDRESS: {email}</h3>
      <h3>PHONE NUMBER: {phone}</h3>
      <h5>YOUR MESSAGE: {message}</h5>
    </div>
  );
};

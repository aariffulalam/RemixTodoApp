import { Link } from "@remix-run/react";

  // import '../style.css'
  export default function RoutToOtherPage() {
    // renders the UI
    return (
      <div className="container" style={{backgroundColor:'yellow'}}>
      <h1>Signup</h1>
      <form>
        <Link to='/'>Home</Link><br /><br />
        <label htmlFor="username">Username:</label>
        <input style={{backgroundColor:'red'}} type="text" id="username" name="username" /><br /><br />
        <label htmlFor="email">Email:</label>
        <input style={{backgroundColor:'red'}} type="email" id="email" name="email" /><br /><br />
        <label htmlFor="password">Password:</label>
        <input style={{backgroundColor:'red'}} type="password" id="password" name="password" /><br /><br />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input style={{backgroundColor:'red'}} type="password" id="confirm-password" name="confirm-password" /><br /><br />
        <input type="submit" value="Signup" />
      </form>
    </div>
    );
  }
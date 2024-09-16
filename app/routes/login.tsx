  // import '../style.css'
  import { Link } from "@remix-run/react";
  export default function RoutToOtherPage() {
    // renders the UI
    return (
      <div className="container" style={{backgroundColor:'yellow'}}>
      <h1>Login</h1>
      <form>
      <Link to='/'>Home</Link><br /><br />
        <label htmlFor="email">Email:</label>
        <input style={{backgroundColor:'red'}} type="email" id="email" name="email" /><br /><br />
        <label htmlFor="password">Password:</label>
        <input style={{backgroundColor:'red'}} type="password" id="password" name="password" /><br /><br />
        <input type="submit" value="Login" />
      </form>
    </div>
    );
  }
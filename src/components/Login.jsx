import Button from "./Button"
import "./login.css"
function MyForm() {
    return (
        <div className="loginform">

      <form >
          <input type="text" placeholder="Name" className="log" />  <br /> <br />
          <input type="email" placeholder="Email"  className="log"/> <br /> <br />
          <input type="password" placeholder="Password"  className="log"/> <br /> <br />
          <input type="password" placeholder="Confrim password"  className="log"/> <br /> <br />
      </form>
      <Button/>
      </div>
    )
    
  }
  export default MyForm
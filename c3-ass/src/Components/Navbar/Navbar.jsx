import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar" style={{display:"flex",gap:"10px"}}>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}

    <Link to={"/"} className="home">Home</Link>
     
     <Link to={"/section/history"} className="history">history</Link>
     <Link to={"/section/mythology"} className="mythology">mythology</Link>
     <Link to={"/section/economics"} className="economics">economics</Link>
     <Link to={"/section/technology"} className="technology">technology</Link>

      </div>
    </>
  );
};

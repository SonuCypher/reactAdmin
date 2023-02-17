import React from "react";
import "./Header.css";

function Header() {
  return (
    // <div>
    //   <form>
    //     <span>
    //     <label for="search">Search</label>
    //       <input id="search" type="text" placeholder="place"></input>
    //       <span className="caret"></span>
    //     </span>
    //     <span>
    //       <input type="text" placeholder="product"></input>
    //     </span>
    //   </form>
    // </div>
    <div className="navbar">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
        <div className="search-box">
          <label for='text'><i className="fas fa-search"></i></label>
          <input
            type="text"
            className="input-search"
            placeholder="Type to Search..."
          />
        </div>
      </ul>
    </div>
  );
}

export default Header;

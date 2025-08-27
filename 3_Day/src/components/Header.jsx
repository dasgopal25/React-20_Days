function Header(props){
    return(
        <div className="heading">
            <img className="images" src="data:image/png;base64,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" width="80px" height="80px"/>
            <div className="option">
        <button className="but">Man</button>
        <button className="but">woman</button>
        <button className="but">Kids</button>
        <button className="but">Home</button>
        <button className="but">Beauty</button>
        <button className="but">Genz</button>
        <button className="but">Studio</button>
       
            </div>
          <input placeholder="Search for products,brands and more" className="searchbar"></input>

         <div className="Profile">
        <button className="pro">Profile</button>
        <button className="pro">Wishlist</button>
        <button className="pro">Bag</button>
            </div>

        </div>
    )
}


export default Header;

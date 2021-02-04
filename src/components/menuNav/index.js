import React from "react"
import "./style.css"

function MenuNav(){
    
return(
     <nav className="level is-mobile menuNav">
  <div className="level-item has-text-centered">
    <div>
      <a className="category selected">Ramen</a>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <a className="category" href="#appetizer">Appetizers</a>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="category">Rice Bowls</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="category">Combos</p>
    </div>
  </div>
</nav>
)
}

export default MenuNav

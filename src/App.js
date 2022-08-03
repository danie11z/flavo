import React, {Component} from "react"
import "./App.css"
import product from "./assets/intensity.png"

export default class flavo extends Component{

  state = {
    count: 0,
  }

  Add = () => {
    this.setState({
      count: this.state.count +1
    })
  }

  Remove = () => {
    if(this.state.count>0){
      this.setState({
        count: this.state.count -1
      })
    }
  }

  render(){
    return(
      <>
      <header>
        <input className="search" placeholder="flavo" type="search"  />
      </header>
      <main>
        <figure>
          <img className="product" src={product} alt="Um sachê escrito intensity no topo, com mãos vermelhas na embalagem e um fundo branco com plantas espinhosas. Na parte inferior está escrito flavo" />
        </figure>
        <section className="infoProductsBox">
          <div class="titleAndPriceBox">
            <h1 className="title">INTENSITY</h1>
            <p className="price">$15</p>
          </div>
          <h3 className="subTitle">WHAT'S INSIDE</h3>
          <p className="text">Chili, oregano, safran, paprika</p>
          <h3 className="subTitle">WHY WE LOVE IT</h3>
          <p className="text">This one will add a little savoury flavour to any food and turn any meal to a cullinary masterpiece.</p>
        </section>
        <section className="purchaseInfoBox">
          <form className="sizeOptBox">
          <label className="opt" for="BAG">
            <input id="BAG" type="radio" name="bag" />
            BAG (75g)
          </label>
          <label className="opt" for="JAR">
            <input id="JAR" type="radio" name="JAR" />
            JAR (150g)
          </label>
          </form>
          <div className="quant">
            <button className="removeBtn" onClick={this.Remove}>–</button>
            <p className="quantText">{this.state.count}</p>
            <button className="addBtn" onClick={this.Add}>+</button>
          </div>
          <button className="addToCartBtn">ADD TO CART</button>
        </section>
      </main>
      </>
    )
  }
}
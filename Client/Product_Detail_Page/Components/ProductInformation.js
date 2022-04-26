import React from 'react';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData : null,
      currentSelectedStyle : null,
      strikeThrough : 'noStrike',
      sale_price : null
    }
  }
  UNSAFE_componentWillReceiveProps (props) {
    if (props !== undefined) {
      this.setState({['productData']: props.data})
      this.setState({['currentSelectedStyle']: props.style})
      if (props.style?.sale_price === null) {
        this.setState({['strikeThrough']: 'noStrike'})
      } else {
        this.setState({['sale_price']: props.style?.sale_price})
        this.setState({['strikeThrough']: 'strike'})
      }
    }
  }

  render() {
    return (
      <div>
        <br></br>
        <div className = "makeInline">
        Star Rating (To be added)
          <u>
            <a href="#RatingsReviews">Read all Reviews</a>
          </u>
        </div>
        <br></br>
        {(this.state.productData) ? this.state.productData.category : null}
        <br></br>
        <h1>
        {(this.state.productData) ? this.state.productData.name : null}
        </h1>
        <br></br>
        <div className = {this.state.strikeThrough}>
        ${(this.state.currentSelectedStyle) ? this.state.currentSelectedStyle.original_price : null}
        </div>
        {this.state.sale_price ? `Our Sale Price is $${this.state.sale_price}!`: null}
      </div>
    );
  }
}

export default ProductInformation;
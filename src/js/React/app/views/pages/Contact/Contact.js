import React, { Component } from 'react';

class Contact extends Component{
  constructor(props){
    super(props)
    this.state = {
      email: "",
      subject: "",
      message: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name

  this.setState({
    [name]: value
  })

  }

  handleSubmit(event){
    event.preventDefault();
  }

  render(){
    return(
      <div className="contact">
        <h1> This is the contact page </h1>
          <form role="contact__form" onSubmit={this.handleSubmit}>

              {/* <!-- Here we create the text box for capturing the search term--> */}
            <div className="contact__form__group">
              <label htmlFor="search">Email:</label>
              <input
                name="email"
                value={this.state.email}
                type="text"
                className="contact__form__group__input"
                id="contactFormEmail"
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className="contact__form__group">
              <label htmlFor="search">Subject:</label>
              <input
                name="subject"
                value={this.state.subject}
                type="text"
                className="contact__form__group__input"
                id="contactFormSubject"
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className="contact__form__group">
              <label htmlFor="search">Mesage:</label>
              <textarea
                name="subject"
                value={this.state.message}
                type="text"
                className="contact__form__group__textarea"
                id="contactFormMessage"
                onChange={this.handleInputChange}
                required
              />
            </div>

            {/* <!-- Here we have our final submit button --> */}
            <button type="submit" id="runSearch"><i className="fa fa-search"></i> Submit</button>

          </form>
      </div>
    )
  }
}

export default Contact;

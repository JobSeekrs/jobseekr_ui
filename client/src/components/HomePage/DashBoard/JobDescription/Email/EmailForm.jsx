import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
// import nodemailer from 'nodemailer';

class EmailForm extends Component {
  constructor() {
    super()
    this.state = {
      recipient: '',
      email: '',
      topic: '',
      message: '',
      emailList: [
                  {name: 'Niv Salamon', email: 'niv.salamon@test.com', topic: 'Thank You for Interview'},
                  {name: 'Jeffrey Ueo', email: 'jeffrey.ueo@test.com',  topic: 'Thank You for Interview'},
                  {name: 'Richard Oh', email: 'richard.oh@test.com',  topic: 'Follow Up to Full Stack Dev Interview'},
                  {name: 'Erica Kim', email: 'erica.kim@test.com',  topic: 'Follow Up to Full Stack Dev Interview'}
                 ],
    }

    this.handleInput = this.handleInput.bind(this);
    this.saveEmail = this.saveEmail.bind(this);
    this.discardEmail = this.discardEmail.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });

    console.log(this.state)
  }

  saveEmail() {
    console.log('i will save emails to db')
    //axios post to db
  }

  discardEmail() {
    console.log('i will discard emails')
  }

  sendEmail() {
    console.log('i will send email and save to db')
    //axios post to db
    // let transporter = nodemailer.createTransport(transport[, defaults]);
    // let smtpConfig = {
    //   host: 'smtp.gmail.com',
    //   port: 465,
    //   secure: false, // upgrade later with STARTTLS
    //   auth: {
    //       user: 'username',
    //       pass: 'password'
    //   }
    // };

    // const message = {
    //   from: 'sender@server.com',
    //   to: 'receiver@sender.com',
    //   subject: 'Message title',
    //   text: 'Plaintext version of the message',
    //   html: '<p>HTML version of the message</p>'
    // };
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Recipient:</label>
                <input
                  type="text"
                  className="form-control"
                  id="recipientName"
                  placeholder="Recipient Name"
                  name="recipient"
                  value={this.state.recipient}
                  onChange={this.handleInput}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="text"
                  className="form-control"
                  id="recipientEmail"
                  placeholder="Recipient Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInput}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Topic:</label>
            <input
              type="text"
              className="form-control"
              id="emailTopic"
              placeholder="Topic"
              name="topic"
              value={this.state.topic}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="emailTextArea"
              rows="10"
              maxLength="255"
              placeholder="Type here..."
              name="message"
              value={this.state.message}
              onChange={this.handleInput}
            />
          </div>
          <button
            type="button"
            className="btn btn-email"
            data-toggle="modal"
            data-target="#saveModal"
            onClick={this.saveEmail}
          >
            Save Draft
          </button>
          <div className="modal fade" id="saveModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">SUCCESS!</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                  <p>Email Draft Saved!</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Link to="/job-detail/email" href="/job-detail/email" className="btn btn-email">
            Cancel
          </Link>
          <button
            type="button"
            className="btn btn-email"
            data-toggle="modal"
            data-target="#sentModal"
            onClick={this.sendEmail}
          >
            Send
          </button>
          <div className="modal fade" id="sentModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">SUCCESS!</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                  <p>Email Sent!</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EmailForm;
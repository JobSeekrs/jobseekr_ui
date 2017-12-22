import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import EmailForm from './EmailForm';
import EmailList from './EmailList';
import './email.css';

class Email extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailList:
        [
          { name: 'Niv Salamon', email: 'niv.salamon@test.com', topic: 'Thank You for Interview' },
          { name: 'Jeffrey Ueo', email: 'jeffrey.ueo@test.com', topic: 'Thank You for Interview' },
          { name: 'Richard Oh', email: 'richard.oh@test.com', topic: 'Follow Up to Full Stack Dev Interview' },
          { name: 'Erica Kim', email: 'erica.kim@test.com', topic: 'Follow Up to Full Stack Dev Interview' },
        ],
    }

    this.editEmail = this.editEmail.bind(this);
  }

  editEmail() {
    console.log('i let you edit email message')
    this.setState({
      
    })
  }

  render() {
    return (
      <div className="container">
        <Link to="/job-detail/email/edit" href="/job-detail/email/edit" className="btn btn-email">
          Create Email
        </Link>
        <div className="email-draft">
          <h5>Email Drafts</h5>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col-md">Recipient</th>
                <th scope="col-md">Email</th>
                <th scope="col-md">Topic</th>
                <th scope="col-md">Edit</th>
                <th scope="col-md">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.emailList.map((email, i) => {
                  return (
                    <EmailList
                      key={i}
                      email={email}
                      editEmail={this.editEmail}
                    />
                  );
                })
              }
            </tbody>
          </table>
        </div>
        <div>
          <Switch>
            <Route path="/job-detail/email/edit" render={() => <EmailForm />} />
            {/* <Route path="/job-detail/email" render={() => <Email />} /> */}
          </Switch>
        </div>
      </div>
    );
  }
};

export default Email;

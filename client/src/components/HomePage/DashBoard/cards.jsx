import React from 'react';

const Cards = (props) => {
  return (
    <div className="row">
      <div className="col-md-4">
        {props.dashboardLoad.map((job) => {
          if (job.status === 'Will Apply') {
            return (
              <div>
                <CardsEntry key={job.id} job={job}/>
              </div>
            );
          }
        })}
      </div>
      <div className="col-md-4">
        {props.dashboardLoad.map((job) => {
          if (job.status === 'Applied') {
            return (
              <div>
                <CardsEntry key={job.id} job={job}/>
              </div>
            );
          }
        })}
      </div>
      <div className="col-md-4">
        {props.dashboardLoad.map((job) => {
          if (job.status == 'Follow Up') {
            return (
              <div>
                <CardsEntry key={job.id} job={job}/>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cards;
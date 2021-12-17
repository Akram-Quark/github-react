import React from "react";

function User({ login, avatar, html, repos }) {
  return (
    <div className="col-md-4 mt-3">
      <div className="card text-left   h-15">
        <img className="card-img-top " src={avatar} alt="AVATAR" />
        <div className="card-body">
          <h4 className="card-title "> {login}</h4>
          <p className="card-text">
            <a className="btn btn-warning " href={html}>
              Repositories
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default User;

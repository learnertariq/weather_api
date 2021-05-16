import React from "react";

function Card({ title, body, linkUrl, linkText = "click me", image }) {
  return (
    <div className="card row align-items-center mx-0 mb-4" style={styles.card}>
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-large">{body}</p>
       {linkUrl && <a href={linkUrl} className="btn btn-primary">
          {linkText}
        </a>}
      </div>
    </div>
  );
}

const styles = {
  card: {
    borderRadius: '10px',
    boxShadow: '0 0 3px dodgerblue',
    border: 0,
  },
};

export default Card;

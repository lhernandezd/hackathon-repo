import React from "react";
import "../css/Card.css";

function Card(props) {
  const {
    id,
    photo,
    name,
    city,
    price,
    rating,
    findFavorite,
    favorites,
  } = props;
  const favoriteFilter = favorites.filter(favorite => favorite.id === id);
  return (
    <div id={id} className="card">
      <img className="card__photo" src={photo} alt={name} />
      <div className="card__content">
        <span className="card__content__caption">{city}</span>
        <h2 className="card__content__title">{name}</h2>
        <p className="card__content__subtitle">Desde COP ${price}</p>
        <div className="card__content__footer">
          <div className="content__footer__rating">
            <img alt="rating" src="images/rating.svg" />
            <span className="footer__rating__span">{rating}</span>
          </div>
          {favoriteFilter.length > 0 ? (
            <img
              id="heart"
              alt="heart"
              src="images/heartFull.svg"
              onClick={() => findFavorite(id)}
            />
          ) : (
            <img
              id="heart"
              alt="heart"
              src="images/heart.svg"
              onClick={() => findFavorite(id)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;

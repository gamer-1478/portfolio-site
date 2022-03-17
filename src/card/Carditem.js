import React from 'react';

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>

          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Projects'
              src={props.img_src}
            />
          </figure>
          <div className='cards__item__info'>
            <h1>{props.title}</h1>
            <h5 className='cards__item__text'>{props.text}</h5>
            <h5 className='card__item_redirect' onClick={()=>{openInNewTab(props.link)}}>Check It Out On {props.check_on}!</h5>
          </div>
        </div>
      </li>

    </>
  );
}

export default CardItem;
import React, {Component, PropTypes} from 'react';
import firebase from 'firebase';
import {PlayButton} from '../components';
import {Database} from '../config/firebase';
import {Link} from 'react-router';

import {basename} from '../config/globals';

export default class Detail extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
    console.log(firebase.auth().currentUser);
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails() {
    Database.ref(`panden/${this.props.params.id}`).on('value', snapshot => {
      const details = snapshot.val();
      this.setState({details});
    });
  }

  renderDetails() {
    let indexNav = document.querySelector('.index-nav-identifier');
    if (indexNav){
      indexNav.style.display = 'none';
    }
    if (this.state.details) {
      let {naam, info, djs, imgUrl, status, url, genre} = this.state.details;
      return(
        <div>
          <header className='app-header app-detail-header'>
            <img className='app-logo-nav' src={`${basename}/assets/svg/logo.svg`} alt='Silent Schiedam' />
            <nav className='app-top-nav app-detail-topnav'>
              <Link to='/home'><i className='fa fa-arrow-left' aria-hidden='true'></i></Link>
              <Link to='/profile'><i className='fa fa-user' aria-hidden='true'></i></Link>
            </nav>
            <PlayButton url={url} />
            <div className='app-detail-imgwrap'>
              <img src={`${basename}/assets/img/${imgUrl}`} alt='Devine Takeover' className='app-detail-headerimg' />
            </div>
            <div className='app-detail-title'><aside className='app-tag app-tag-detail'>#{genre}</aside><h1>{naam}<img src={`${basename}/assets/svg/icon-${status}.svg`} alt={status} width='10' /></h1></div>
          </header>
          <nav>
            <ul className='app-navbar detail-navbar'>
              <li className='app-nav-item'><a href='#'><i className='fa fa-home' aria-hidden='true'></i>Over dit pand</a>
              <div className='app-nav-active active detail-nav-active'></div>
              </li>
              <li className='app-nav-item'><a href='pand-verzoek.html'><i className='fa fa-music' aria-hidden='true'></i>Plaats verzoek</a>
              <div className='app-nav-active'></div></li>
            </ul>
          </nav>
          <section className='app-page'>
            <article className='app-page-text'>
              <h2>Wie zit hier?</h2>
              <p>{info}</p>
              <h2>Wie draait de plaatjes?</h2>
              <p>{djs}</p>

            </article>
          </section>
          <section className='app-detail-rate'>
            Rate '{naam}'
            <div className='app-sterren'>
              <i className='fa fa-star-o' aria-hidden='true'></i>
              <i className='fa fa-star-o' aria-hidden='true'></i>
              <i className='fa fa-star-o' aria-hidden='true'></i>
              <i className='fa fa-star-o' aria-hidden='true'></i>
              <i className='fa fa-star-o' aria-hidden='true'></i>
            </div>
          </section>
        </div>
      );
    }
  }

  render() {
    return(
      <section>
        {this.renderDetails()}
      </section>
    );
  }
}

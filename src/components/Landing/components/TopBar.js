import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { debounce, classList } from '../Utils';

import styles from './styles';
import { routes } from '../../../config';

class TopBar2 extends Component {
  state = {
    isTop: true,
    isClosed: true,
  };

  handleScrollRef;

  componentDidMount() {
    if (window) {
      this.handleScrollRef = this.handleScroll();
      window.addEventListener('scroll', this.handleScrollRef);
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('scroll', this.handleScrollRef);
    }
  }

  handleScroll() {
    return debounce(() => {
      if (window) {
	const isTop = window.scrollY < 100;
	if (isTop !== this.state.isTop) {
	  this.setState({ isTop });
	}
      }
    }, 20);
  }

  close = () => {
    this.setState({ isClosed: true });
  };

  render() {
    const toggleIcon = this.state.isClosed ? 'menu' : 'close';
    return (
      <section
	className={classList({
	  header: true,
	  'header-fixed': !this.state.isTop,
	  closed: this.state.isClosed,
	})}
	style={styles.topBarOuterContainer}
      >
	<div className="container header-container" style={styles.topBarInnerContainer} >
	  <div className="brand">
	    <a href="/">
	    <img src="./amanaLogo2.png" alt="" />
	  </a>
	  </div>
	  <ul className="navigation">
	    <li />
	    <li>
	      <div className="headerLinks">
		<a href={routes.SKIN_ASSESSMENT_PAGE}>
		  Get Started
		</a>
	      </div>
	    </li>
	    <li>
	      <div className="headerLinks">
		<a href={routes.SIGN_IN_PAGE}>
		  Sign In
		</a>
	      </div>
	    </li>
	  </ul>
	  <div className="m-auto" />
	  <IconButton
	    className="header__toggle"
	    onClick={() => {
	      this.setState({ isClosed: !this.state.isClosed });
	    }}
	  >
	    <Icon>{toggleIcon}</Icon>
	  </IconButton>
	</div>
      </section>
    );
  }
}

export default TopBar2;

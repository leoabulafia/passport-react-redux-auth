import React from 'react';
import { Link } from 'react-router-dom';
//components
import LandingCards from './LandingCards';
//style components
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Sync from 'material-ui-icons/Sync';

const styles = {
  typo: {
    marginTop: 10,
    marginBottom: 10
  }
};

export default () => {
  return (
    <div className="container">
      <LandingCards />
    </div>
  );
};

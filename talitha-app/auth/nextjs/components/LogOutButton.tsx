import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;

function LogOutButton() {
  return (
    <div><FontAwesomeIcon icon={faRightFromBracket} /></div>
  )
}

export default LogOutButton
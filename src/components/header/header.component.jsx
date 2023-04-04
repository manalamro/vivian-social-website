import React, { useContext, useState } from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import { BellSimpleRinging, EnvelopeSimple, PlusCircle, SignOut } from 'phosphor-react'
import { Link, useSearchParams } from 'react-router-dom';
import avatar from '../../assets/avatar.png'
import { UserContext } from '../providers/UserProvider.component'


const Header = () => {
  const [params, setParam] = useSearchParams();
  const userConsumer = useContext(UserContext);

  const handelSearch = (e) => {
    const newparam = new URLSearchParams(params);
    if (e.target.value) {
      newparam.set('query', e.target.value);
    }
    else {
      newparam.delete('query');
    }
    setParam(newparam);
  }

  return (
    <div className="header">
      <Link to={"/feed"}>
        <img src={logo} alt="logo" height="50px" />
      </Link>
      <div className="actions">
        <input 
          value={params.get('query') || ''}
          onChange={handelSearch}
          className="search"
          type="search"
          name="search"
        />

        <Link className="icon-button" title="Your Notifications"><BellSimpleRinging size={23} color="#4773cd" weight="bold" /></Link>
        <Link to="/chat" className="icon-button" title="Your Chats"><EnvelopeSimple size={23} color="#4773cd" weight="bold" /></Link>
        <Link to="/add" className="icon-button" title="New Post">
          <PlusCircle size={20} color="#4773cd" weight="bold" /></Link>
      </div>

      {/* optional chaining for cheack if the spicific item 
            there render it if not dont render it */}
      {
        userConsumer.user !== null
          ? <div className="avatar">
            <img src={avatar} alt="user avatar" height={40} />
            {userConsumer.user.fullName}
            <button
              className="icon-button"
              onClick={userConsumer.handleLogout}
              title="LogOut">
              <SignOut size={25} color="#4773cd" weight="bold" />
            </button>
            
          </div>
          : <div></div>
      }

    </div>
  )
}

export default Header;
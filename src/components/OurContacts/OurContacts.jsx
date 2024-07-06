import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEmail,
  setEmptyName,
  setEmptyWebsite,
  setEmailDirty,
  setEmptyNameDirty,
  setEmptyWebsiteDirty,
  setEmailError,
  setEmptyNameError,
  setEmptyWebsiteError,
  setFormValid,
} from '../../store/formSlice';
import './OurContacts.scss';
import Tag from '../UI/Tag/Tag';

const OurContacts = () => {
  const dispatch = useDispatch();
  const {
    email,
    emptyName,
    emptyWebsite,
    emailDirty,
    emptyNameDirty,
    emptyWebsiteDirty,
    emailError,
    emptyNameError,
    emptyWebsiteError,
    formValid,
  } = useSelector((state) => state.form);

  useEffect(() => {
    if (emailError || emptyNameError || emptyWebsiteError) {
      dispatch(setFormValid(false));
    } else {
      dispatch(setFormValid(true));
    }
  }, [emailError, emptyNameError, emptyWebsiteError, dispatch]);

  const emailHandler = (e) => {
    dispatch(setEmail(e.target.value));
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      dispatch(setEmailError('Incorrect email!'));
      dispatch(setEmailDirty(true));
    } else {
      dispatch(setEmailError(''));
      dispatch(setEmailDirty(false));
    }
  };

  const emptyNameHandler = (e) => {
    dispatch(setEmptyName(e.target.value));
    if (!e.target.value) {
      dispatch(setEmptyNameError('The field cannot be empty'));
      dispatch(setEmptyNameDirty(true));
    } else {
      dispatch(setEmptyNameError(''));
      dispatch(setEmptyNameDirty(false));
    }
  };

  const emptyWebsiteHandler = (e) => {
    dispatch(setEmptyWebsite(e.target.value));
    if (!e.target.value) {
      dispatch(setEmptyWebsiteError('The field cannot be empty'));
      dispatch(setEmptyWebsiteDirty(true));
    } else {
      dispatch(setEmptyWebsiteError(''));
      dispatch(setEmptyWebsiteDirty(false));
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        dispatch(setEmailDirty(true));
        break;
      case 'name':
        dispatch(setEmptyNameDirty(true));
        break;
      case 'website':
        dispatch(setEmptyWebsiteDirty(true));
        break;
      default:
        break;
    }
  };

  return (
    <section className="our-contacts" id="our-contacts">
      <div className="our-contacts--wrapper">
        <div className="container">
          <div className="our-contacts__inner">
            <div className="our-contacts__left">
              <Tag>our contacts</Tag>
              <h3 className="our-contacts__left--title">
                Let’s Start Working Together. Get in Touch with Us!
              </h3>
              <p className="our-contacts__left--text">
                Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email.
              </p>
              <ul className="our-contacts__left--list">
                <li className="our-contacts__left--item location">
                  <a className="our-contacts__left--link" href="#">
                    41 Pilgrm Avenue, Chevy Chase, Md 20815
                  </a>
                </li>
                <li className="our-contacts__left--item call">
                  <a className="our-contacts__left--link" href="#">
                    +01234 567 890
                  </a>
                </li>
                <li className="our-contacts__left--item email">
                  <a className="our-contacts__left--link" href="#">
                    info@agency.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="our-contacts__right">
              <div className="our-contacts__right--form">
                <form action="#!" id="form" className="form">
                  <label className="form__label" htmlFor="formName">
                    Your Name
                  </label>
                  <input
                    onChange={emptyNameHandler}
                    value={emptyName}
                    onBlur={blurHandler}
                    className={emptyNameDirty && emptyNameError ? 'form__input form__input--error' : 'form__input'}
                    id="formName"
                    type="text"
                    name="name"
                  />

                  <label className="form__label" htmlFor="formEmail">
                    Your Email
                  </label>
                  <input
                    onChange={emailHandler}
                    value={email}
                    onBlur={blurHandler}
                    className={emailDirty && emailError ? 'form__input form__input--error' : 'form__input'}
                    id="formEmail"
                    type="text"
                    name="email"
                  />

                  <label className="form__label" htmlFor="formWebsite">
                    Website
                  </label>
                  <input
                    onChange={emptyWebsiteHandler}
                    value={emptyWebsite}
                    onBlur={blurHandler}
                    className={emptyWebsiteDirty && emptyWebsiteError ? 'form__input form__input--error' : 'form__input'}
                    id="formWebsite"
                    type="text"
                    name="website"
                  />

                  <label className="form__label" htmlFor="formMessage"></label>
                  <textarea className="form__textarea" id="formMessage" name="message" placeholder="Tell About Your Project"></textarea>

                  <button disabled={!formValid} className="form__btn" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurContacts;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { AppDispatch } from '../../store/store';
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
import Tag from '../../components/UI/Tag/Tag';
import styles from '../../styles/our-contacts/index.module.scss';

const SectionOurContacts = () => {
  const dispatch = useDispatch<AppDispatch>();
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
  } = useSelector((state: RootState) => state.form);

  useEffect(() => {
    if (emailError || emptyNameError || emptyWebsiteError) {
      dispatch(setFormValid(false));
    } else {
      dispatch(setFormValid(true));
    }
  }, [emailError, emptyNameError, emptyWebsiteError, dispatch]);

  const emailHandler = (e: { target: { value: any; }; }) => {
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

  const emptyNameHandler = (e: { target: { value: any; }; }) => {
    dispatch(setEmptyName(e.target.value));
    if (!e.target.value) {
      dispatch(setEmptyNameError('The field cannot be empty'));
      dispatch(setEmptyNameDirty(true));
    } else {
      dispatch(setEmptyNameError(''));
      dispatch(setEmptyNameDirty(false));
    }
  };

  const emptyWebsiteHandler = (e: { target: { value: any; }; }) => {
    dispatch(setEmptyWebsite(e.target.value));
    if (!e.target.value) {
      dispatch(setEmptyWebsiteError('The field cannot be empty'));
      dispatch(setEmptyWebsiteDirty(true));
    } else {
      dispatch(setEmptyWebsiteError(''));
      dispatch(setEmptyWebsiteDirty(false));
    }
  };

  const blurHandler = (e: { target: { name: any; }; }) => {
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
    <section className={styles.our_contacts} id="our-contacts">
      <div className={styles.our_contacts__wrapper}>
        <div className="container">
          <div className={styles.our_contacts__inner}>
            <div className={styles.our_contacts__left}>
              <Tag>our contacts</Tag>
              <h3 className={styles.our_contacts__left__title}>
                Let’s Start Working Together. Get in Touch with Us!
              </h3>
              <p className={styles.our_contacts__left__text}>
                Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email.
              </p>
              <ul className={styles.our_contacts__left__list}>
                <li className={`${styles.our_contacts__left__item} ${styles.location}`}>
                  <a className={styles.our_contacts__left__link} href="#">
                    41 Pilgrm Avenue, Chevy Chase, Md 20815
                  </a>
                </li>
                <li className={`${styles.our_contacts__left__item} ${styles.call}`}>
                  <a className={styles.our_contacts__left__link} href="#">
                    +01234 567 890
                  </a>
                </li>
                <li className={`${styles.our_contacts__left__item} ${styles.email}`}>
                  <a className={styles.our_contacts__left__link} href="#">
                    info@agency.com
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.our_contacts__right}>
              <div className={styles.our_contacts__right__form}>
                <form action="#!" id="form" className={styles.form}>
                  <label className={styles.form__label} htmlFor="formName">
                    Your Name
                  </label>
                  <input
                    onChange={emptyNameHandler}
                    value={emptyName}
                    onBlur={blurHandler}
                    className={emptyNameDirty && emptyNameError ? `${styles.form__input} ${styles.form__input__error}` : `${styles.form__input}`}
                    id="formName"
                    type="text"
                    name="name"
                  />

                  <label className={styles.form__label} htmlFor="formEmail">
                    Your Email
                  </label>
                  <input
                    onChange={emailHandler}
                    value={email}
                    onBlur={blurHandler}
                    className={emailDirty && emailError ? `${styles.form__input} ${styles.form__input__error}` : `${styles.form__input}`}
                    id="formEmail"
                    type="text"
                    name="email"
                  />

                  <label className={styles.form__label} htmlFor="formWebsite">
                    Website
                  </label>
                  <input
                    onChange={emptyWebsiteHandler}
                    value={emptyWebsite}
                    onBlur={blurHandler}
                    className={emptyWebsiteDirty && emptyWebsiteError ? `${styles.form__input} ${styles.form__input__error}` : `${styles.form__input}`}
                    id="formWebsite"
                    type="text"
                    name="website"
                  />

                  <label className={styles.form__label} htmlFor="formMessage"></label>
                  <textarea className={styles.form__textarea} id="formMessage" name="message" placeholder="Tell About Your Project"></textarea>

                  <button disabled={!formValid} className={styles.form__btn} type="submit">
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

export default SectionOurContacts;

"use client";
import { useEffect, useState } from "react";
import classNames from "classnames";

import styles from "./CookiePopup.module.scss";

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={classNames(styles.cookiePopup, {
        [styles.visible]: isVisible,
      })}
    >
      <h2>Cookie settings</h2>
      <p>
      This site uses cookies for analytics and personalized content. By accepting, you agree to the use of cookies. You can read more in our{" "}
        <a href="/cookie-policy">Cookie Policy</a>.
      </p>
      <div className={styles.buttons}>
        <button onClick={handleDecline} className={classNames(styles.decline)}>
          Decline
        </button>
        <button onClick={handleAccept} className={classNames(styles.accept)}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;

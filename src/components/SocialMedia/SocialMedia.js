import React from 'react'
import Icon from '../../icons'
import styles from './SocialMedia.module.css'

export default function SocialMedia() {
  return (
    <div className={styles.root}>
      <div className={styles.icons}>
        <div className={`${styles.icon} ${styles.iconFacebook}`}>
          {/* Icon with className */}
          <Icon className={styles.facebook} height='18px' name='IconFacebook' width='18px' />
        </div>
        <div className={`${styles.icon} ${styles.iconLinkedin}`}>
          {/* Icon with className */}
          <Icon className={styles.linkedin} height='18px' name='IconLinkedin' width='18px' />
        </div>
        <div className={`${styles.icon} ${styles.iconTwitter}`}>
          {/* Icon with className */}
          <Icon className={styles.twitter} height='18px' name='IconTwitter' width='18px' />
        </div>
      </div>
      <div className={styles.other}>Or use your email</div>
    </div>
  )
}

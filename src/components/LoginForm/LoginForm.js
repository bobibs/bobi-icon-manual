import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Icon from '../../icons'
import styles from './LoginForm.module.css'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isEmptyUsername, setIsEmptyUsername] = useState(false)
  const [isEmptyPassword, setIsEmptyPassword] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)

  const fillColor = (isTrue) => {
    if (isTrue) return '#DC3535'
    return '#3C4048'
  }

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onClickSubmit = () => {
    if (!username.length) {
      setIsEmptyUsername(true)
    } else {
      setIsEmptyUsername(false)
    }

    if (!password.length) {
      setIsEmptyPassword(true)
    } else {
      setIsEmptyPassword(false)
    }
    
    if (username.length && password.length) {
      setIsEmptyUsername(false)
      setIsEmptyPassword(false)
      setIsSubmit(true)
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.field}>
        <Icon
          fill={fillColor(isEmptyUsername)}
          height='18px'
          name='IconEmail'
          width='18px'
        />
        <input
          className={styles.input}
          onChange={e => onChangeUsername(e)}
          placeholder='Username'
        />
      </div>
      <div className={styles.field}>
        <Icon
          fill={fillColor(isEmptyPassword)}
          height='18px'
          name='IconPassword'
          width='18px'
        />
        <input
          className={styles.input}
          onChange={e => onChangePassword(e)}
          placeholder='Password'
          type='password'
        />
      </div>
      <div className={styles.action}>
        <div className={styles.fieldCheckbox}>
          <input
            className={styles.checkbox}
            type='checkbox'
          />
          <div className={styles.label}>
            Remember Me
          </div>
        </div>
        <div className={styles.labelBold}>
          Forgot Password?
        </div>
      </div>
      <SubmitButton
        isSubmit={isSubmit}
        onClick={onClickSubmit}
      />
    </div>
  )
}

const SubmitButton = (props) => {
  const { isSubmit, onClick } = props

  const content = () => {
    if (isSubmit) {
      return (
        <Icon
          className={styles.loading}
          name='IconCircleNotch'
        />
      )
    }
    return 'Submit'
  }

  return (
    <button
      className={styles.button} 
      onClick={onClick}
    >
      {content()}
    </button>
  )
}

SubmitButton.defaultProps = {
  isSubmit: false,
  onClick: () => {}
}

SubmitButton.propTypes = {
  isSubmit: PropTypes.bool,
  onClick: PropTypes.func
}

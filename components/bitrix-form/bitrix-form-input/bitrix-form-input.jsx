import styles from './bitrix-form-input.module.css';

export default function BitrixFormInput({
  onKeyDownHandler,
  inputRef,
  inputType = 'text',
  isRequired = false,
  inputPlaceholder = '',
  errorMessage = '',
  inputMinLength,
  inputMaxLength,
  inputTitle = '',
  isPopUpState
}) {
  const isCorrect = (errorMessage === '\n\t\t\t\n\t\t') || (errorMessage === '');

  return (
    <label className={styles.label}>
      {isPopUpState && <span className={styles.inputTitle}>{inputTitle}</span>}
      <input
        minLength = {inputMinLength}
        maxLength = {inputMaxLength}
        ref = {inputRef}
        type = {inputType}
        placeholder = {inputPlaceholder}
        required = {isRequired}
        className = {`
        ${styles.input}
        ${isCorrect ? '' : styles.inputError}
        ${!isPopUpState ? '' : styles.inputBorder}
        `}
        onKeyDown={onKeyDownHandler}
      />
      {!isCorrect && <div className={styles.errorMessage}>{errorMessage}</div>}
    </label>
    
  )
}

const EMAIL_REG = [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/];
const EMAIL_ERRORMSG = ['이메일 양식을 맞춰주세요.'];
const PASSWORD_REG = [/.{8,}/, /.*[A-Z].*/, /.*[a-z].*/];
const PASSWORD_ERRORMSG = ['8자리 이상 입력하셔야 햡니다.', '대문자를 포함해서 작성해주세요.', '소문자를 포함해서 작성해주세요.'];

/** 
 * 유효성 검사를 합니다.
 * @param {string} value 검사할 값
 * @param {(email, password, confirm)} fieldName 검사할 타입
 * @param {(string, undefined)} comparison confirm시 비교 할 값
 * @return {object} 검증 결과
*/
function validation(
  value: string,
  fieldName: 'email' | 'password' | 'confirm',
  comparison?: string,) {
  const validationREG = fieldName === 'email' ? EMAIL_REG : PASSWORD_REG;
  const errorMsg = fieldName === 'email' ? EMAIL_ERRORMSG : PASSWORD_ERRORMSG;

  if (fieldName === 'confirm' && value !== comparison) {
    return {
      status: false,
      message: '패스워드와 재확인 패스워드가 동일하지 않습니다.'
    }
  }

  for (let i = 0; i < validationREG.length; i++ ) {
    if (!validationREG[i].test(value)) {
      return {
        status: false,
        message: errorMsg[i]
      }
    }
  }
  return { status: true, message: '' };
}

export function getFormDataAndValidate(
  formData: FormData,
  fieldName: 'email' | 'password' | 'confirm',
  relatedValue?: string) {
  const value = String(formData.get(fieldName));
  const res = validation(value, fieldName, relatedValue)
  
  return { value, result: res.status, message: res.message }
}
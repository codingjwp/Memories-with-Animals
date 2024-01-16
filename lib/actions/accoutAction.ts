'use server'

function validation(content: string, type: 'email' | 'password') {
  const validationMsg = { status: true, message: '' };
  const validationList = type === 'password' 
    ? [/.{8,}/, /.*[A-Z].*/, /.*[a-z].*/] 
    : [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/];
  const errorMsg = type === 'password' 
    ? ['8자리 이상 입력하셔야 햡니다.', '대문자를 포함해서 작성해주세요.', '소문자를 포함해서 작성해주세요.']
    : ['이메일 양식을 맞춰주세요.'];
  
  for(let i = 0; i < validationList.length; i++) {
    if (!validationList[i].test(content)) {
      validationMsg.status = false;
      validationMsg.message = errorMsg[i];
      break ;
    }
  }
  return validationMsg;
}

export async function userSignIn(formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const validationEmail = validation(email, 'email');
    if (!validationEmail.status) {
      throw new Error(validationEmail.message);
    }  
    const password = formData.get('password') as string;
    const validationPassword = validation(password, 'password');
    if (!validationPassword.status) {
      throw new Error(validationPassword.message);
    }
  } catch(error: unknown) {
    return {
      error: {
        statusCode: 401,
        message: (error as Error).message
      }
    }
  }
}
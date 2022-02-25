import {
  v4 as uuidv4
} from 'uuid'
export const getUUID = () => {
  //先看一下本地存储有没有uuid
  let uuid_token = localStorage.getItem('UUIDTOKEN')
  if (!uuid_token) {
    //临时生存游客身份
    uuid_token = uuidv4()
    //本地存储一次
    localStorage.setItem('UUIDTOKEN',uuid_token)
  }
  return uuid_token;
}
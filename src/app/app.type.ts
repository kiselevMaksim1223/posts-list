export type RequestStatusType = 'idle' | 'loading'
export type InitialAppType = {
  // происходит ли сейчас взаимодействие с сервером
  userStatus: RequestStatusType
  postsStatus: RequestStatusType
  commentsStatus: string
  // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
  error: string | null
}

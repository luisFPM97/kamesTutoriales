import { configureStore } from '@reduxjs/toolkit'
import notificationSlice from '../components/notifications/notificationSlice'
import authSlice from '../components/authSlice'


export default configureStore({
  reducer: {
    notification: notificationSlice,
    auth: authSlice,
  },
})

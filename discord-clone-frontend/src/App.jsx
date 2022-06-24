import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import Dashboard from './pages/dashboard/Dashboard';
import AlertNotification from './components/alertNotification/AlertNotification';
import { useDispatch, useSelector } from 'react-redux';
import { setShowAlert } from './store/index';

export default function App() {
  const dispatch = useDispatch();

  const showAlert = useSelector((state) => state.SLICE.showAlert);
  const alertMessage = useSelector((state) => state.SLICE.alertMessageContent);

  const closeAlert = () => {
    dispatch(setShowAlert(false));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <AlertNotification alertMessage={alertMessage} open={showAlert} closeAlert={closeAlert} />
    </>
  );
}

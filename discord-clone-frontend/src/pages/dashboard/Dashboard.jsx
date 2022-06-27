import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Sidebar from '../../components/dashboard/Sidebar';
import AppBar from '../../components/dashboard/AppBar';
import Messenger from '../../components/dashboard/Messenger';
import FriendsSidebar from '../../components/dashboard/FriendsSidebar';
import { logout } from '../../assets/js/validators';
import { setUserDetail } from '../../store';
import { useDispatch } from 'react-redux';
import { connectWithSocketServer } from '../../realTimeCommunication/socketConnection';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userDetail = localStorage.getItem('user');

    if (!userDetail) {
      logout(); // localStorage유저 정보가 없으면 로그아웃
    } else {
      dispatch(setUserDetail(JSON.parse(userDetail))); // userDetail 전역 상태를 localStorage에 저장된 정보로 변경
      connectWithSocketServer(JSON.parse(userDetail)); // 📡소켓 서버에 연결 | 유저 정보를 넘겨준다
    }
  }, []);

  return (
    <Wrapper>
      <Sidebar />
      <FriendsSidebar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
}

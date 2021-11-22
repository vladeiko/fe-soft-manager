import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button } from 'antd';

import { actions } from '../../../store/user';

import { links } from '../../../constants';

import './style.scss';

const AuthHeader = () => {
  const dispatch = useDispatch();

  const userRole = useSelector((store) => store.user.user.role_sys_name);

  const userLinks = useMemo(() => links[userRole], [userRole]);

  const handleLogout = async () => {
    dispatch(actions.logout());
  };

  return (
    <div className="auth-header">
      <h1 className="auth-header__title">Система Учёта ПО (Авторизован)</h1>
      <div className="auth-header__links">
        {userLinks.map(({ path, Icon }) => (
          <Link className="link" key={path} to={path}>
            <Icon className="link__icon" />
          </Link>
        ))}
      </div>
      <Button onClick={handleLogout} type="link">Выйти</Button>
    </div>
  );
};

export default AuthHeader;

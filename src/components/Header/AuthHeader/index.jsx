import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { links } from '../../../constants';

import './style.scss';

const AuthHeader = () => {
  const userRole = useSelector((store) => store.user.user.role_sys_name);

  const userLinks = useMemo(() => links[userRole], [userRole]);

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
    </div>
  );
};

export default AuthHeader;

import React, { useState } from 'react';
import { tokenContext } from './tokenContext';
// const tokenContext = createContext({});

const accessTokenProvider: React.FC = (children: any) => {
	const [accessToken, setAccessToken] = useState();
	return (
		<tokenContext.Provider value={{ accessToken, setAccessToken }}>
			{children}
		</tokenContext.Provider>
	);
};
const refreshTokenProvider: React.FC = (children: any) => {
	const [refreshToken, setRefreshToken] = useState();
	return (
		<tokenContext.Provider value={{ refreshToken, setRefreshToken }}>
			{children}
		</tokenContext.Provider>
	);
};
const isLoggedInProvider: React.FC = (children: any) => {
	const [isLoggedIn, setIsLoggedIn] = useState();
	return (
		<tokenContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</tokenContext.Provider>
	);
};

export { accessTokenProvider, refreshTokenProvider, isLoggedInProvider };

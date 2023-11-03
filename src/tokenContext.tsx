import React from 'react';

interface tokenContextProps {
	accessToken: string;
	refreshToken: string;
	isLoggedIn: boolean;
	setAccessToken: React.Dispatch<React.SetStateAction<string>>;
	setRefreshToken: React.Dispatch<React.SetStateAction<string>>;
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const tokenContext = React.createContext<tokenContextProps | any>(undefined);

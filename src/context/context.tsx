import {
	createContext,
	useContext,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
} from "react";

interface ContextProps {
	tab: string;
	contentType: string;
	adsData: {
		profilePic: string;
		profileName: string;
		thumbnail: string;
		cta: string;
		likes: string;
		message: string;
	};
	setTab: Dispatch<SetStateAction<string>>;
	setContentType: Dispatch<SetStateAction<string>>;
	setAdsData: Dispatch<
		SetStateAction<{
			profilePic: string;
			profileName: string;
			thumbnail: string;
			cta: string;
			likes: string;
			message: string;
		}>
	>;
	// clearInputs: Dispatch<SetStateAction<string>>;
}

const defaultValue: ContextProps = {
	tab: "mobile-app-install",
	contentType: "image",
	adsData: {
		profilePic: "",
		profileName: "Your Page Here",
		thumbnail: "",
		cta: "",
		likes: "",
		message: "",
	},
	setTab: () => {},
	setContentType: () => {},
	setAdsData: () => {},
};

const context = createContext<ContextProps>(defaultValue);

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
	return useContext(context);
};

interface ContextProviderProps {
	children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
	// Destructure values directly from state
	const [tab, setTab] = useState(defaultValue.tab);
	const [contentType, setContentType] = useState(defaultValue.contentType);
	const [adsData, setAdsData] = useState(defaultValue.adsData);

	// Create context value using object destructuring
	const contextValue: ContextProps = {
		tab,
		setTab,
		contentType,
		setContentType,
		adsData,
		setAdsData,
	};

	return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export default ContextProvider;

import {create} from 'zustand';

interface TAdsData {
    adType: string,
    contentType: string,
    profilePic: string;
    profileName: string;
    thumbnail: string;
    cta: string;
    likes: number;
    message: string;
    setAdType: (updatedUrl: string) => void;
    setContentType: (updatedValue: string) => void;
    setProfilePic: (updatedUrl: string) => void;
    setProfileName: (updatedValue: string) => void;
    setThumbnail:  (updatedUrl: string) => void;
    setCta: (updatedValue: string) => void;
    setLikes: (updatedValue: number) => void;
    setMessage: (updatedValue: string) => void;
}

const useAdsData = create<TAdsData>(set => ({
    adType: "mobile-app-install",
    contentType: "",
    profilePic: "",
    profileName: "Your Page Name",
    thumbnail: "",
    cta: "",
    likes: 0,
    message: "",
    setAdType: (updatedValue:string) => set(() => ({adType: updatedValue})),
    setContentType: (updatedValue:string) => set(() => ({contentType: updatedValue})),
    setProfilePic: (updatedUrl:string) => set(() => ({profilePic: updatedUrl})),
    setProfileName: (updatedValue:string) => set(() => ({profileName: updatedValue})),
    setThumbnail: (updatedUrl:string) => set(() => ({thumbnail: updatedUrl})),
    setCta: (updatedValue:string) => set(() => ({cta: updatedValue})),
    setLikes: (updatedValue:number) => set(() => ({likes: updatedValue})),
    setMessage: (updatedValue:string) => set(() => ({message: updatedValue})),
}))

export default useAdsData;
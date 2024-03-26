 

import { useQuery } from "@tanstack/react-query";

import useAxiosApi from "./useAxiosApi";

// import { useAuth } from '@/context/auth/useAuthContext';

 

const useQueryData = (queryKey, path, params = {}, refetch = false) => {

  const axiosPrivate = useAxiosApi();

  // console.log("axios private ", axiosPrivate);

  return useQuery({

    queryKey,

    refetchOnMount: refetch,

    refetchOnWindowFocus: false,

    staleTime: 1000 * 30,

    queryFn: () => axiosPrivate.get(path, { params }).then((res) => res.data),

  });

};

 

//home banner

export const useHomeBanner = () => {

  return useQueryData(["homeBannerData"], "/homebanner");

};

 

// manifesto

export const useManifestoData = () => {

  return useQueryData(["manifestoData"], "/manifesto");

};

 

export const useSingleManifestoData = (id) => {

  return useQueryData(["singleManifestoData"], `/manifesto/${id}`);

};

 

// privacy policy

export const usePrivacyPolicyData = () => {

  return useQueryData(["privacyData"], "/privacypolicy");

};

 

export const useSinglePrivacyData = (id) => {

  return useQueryData(["singlePrivacyData"], `/privacypolicy/${id}`);

};

 

//central committee

export const useCentralComitteeData = () => {

  return useQueryData(["committeeData"], "/centralcommittee");

};

 

export const useSingleComitteeData = (id) => {

  return useQueryData(["singleCommitteeData"], `/centralcommittee/${id}`);

};

//about us banner

export const useAboutBannerData = () => {

  return useQueryData(["bannerData"], "/aboutusbanner");

};

 

export const useSingleAboutBannerData = (id) => {

  return useQueryData(["singleBannerData"], `/aboutusbanner/${id}`);

};

 

//news

export const useNewsData = () => {

  return useQueryData(["newsData"], "/news");

};

 

export const useSingleNewsData = (id) => {

  return useQueryData(["singleNewsData"], `/news/${id}`);

};

 

//home video

export const useHomeVideo = () => {

  return useQueryData(["homeVideo"], "/videobanner");

};

 

//feedback

export const useFeedbackData = () => {

  return useQueryData(["feedbackData"], "/volunteerform");

};

 

export const useSingleFeedbackData = (id) => {

  return useQueryData(["singleFeedbackData"], `/volunteerform/${id}`);

};

 

//social media

export const useSocialMediaData = () => {

  return useQueryData(["SocialMediaData"], "/socialmedia");

};

 

export const useSingleSocialMediaData = (id) => {

  return useQueryData(["singleSocialMediaData"], `/socialmedia/${id}`);

};

//mission-vision

export const useMVData = () => {

  return useQueryData(["MVData"], "/missionandvision");

};

 

export const useSingleMVData = (id) => {

  return useQueryData(["singleMVData"], `/missionandvision/${id}`);

};

 

//about returnee center

export const useAboutData = () => {

  return useQueryData(["aboutData"], "/aboutreturneecenter");

};

 

//executive - members

export const useEMData = () => {

  return useQueryData(["EMData"], "/executivemember");

};

 

export const useSingleEMData = (id) => {

  return useQueryData(["singleEMData"], `/executivemember/${id}`);

};

 

//how-we-different

export const useHWDData = () => {

  return useQueryData(["HWDData"], "/howwedifferent");

};

 

export const useSingleHWDData = (id) => {

  return useQueryData(["singleHWDData"], `/howwedifferent/${id}`);

};

 

//downloadable content

export const useDCData = () => {

  return useQueryData(["DCData"], "/downloadablecontent");

};

 

export const useSingleDCData = (id) => {

  return useQueryData(["singleDCData"], `/downloadablecontent/${id}`);

};

 

// expenditure statement

export const useESData = () => {

  return useQueryData(["ESData"], "/expenditurestatements");

};

 

export const useSingleESData = (id) => {

  return useQueryData(["singleESData"], `/expenditurestatements/${id}`);

};

 

//media Image

export const useMediaImageData = () => {

  return useQueryData(["MIData"], "/mediaimage");

};

 

export const useSingleMediaImageData = (id) => {

  return useQueryData(["singleMIData"], `/mediaimage/${id}`);

};

 

//contact us

export const useContactUsData = () => {

  return useQueryData(["contactUsData"], "/contactus");

};

 

export const useSingleContactUsData = (id) => {

  return useQueryData(["singleContactUsData"], `/contactus/${id}`);

};
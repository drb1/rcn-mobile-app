import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosApi from "./useAxiosApi";


 

const useMutateData = (

  path,

  method = "POST",

  contentType = "application/json"

) => {

  const queryClient = useQueryClient();

  const axiosInstance = useAxiosApi();

 

  return useMutation({

    mutationFn: async (data) => {

      const response = await axiosInstance({

        url: path,

        method,

        data,

        headers: {

          "Content-Type": contentType, // Use multipart/form-data for file uploads

          "Access-Control-Allow-Origin": "*",

        },

      });

 

      // Update the cache with the data from the response

      queryClient.invalidateQueries();

      // console.log("Mutate data", response);

      return response;

    },

  });

};

 

// feedback

export const useCreateFeedbackMutation = () =>

  useMutateData("/volunteerform/create", "POST");

//Members

export const useCreateMemberMutation = () =>

  useMutateData("/membershipform", "POST", "multipart/form-data");
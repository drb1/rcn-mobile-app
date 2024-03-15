import {useQuery} from '@tanstack/react-query';
import useAxiosApi from './useAxiosApi';

const useQueryData = (queryKey, path, params = {}, refetch = false) => {
  const axiosPrivate = useAxiosApi();
  // console.log("axios private ", axiosPrivate);
  return useQuery({
    queryKey,
    refetchOnMount: refetch,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 30,
    queryFn: () => axiosPrivate.get(path, {params}).then(res => res.data),
  });
};


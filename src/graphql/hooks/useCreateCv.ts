import {useMutation} from "@apollo/client";
import {CREATE_CV} from "@/graphql/mutations";
import {CvInput} from "@/graphql/interfaces/CvInput.interface";
import {CV} from "@/graphql/queries";

export const useCreateCv = () => {
  const [loadData, {called, loading, data, error}] = useMutation(CREATE_CV, {
    refetchQueries: [CV],
  });
  const createCv = (cv: CvInput) => {
    loadData({variables: {cv}});
  };

  return {createCv, called, data, loading, error};
};

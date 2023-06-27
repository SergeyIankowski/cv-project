import {useMutation} from "@apollo/client";
import {CREATE_CV} from "../mutations";
import {CvInput} from "../interfaces/CvInput.interface";

export const useCreateCv = () => {
  const [loadData] = useMutation(CREATE_CV);

  const createCv = (cv: CvInput) => {
    loadData({variables: {cv}});
  };

  return {createCv};
};

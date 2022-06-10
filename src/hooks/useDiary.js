import axios from "axios";
import React from "react";
import { BACKEND_API_URL, USER_STORAGE_KEY } from "../helpers/variables";

const useDiary = () => {
  const user = JSON.parse(localStorage.getItem(USER_STORAGE_KEY));

  const createProject = async data => {
    try {
      const response = await axios.post(`${BACKEND_API_URL}/user/diary`, {
        ...data,
        _user: user.user._id,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  const uploadProject = async image => {
    try {
      const fd = new FormData();
      fd.append("image", image, image.name);

      const response = await axios.post(
        `${BACKEND_API_URL}/api/upload/single`,
        fd
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err.response);
    }
  };

  const getPublicDiaries = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_API_URL}/user/diary/publicDiaries`
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err.response);
    }
  };
  const addView = async _diary => {
    try {
      const response = await axios.post(
        `${BACKEND_API_URL}/user/diary/viewDiary`,
        {
          _diary,
        }
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err.response);
    }
  };
  const myDiaries = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_API_URL}/user/diary/myDiaries/${user.user._id}`
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err.response);
    }
  };
  const getSpecificDiary = async (_diary, setLoading) => {
    try {
      const response = await axios.post(
        `${BACKEND_API_URL}/user/diary/getSpecificDiary`,
        {
          _diary,
          _user: user ? user.user._id : "",
        }
      );

      setLoading(false);
      return response.data;
    } catch (err) {
      console.log(err.response);
      setLoading(false);
    }
  };
  const getInRange = async (from, to) => {
    try {
      const response = await axios.post(
        `${BACKEND_API_URL}/user/diary/getInRange`,
        {
          startDate: from,
          endDate: to,
          _user: user.user._id,
        }
      );

      console.log(response.data);

      return response.data;
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };

  return {
    createProject,
    uploadProject,
    getPublicDiaries,
    myDiaries,
    addView,
    getSpecificDiary,
    getInRange,
  };
};

export default useDiary;

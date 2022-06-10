import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import parse from "html-react-parser";
import UserPage from "../../components/Generic/UserPage";
import { BACKEND_API_URL, USER_STORAGE_KEY } from "../../helpers/variables";
import useDiary from "../../hooks/useDiary";

const DiaryOpen = props => {
  const location = useLocation();
  const navigate = useNavigate();
  const [diary, setDiary] = useState();
  const [loading, setLoading] = useState(true);
  const { addView, getSpecificDiary } = useDiary();
  const user = JSON.parse(localStorage.getItem(USER_STORAGE_KEY));

  let _diary = location.pathname.split("/")[2];

  useEffect(() => {
    addDiaryView();
    getDiary();
  }, []);

  const addDiaryView = async () => {
    console.log(_diary);
    await addView(_diary);
  };

  const getDiary = async () => {
    const res = await getSpecificDiary(_diary, setLoading);
    setDiary(res.diary);
  };

  if (loading || !diary) {
    return (
      <UserPage>
        <div className='flexed'>
          <h1>{loading ? "Loading..." : "Access Denied!"}</h1>
        </div>
      </UserPage>
    );
  }

  return (
    <UserPage>
      <div className='diaryOpen'>
        <div className='diaryOpen__diary'>
          <div className='diaryOpen__diary__headings'>
            <h1>{diary.title}</h1>
            <h5>by</h5>
            <h2>{diary._user.name}</h2>
            <hr className='u-margin-top-small' />
          </div>
          <div className='diaryOpen__diary__locationInfo'>
            <h4>{diary.location}</h4>
          </div>
          <div className='diaryOpen__diary__logo'>
            <img
              src={
                diary.logo
                  ? `${BACKEND_API_URL}/${diary.logo}`
                  : require("../../assets/morning.jpg")
              }
              alt=''
            />
          </div>
          <div className='diaryOpen__diary__content'>{parse(diary.diary)}</div>
        </div>
      </div>
    </UserPage>
  );
};

export default DiaryOpen;

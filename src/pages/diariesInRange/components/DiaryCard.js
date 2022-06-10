import React from "react";
import { useNavigate } from "react-router";
import { BACKEND_API_URL } from "../../../helpers/variables";

const DiaryCard = ({ diary }) => {
  const navigate = useNavigate();

  const navigateToMyDiary = () =>
    navigate(`/diaryopen/${diary._id}`, {
      state: { diary },
    });
  return (
    <div
      className='diary__card u-margin-top-small'
      onClick={navigateToMyDiary}
      key={diary._id}
    >
      <div className='diary__card__image'>
        <img
          src={
            diary.logo
              ? `${BACKEND_API_URL}/${diary.logo}`
              : require("../../../assets/morning.jpg")
          }
          alt=''
        />
      </div>
      <div className='diary__card__content'>
        <h3>{diary.title}</h3>
        <h5>by</h5>
        <h4>{diary._user.name}</h4>
      </div>
      <div className='diary__card__views'>
        <h6>{diary.views} views</h6>
      </div>
    </div>
  );
};

export default DiaryCard;

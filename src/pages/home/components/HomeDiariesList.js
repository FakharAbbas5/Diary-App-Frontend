import React from "react";
import DiaryCard from "./DiaryCard";

const HomeDiariesList = ({ diaries }) => {
  console.log(diaries);
  return (
    <div className='diary'>
      {diaries.map(diary => (
        <DiaryCard diary={diary} />
      ))}
    </div>
  );
};

export default HomeDiariesList;

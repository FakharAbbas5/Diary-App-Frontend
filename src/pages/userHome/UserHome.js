import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import ImageSlider from "../../components/Design/ImageSlider";
import DiaryModal from "../../components/Form/DiaryModal";
import UserPage from "../../components/Generic/UserPage";

const UserHome = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const handleModalOpen = () => setOpenModal(true);

  const navigateToPublicDiaries = () => navigate("/");
  const navigateToMyDiaries = () => navigate("/myDiaries");
  const navigateToRange = () => navigate("/diariesInRange");

  return (
    <UserPage>
      <div className='userHome'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
            <ImageSlider style={{ width: "100%", maxHeight: "65vh" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <div className='userHome__sideBar'>
              <div
                className='userHome__sideBar__item'
                onClick={navigateToPublicDiaries}
              >
                Trending Diaries
              </div>
              <div
                className='userHome__sideBar__item'
                onClick={handleModalOpen}
              >
                Create Diary
              </div>
              <div
                className='userHome__sideBar__item'
                onClick={navigateToMyDiaries}
              >
                View Personal Diaries
              </div>
              <div
                className='userHome__sideBar__item'
                onClick={navigateToRange}
              >
                Calendar
              </div>
            </div>
          </Grid>
        </Grid>
        <DiaryModal setOpen={setOpenModal} open={openModal} />
      </div>
    </UserPage>
  );
};

export default UserHome;

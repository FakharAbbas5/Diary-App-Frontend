import React, { useEffect, useState } from "react";
import ImageSlider from "../../components/Design/ImageSlider";
import UserPage from "../../components/Generic/UserPage";

import SearchInput from "../../components/Form/SearchInput";
import HomeDiariesList from "./components/HomeDiariesList";
import useDiary from "../../hooks/useDiary";
import CustomInput from "../../components/Form/CustomInput";
import { Grid } from "@mui/material";

const DiariesInRange = () => {
  const [diaries, setDiaries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [diariesToDisplay, setDiariesToDisplay] = useState([]);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const { myDiaries, getInRange } = useDiary();
  useEffect(() => {
    getDiaries();
  }, []);

  const getDiaries = async () => {
    const res = await myDiaries();
    setDiaries(res.diaries);
    setDiariesToDisplay(res.diaries);
  };

  const changeHandlerDate = e => {
    const { name, value } = e.target;
    if (name === "from") return setFrom(value);
    else return setTo(value);
  };

  const fetchData = async () => {
    const res = await getInRange(from, to);
    console.log(res.diaries);
    setDiaries([...res.diaries]);
    setDiariesToDisplay([...res.diaries]);
  };

  return (
    <UserPage>
      <div className='home'>
        <div className='home__content'>
          <div className='flexed-heading u-margin-top-medium'>
            <h1>My Diaries</h1>
          </div>
          <div className='home__content__dateRanges'>
            <Grid
              container
              sx={{ width: "60%", display: "flex", justifyContent: "center" }}
            >
              <Grid item xs={3}>
                <CustomInput
                  type='date'
                  placeholder='From'
                  onChange={changeHandlerDate}
                  name='from'
                />
              </Grid>
              <Grid item xs={3} sx={{ ml: "1rem" }}>
                <CustomInput
                  type='date'
                  placeholder='To'
                  onChange={changeHandlerDate}
                  name='to'
                />
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  ml: "1rem",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <button onClick={fetchData}>Get</button>
              </Grid>
            </Grid>
          </div>
          <div className='home__content__diaries u-margin-top-small'>
            <HomeDiariesList diaries={diariesToDisplay} />
          </div>
        </div>
      </div>
    </UserPage>
  );
};

export default DiariesInRange;

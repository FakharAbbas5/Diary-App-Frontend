import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CustomInput from "./CustomInput";
import { FormControlLabel, FormGroup, Grid, Switch } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import useDiary from "../../hooks/useDiary";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  outline: "none",
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "flex",
  flexFlow: "column",
};

const DiaryModal = ({ setOpen, open }) => {
  const editorRef = useRef(null);
  const [logo, setLogo] = useState();
  const [diary, setDiary] = useState({
    title: "",
    location: "",
    date: "",
    diary: null,
    isPrivate: false,
  });

  const { uploadProject, createProject } = useDiary();

  const handleClose = () => setOpen(false);

  const changeHandler = e => {
    const { name, value, files } = e.target;

    if (name === "isPrivate") {
      return setDiary({ ...diary, [name]: value === true ? false : true });
    } else if (name === "logo") {
      files && files[0] && setLogo(files[0]);
    }
    setDiary({ ...diary, [name]: value });
  };

  const submitHandler = async () => {
    diary.diary = editorRef.current && editorRef.current.getContent();
    console.log(diary);
    if (!logo) return alert("Please fill the form correctly!");
    for (const prop in diary) {
      if (!diary[prop] && prop !== "isPrivate")
        return alert("Please fill the form correctly!");
    }

    const { file } = await uploadProject(logo);

    diary.logo = file;
    await createProject(diary);
    alert("Diary saved!");
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} className='modal'>
          <div className='modal__title'>
            <h2>Add Diary </h2>
          </div>
          <div className='modal__content'>
            <Grid container>
              <Grid xs={12}>
                <CustomInput
                  type='text'
                  name='title'
                  onChange={changeHandler}
                  placeholder='Title'
                />
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='space-between'>
              <Grid xs={7.5}>
                <CustomInput
                  type='text'
                  name='location'
                  onChange={changeHandler}
                  placeholder='Location'
                />
              </Grid>
              <Grid xs={4}>
                <CustomInput
                  type='date'
                  name='date'
                  onChange={changeHandler}
                  placeholder='Date'
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={12} sx={{ mt: 2 }}>
                <div className='customInput'>
                  <h2 style={{ marginBottom: "1rem" }}>Diary</h2>
                  <Editor
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue=''
                    init={{
                      height: 150,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "preview",
                        "help",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={12} sx={{ mt: 2 }}>
                <CustomInput
                  type='file'
                  name='logo'
                  onChange={changeHandler}
                  placeholder='Image'
                  inputStyle={{ height: "6rem" }}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid sx={{ mt: 2 }}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={changeHandler}
                        name='isPrivate'
                        value={false}
                      />
                    }
                    label='Make Private'
                  />
                </FormGroup>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                sm={12}
                sx={{ display: "flex", justifyContent: "center", mt: 2 }}
              >
                <button onClick={submitHandler} className='smallBtn'>
                  Save
                </button>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DiaryModal;

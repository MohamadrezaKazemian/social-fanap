import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import FakeRoute from "./components/FakeRoute";
import {
  Delete,
  Edit,
  Facebook,
  Instagram,
  LinkedIn,
  Telegram,
  Twitter,
  Website,
} from "./assets/icons";
import theme from "./theme";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import "./App.css";
import FormCard from "./components/FormCard";
import { Controller, useForm } from "react-hook-form";

const listedSocials = [
  {
    type: "تویتر",
    link: "www.google.com",
    id: "mohkeys",
  },
];

const App = () => {
  const {
    control,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const verifyText = watch("verify");

  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<string>("");

  const handleShowDeleteModal = (id: string) => {
    setSelectedRow(id);
    setShowDeleteModal(true);
  };

  const [socialMedias, setSocialMedias] = useState({
    type: "",
    link: "",
    id: "",
  });

  return (
    <>
      <Box display={`flex`} flexDirection={`column`} marginTop={10}>
        <FakeRoute />
        <Paper elevation={1} sx={{ marginTop: 4, borderRadius: 3 }}>
          <Box padding={2}>
            <Typography
              variant="subtitle1"
              color={theme.palette.secondary.dark}
              marginBottom={2}
            >
              مسیرهای ارتباطی
            </Typography>
            <FormCard
              socialMedias={socialMedias}
              setSocialMedias={setSocialMedias}
            />
            <Box display={`flex`} flexDirection={`column`} gap={1.5}>
              {listedSocials.map((item, index) => {
                return (
                  <Card elevation={10} key={index}>
                    <Grid container>
                      <Grid item lg={8}>
                        <CardContent>
                          <Grid container>
                            <Grid item xs={12} lg={4} alignSelf={`center`}>
                              <Box display={`flex`} gap={1.2}>
                                <Typography>
                                  <Twitter sx={{ display: `flex` }} />
                                </Typography>
                                <Typography> {item.type}</Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12} lg={4} alignSelf={`center`}>
                              <Box display={`flex`}>
                                <Typography variant="subtitle1">
                                  آی دی(ID) :
                                </Typography>
                                <Typography> {item.id}</Typography>
                              </Box>
                            </Grid>

                            <Grid item xs={12} lg={4} alignSelf={`center`}>
                              <Box display={`flex`}>
                                <Typography variant="subtitle1">
                                  لینک :{" "}
                                </Typography>
                                <Typography color={"primary"}>
                                  {item.link}
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Grid>
                      <Grid item lg={4} alignSelf={`center`}>
                        <CardActions dir="ltr" sx={{ display: `flex` }}>
                          <Button
                            onClick={() => handleShowDeleteModal(item.id)}
                            variant="text"
                            color="error"
                            endIcon={<Delete />}
                            sx={{ display: `flex`, gap: 1 }}
                          >
                            حذف
                          </Button>
                          <Button
                            variant="text"
                            endIcon={<Edit />}
                            sx={{ display: `flex`, gap: 1 }}
                          >
                            ویرایش
                          </Button>
                        </CardActions>
                      </Grid>
                    </Grid>
                  </Card>
                );
              })}
            </Box>
          </Box>
        </Paper>
      </Box>

      <Modal open={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "#2A3545",
            boxShadow: 10,
            p: 3,
            borderRadius: "10px",
          }}
        >
          <Box display={`flex`} flexDirection={`column`} gap={2}>
            <Typography variant="h1">آیا از تصمیم خود مطمئن هستید؟</Typography>
            <Typography variant="subtitle2">
              برای حذف مسیر ارتباطی {selectedRow} لطفا تایید را بنویسید
            </Typography>
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
              })}
            >
              <Controller
                name={"verify"}
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    size="small"
                    onChange={onChange}
                    value={value}
                    fullWidth
                    label={"تایید"}
                    variant="outlined"
                  />
                )}
              />
              <Box display={`flex`} justifyContent={`flex-end`} marginTop={2}>
                <Button
                  type="reset"
                  onClick={() => {
                    setShowDeleteModal(false);
                    reset();
                  }}
                >
                  انصراف
                </Button>
                <Button
                  color="error"
                  type="submit"
                  disabled={verifyText !== "تایید"}
                >
                  حذف
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default App;

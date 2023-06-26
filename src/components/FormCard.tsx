import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  Add,
  ArrowDown,
  Facebook,
  Instagram,
  LinkedIn,
  Telegram,
  Twitter,
  Website,
} from "../assets/icons";
import theme from "../theme";
import { useState } from "react";

const socialMedia = [
  {
    name: "اینستاگرام",
    icon: <Instagram />,
  },
  {
    name: "فیسبوک",
    icon: <Facebook />,
  },
  {
    name: "تلگرام",
    icon: <Telegram />,
  },
  {
    name: "تویتر",
    icon: <Twitter />,
  },
  {
    name: "لینکداین",
    icon: <LinkedIn />,
  },
  {
    name: "وبسایت",
    icon: <Website />,
  },
];

const FormCard = ({ socialMedias, setSocialMedias }: any) => {
  console.log("setSocialMedias", setSocialMedias);
  console.log("socialMedias", socialMedias);

  const [expanded, setExpanded] = useState<boolean>(false);

  const handleEditRow = (index: number) => {
    console.log(index);
  };
  //handlers
  const handleChangePanel = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Typography
        color={theme.palette.primary.main}
        width={`max-content`}
        variant="subtitle1"
        display={`flex`}
        gap={0.5}
        margin={"10px 0 20px 0"}
        sx={{ cursor: `pointer` }}
        onClick={handleChangePanel}
      >
        <Add />
        افزودن مسیر ارتباطی
      </Typography>
      <Accordion expanded={expanded}>
        <AccordionSummary sx={{ display: `none` }} />
        <Card elevation={10} sx={{ padding: 1 }}>
          <CardContent>
            <Typography fontWeight={`bold`} variant="h2">
              افزودن مسیر ارتباطی
            </Typography>

            <AccordionDetails>
              <Grid
                container
                justifyContent="space-evenly"
                spacing={2}
                marginTop={1.5}
              >
                <Grid item xs={12} lg={4}>
                  <FormControl fullWidth required>
                    <InputLabel id="demo-simple-select-label">نوع</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={socialMedias.type}
                      label="نوع"
                      IconComponent={ArrowDown}
                      sx={{
                        borderRadius: `10px`,
                        minHeight: "min-content",
                      }}
                      onChange={(e) =>
                        setSocialMedias({
                          ...socialMedias,
                          type: String(e.target.value),
                        })
                      }
                    >
                      {socialMedia.map((item, index) => {
                        return (
                          <MenuItem value={item.name} key={index}>
                            <Box sx={{ display: `flex` }}>
                              <ListItemIcon
                                sx={{
                                  minWidth: `max-content`,
                                  paddingRight: 1,
                                }}
                              >
                                {item.icon}
                              </ListItemIcon>
                              <ListItemText primary={item.name} />
                            </Box>
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <TextField
                    fullWidth
                    size="medium"
                    label="لینک"
                    variant="outlined"
                    onChange={(e) =>
                      setSocialMedias({
                        ...socialMedias,
                        link: String(e.target.value),
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <TextField
                    size="medium"
                    fullWidth
                    label="آی دی (ID)"
                    variant="outlined"
                    onChange={(e) =>
                      setSocialMedias({
                        ...socialMedias,
                        id: String(e.target.value),
                      })
                    }
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </CardContent>
          <CardActions dir="ltr" sx={{ display: `flex`, gap: 2 }}>
            <Button size="small" variant="contained">
              ثبت مسیر ارتباطی
            </Button>
            <Button size="small" variant="outlined" color="secondary">
              انصراف
            </Button>
          </CardActions>
        </Card>
      </Accordion>
    </>
  );
};
export default FormCard;

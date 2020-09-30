import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import TouchAppIcon from '@material-ui/icons/TouchApp';

const entrySteps = [
  {
    label: 'IDLE',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Door opening',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Drive in',
    icon: <ArrowUpwardIcon fontSize="inherit" />,
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Door closing',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Enter PIN',
    icon: <TouchAppIcon fontSize="inherit" />,
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Area check',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: 50,
    // paddingLeft: theme.spacing(4),
    // backgroundColor: theme.palette.background.default,
    // textAlign: 'center'
    width: '100%'
  },
  banner: {
    textTransform: 'uppercase',
    fontWeight: 500
  }

}));

export default function TextMobileStepper({ activeStep }) {
  const classes = useStyles();
  const theme = useTheme();

  // const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = entrySteps.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Box display="flex" flexDirection="row" justifyContent="flex-end" alignItems="center">
          <Box bgcolor="grey.300">
            <Typography variant="h3" color="primary" className={classes.banner}>
              {entrySteps[activeStep].icon !== undefined && entrySteps[activeStep].icon}
            </Typography>
          </Box>
          <Box bgolor="grey.400" flexGrow="1">
            <Typography variant="h4" color="primary" className={classes.banner}>
              {entrySteps[activeStep].label}  
            </Typography>
          </Box>
        </Box>
        {/* <Typography variant="h3" color="primary" className={classes.banner}>
          {entrySteps[activeStep].icon !== undefined && entrySteps[activeStep].icon}{' '}
          {entrySteps[activeStep].label}
        </Typography> */}
      </Paper>
      {/* <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      /> */}
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        // nextButton={
        //   <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
        //     Next
        //     {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        //   </Button>
        // }
        // backButton={
        //   <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
        //     {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        //     Back
        //   </Button>
        // }
      /> */}
    </div>
  );
}
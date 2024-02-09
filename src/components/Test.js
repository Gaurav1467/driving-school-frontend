import React, {useState} from 'react'
import {Paper, Radio, RadioGroup, Step, StepContent, StepLabel, Stepper} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";

function startTest() {

}

const questionsBank = [
    {
        label: 'What is the correct hand position on the steering wheel?',
        options: ["12 o'clock position", "6 and 12 o'clock positions", "10 and 2 o'clock positions", "9 and 3 o'clock positions"]
    },
    {
        label: 'What should you do if you miss your exit on a highway?',
        options: ['Stop and reverse on the shoulder', 'Make a U-turn across the median', 'Stop in the lane and signal for help', 'Continue to the next exit']
    },
    {
        label: 'What should you do if you encounter a pedestrian crossing the road?',
        options: ['Continue driving without stopping', 'Honk your horn to warn the pedestrian', 'Speed up to pass the pedestrian quickly', 'Stop and yield the right-of-way']
    },
    {
        label: 'What does a yellow diamond-shaped sign with black symbols indicate?',
        options: ['Stop sign', 'Speed limit sign', 'No parking sign', 'Warning sign']
    },
    {
        label: 'What is the purpose of a blind spot?',
        options: ['Area where vehicles are always visible', 'Area where pedestrians are always visible', 'Area where road signs are located', 'Area not visible in mirrors, requiring a shoulder check before changing lanes']
    },
    {
        label: 'What is the proper procedure for parallel parking?',
        options: ['Park facing uphill with the wheels turned towards the curb', 'Park at a 45-degree angle to the curb', 'Position your vehicle parallel to the curb and pull forward into the space', 'Park facing downhill with the wheels turned away from the curb']
    },
    {
        label: 'What is the purpose of a traffic circle?',
        options: ['To allow pedestrians to cross safely', 'To provide parking spaces', 'To regulate speed limits', 'To control traffic flow at intersections']
    },
    {
        label: 'What is the correct hand position on the steering wheel?',
        options: ["12 o'clock position", "6 and 12 o'clock positions", "10 and 2 o'clock positions", "9 and 3 o'clock positions"]
    },
    {
        label: 'What should you do if you encounter a bicyclist on the road?',
        options: ['Drive close to the cyclist to pass quickly', 'Honk your horn to alert the cyclist', 'Follow closely behind the cyclist', 'Leave a safe distance when passing']
    },
    {
        label: 'What is the proper way to approach a roundabout?',
        options: ['Speed up to merge into traffic', 'Honk your horn to alert other drivers', 'Come to a complete stop before entering', 'Yield to traffic inside the roundabout and enter when safe']
    }
]


function Test() {
  return (
    <>
        <Paper elevation={3} sx={{
            width: "100%",
            height : "80px",
        }}
           onClick={startTest}
        >
            <div>Start a test</div>
        </Paper>

        <QuestionWrapper questions={questionsBank}/>
    </>
  )
}
function QuestionWrapper({questions}) {
    const [activeStep, setActiveStep] = useState(0);
    const [questionIdAnswerMap, setQuestionIdAnswerMap] = useState(questions.map((ques, index) => {
        let val ={}
        val.id = ques.id
        val.label = ques.label
        val.id = index
        val.options = ques.options
        val.selectedOption = null
        return val
    }));
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if(activeStep === 10) {

        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleOptionChange = (event, questionId) => {
        const updatedItems = questionIdAnswerMap.map(item => {
            if (item.id === questionId) {
                return { ...item, selectedOption: event.target.value };
            }
            return item;
        });
        setQuestionIdAnswerMap(updatedItems);

    };

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {questionIdAnswerMap.map((question, index) => (
                    <Step key={index}>
                        <StepLabel>{question.label}</StepLabel>
                        <StepContent>
                            <RadioGroup value={question.selectedOption} onChange={(event) => handleOptionChange(event, question.id)}>
                                {question.options.map((option, optionIndex) => (
                                    <FormControlLabel key={optionIndex} value={option} control={<Radio />} label={option} />
                                ))}
                            </RadioGroup>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                >
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    style={{ marginLeft: '8px' }}
                                >
                                    {activeStep === questions.length - 1 ? 'Submit' : 'Next'}
                                </Button>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}

export default Test
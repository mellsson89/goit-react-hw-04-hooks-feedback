import React,{useState} from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification";

export default function App() {

    const [good,setGood]=useState(0);
    const [neutral,setNeutral]=useState(0);
    const [bad,setBad]=useState(0);

    const objState={good,neutral,bad};
    const options=Object.keys(objState);

   const updateState = (value) => {
       switch (value) {
           case 'good' :
               setGood(prevGood => prevGood + 1);
               return;
           case 'neutral' :
               setNeutral(prevNeutral => prevNeutral + 1);
               return;
           case 'bad' :
               setBad(prevBad => prevBad + 1);
               return;
           default:return;
       }

    }

   const countTotalFeedback = () => {
        const valueState=Object.values(objState);
        return valueState.reduce((accum,value) => accum + value,0);

    }

   const  countPositiveFeedbackPercentage = () => {
        return good > 0 ? ((good / countTotalFeedback()) * 100).toFixed() + '%' : 0;
    }


        return (
            <>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions options={options} onLeaveFeedback={updateState}/>
                </Section>
                <Section title={'Statistical'}>
    {good || neutral || bad > 0 ?
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}/> : <Notification message={'No feedback given'}/>}
                </Section>

            </>
        )
    }



import Banner from '../../components/Banner/Banner'
import SliderS from '../../components/Sliders/Sliders'
import Accordion from '../../components/Accordion/Accrodion'

export default function Start (){


    return(
        <>
        <Banner />
        <SliderS />
        <Accordion title="Вопрос 1" content="Ответы на вопрос 1"/>
        <Accordion title="Вопрос 2" content="Ответы на вопрос 2"/>
        <Accordion title="Вопрос 3" content="Ответы на вопрос 3"/>
        <br />    <br /> 
        <br />    <br /> 
        </>

    ) 
}
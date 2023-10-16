import Accordion from 'react-bootstrap/Accordion';
import data from './data';
import './ShowQuestion.css'

function BasicExample() {
  return (
    <Accordion alwaysOpen className='container'>
        <h2 className='main'>Questions</h2>
     {data ? data.map((result,index)=>(
         <Accordion.Item className='list' eventKey={index+1}>
         <Accordion.Header className='item'>{index+1}:{result.question}</Accordion.Header>
         <Accordion.Body className='dis'>
          {result.answer}
         </Accordion.Body>
       </Accordion.Item>
     )):null}
    </Accordion>
  );
}

export default BasicExample;
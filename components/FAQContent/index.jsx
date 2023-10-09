'use client'

import { Accordion } from "react-bootstrap"
import { DUMMY_FAQ_DATA } from "./dummy"

const containerStyle = {
  margin: '3rem 0'
}

const FAQContent = () => {
  return (
    <div style={containerStyle}>
      <Accordion defaultActiveKey={['0']} alwaysOpen flush>
        {
          DUMMY_FAQ_DATA.map(item => (
            <Accordion.Item key={item.id} eventKey={item.id}>
              <Accordion.Header>
                <span className="text-primary">{item.question}</span>
              </Accordion.Header>
              <Accordion.Body>
                {item.answer}
                {item?.subAnswer && (
                  <ul>
                  {
                    item?.subAnswer.map(el => (
                      <li key={el.id}>{el.text}</li>
                    ))
                  }
                </ul>
                )}
              </Accordion.Body>
            </Accordion.Item>
          ))
        }
      </Accordion>
    </div>
  )
}

export default FAQContent
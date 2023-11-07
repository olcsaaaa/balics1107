import {Row} from "react-bootstrap";
import Form from "@/components/Form";

export default function Home() {
    return (
        <Row>
            <Form inputs={[
                {
                    id: "a",
                    label: "first input",
                    type: 'text'
                }, {
                    id: "b",
                    label: 'second input',
                    type: 'number'
                }
            ]}/>
        </Row>
    )
}

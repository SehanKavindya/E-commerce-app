
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';     //search icons bootrstap
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";



const SearchBar = () => {
    return ( 
        <Form className="d-flex flex-grow mx-3">
            <InputGroup>
                <FormControl
                    type="search"
                    placeholder="Search Products"
                />
                <Button variant="outline-primary">
                    <i className="bi bi-search"></i>
                </Button>
            </InputGroup>
        </Form>
    ); 
};

export default SearchBar;


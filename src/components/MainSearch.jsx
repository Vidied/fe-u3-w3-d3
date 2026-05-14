import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router";
import { jobAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.results);
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const isError = useSelector((state) => state.jobs.isError);

  // const baseEndpoint =
  //   "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(jobAction(query));
    // try {
    //   const response = await fetch(baseEndpoint + query + "&limit=20");
    //   if (response.ok) {
    //     const { data } = await response.json();
    //     setJobs(data);
    //   } else {
    //     alert("Error fetching results");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit} className="d-flex gap-3">
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />{" "}
            <Link to="/favourites" className="btn btn-primary">
              Preferiti
            </Link>
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          )}
          {isError && (
            <Alert variant="danger">
              Si è verificato un errore nel recupero dei lavori.
            </Alert>
          )}
          {!isLoading &&
            !isError &&
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;

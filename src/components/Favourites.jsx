import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col xs={10}>
          <Link to={"/"} className="mx-auto my-3">
            {" "}
            <h1 className="display-1">Remote Jobs Search</h1>
          </Link>
        </Col>
        <Col className="my-3">
          <ListGroup>
            {favourites.map((fav, i) => (
              <ListGroup.Item
                key={i}
                className="d-flex justify-content-between align-items-center"
              >
                <Link to={`/${fav}`}>{fav}</Link>
                <i
                  className="text-danger fas fa-trash"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: fav })
                  }
                ></i>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;

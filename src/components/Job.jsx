import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const favourites = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();
  const isFav = favourites.includes(data.company_name);

  const toggle = () => {
    isFav
      ? dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: data.company_name })
      : dispatch({ type: "ADD_TO_FAVOURITES", payload: data.company_name });
  };
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <span onClick={toggle} className="me-2" style={{ cursor: "pointer" }}>
          {isFav ? (
            <i
              style={{ color: "yellow", height: "20px" }}
              className="fas fa-star"
            ></i>
          ) : (
            <i
              style={{ color: "yellow", height: "20px" }}
              className="far fa-star"
            ></i>
          )}
        </span>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;

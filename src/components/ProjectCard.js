import { Card } from "react-bootstrap";
import Link from "next/link";

const ProjectCard = ({ ProjectData }) => {
 

  return (
    <div className="row project_box">
    {ProjectData.map((data, i) => {
      return (
        <Card key={i} className="col-lg-4 col-6 my-3 ">
          <div className="card-container w-100 h-100 position-relative  ">
          
          <Card.Img src={data.img} alt="project images card-front position-absolute top-0 "/>
          <Card.Body className="card-back position-absolute top-0 ">
            <Card.Title className="text-bold">{data.title}</Card.Title>
            <Card.Title className="text-bold">Tech stack used</Card.Title>

            <Card.Text className="d-flex flex-wrap">
              {data.tech.map((d, index) => {
                return (
                  <small key={index} className="p_technolgies">
                    {d}
                  </small>
                );
              })}
            </Card.Text>
            {data.link ? (
            <><Card.Title className="text-bold">Live link</Card.Title><div className="menu-items">
                  <Link
                    className=" text-decoration-none p_technolgies  "
                    href={data.link}
                    target="blank"
                  >
                    {data.link}
                  </Link>{" "}
                </div></>
            ) : null}
          </Card.Body>
          </div>
        </Card>
      );
    })}
  </div>
  );
};

export default ProjectCard;

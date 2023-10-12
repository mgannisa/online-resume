import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Image, Card, Form, Button, Stack } from "react-bootstrap";
import { uid } from "uid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Element, scroller } from "react-scroll";

function Comments() {
  const [comments, setComments] = useState([
    {
      commentId: 0,
      name: "Andre",
      comment: `Mega is an exceptional Front-End. Her attention to detail and commitment to delivering top-notch user experiences is truly remarkable. She consistently transformed our design concepts into visually stunning and highly functional websites.`,
      isEnableEdit: false
    },
    {
      commentId: 1,
      name: "Nada",
      comment: `Working with Mega has been a game-changer for our web projects. Mega's dedication to producing clean code and her ability to solve complex design challenges make her an invaluable asset to any development team.`,
      isEnableEdit: false
    }
  ]);

  const [formData, setFormData] = useState({
    name: "",
    comments: "",
    isEnableEdit: false
  });
  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.comment) {
      return;
    }

    const updatedComments = isUpdate.status
      ? comments.map((comment) =>
          comment.commentId === isUpdate.id
            ? {
                ...comment,
                name: formData.name,
                comment: formData.comment,
                isEnableEdit: true
              }
            : comment
        )
      : [
          ...comments,
          {
            commentId: uid(),
            name: formData.name,
            comment: formData.comment,
            isEnableEdit: true
          }
        ];

    setComments(updatedComments);
    setIsUpdate({ id: null, status: false });
    setFormData({ name: "", comment: "", isEnableEdit: true });
  };

  const handleEdit = (id) => {
    scrollToTop();
    const foundData = comments.find((comment) => comment.commentId === id);
    setFormData({
      name: foundData.name,
      comment: foundData.comment,
      isEnableEdit: true
    });
    setIsUpdate({ id, status: true });
  };

  const handleDelete = (id) => {
    const filteredData = comments.filter((comment) => comment.commentId !== id);
    setComments(filteredData);
    setFormData({ name: "", comment: "", isEnableEdit: true });
  };

  const scrollToTop = () => {
    scroller.scrollTo("topElement", {
      duration: 300,
      delay: 0
    });
  };

  return (
    <Element name="topElement">
      <Container className="pt-5">
        <h5 className="text-bold">Add Comment</h5>
        <Card
          className="mt-3"
          style={{
            border: 0,
            borderRadius: 25,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          }}
        >
          <Card.Body className="p-0">
            <Form onSubmit={handleSubmit} className="p-4">
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength="50"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="comment">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  style={{ height: 100 }}
                  placeholder="Add your comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  maxLength="300"
                />
              </Form.Group>
              <Form.Group controlId="submit">
                <Button
                  type="submit"
                  variant="light"
                  className="text-bold"
                  style={{
                    backgroundColor: "#d2afff",
                    borderColor: "#d2afff",
                    borderRadius: 50
                  }}
                >
                  Send Comment
                </Button>
              </Form.Group>
            </Form>
            <h6
              className="p-4 text-bold"
              style={{ borderTop: "1px solid #dee2e6" }}
            >
              Comments
            </h6>
            {comments.map((comment, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: index % 2 === 1 && "#E6D7FF",
                  borderBottomLeftRadius: index === comments.length - 1 && 25,
                  borderBottomRightRadius: index === comments.length - 1 && 25
                }}
                className="px-4 py-3"
              >
                <Stack direction="horizontal" gap={3}>
                  <Image
                    src="https://i.ibb.co/JmqJgry/9-E07-EA27-3-AAA-49-D2-8-BE3-EFB5-EF9-D61-DE.png"
                    rounded
                    width={54}
                    style={{
                      alignSelf: "flex-start",
                      backgroundColor: index % 2 === 1 ? "#FFFFFF" : "#E6D7FF"
                    }}
                  />
                  <Stack>
                    <h6 className="text-bold">{comment.name}</h6>
                    <p className="text-secondary">{comment.comment}</p>
                  </Stack>
                </Stack>
                {comment.isEnableEdit && (
                  <Stack direction="horizontal" gap={1}>
                    <Link
                      onClick={() => handleEdit(comment.commentId)}
                      className="px-1 ms-auto"
                      style={{ color: "#d2afff" }}
                    >
                      <small>
                        <FontAwesomeIcon icon={faEdit} className="mx-1" />
                        Edit
                      </small>
                    </Link>
                    <Link
                      onClick={() => handleDelete(comment.commentId)}
                      style={{ color: "#d2afff" }}
                    >
                      <small>
                        <FontAwesomeIcon icon={faTrash} className="mx-1" />
                        Delete
                      </small>
                    </Link>
                  </Stack>
                )}
              </div>
            ))}
          </Card.Body>
        </Card>
      </Container>
    </Element>
  );
}

export default Comments;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import OrderList from "../Components/OrderList.jsx";
import OrderCard from "../Components/OrderCard.jsx"; // Assuming this is the correct import path

function MyAccount() {
  const [user, setUser] = useState(null);
  const [userOrders, setUserOrders] = useState([]);

  // Fetch user profile and order history on component mount
  useEffect(() => {
    const getUser = localStorage.getItem("user");
    if (getUser) {
      setUser(JSON.parse(getUser)); // Parse and set the user object
    }
    getUserHistory(); // Fetch user orders from the server
    console.log(userOrders);
  }, []);

  const getUserHistory = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem("user"))._id; // Assuming userId is stored in the 'user' object in localStorage
      console.log(userId);
      const response = await axios.get("http://localhost:3000/orders/user", { userId: userId });
      setUserOrders(response.data); // Set user orders
    } catch (error) {
      console.error("Error fetching user orders:", error);
    }
  };

  // Show loading message if user data is not available yet
  if (!user) {
    return (
      <Container className="text-center mt-5">
        <h2>Loading user profile...</h2>
      </Container>
    );
  }

  return (
    <Container className="d-flex flex-column align-items-start mt-5">
      {/* User Profile Card */}
      <Card style={{ width: "100%", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <Card.Body className="text-left">
          <Row>
            <Col xs={12} sm={4} className="d-flex justify-content-center mb-3 mb-sm-0">
              <Image
                src={user.profilePicture || "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fc0%2F27%2Fbe%2Fc027bec07c2dc08b9df60921dfd539bd.jpg&f=1&nofb=1&ipt=b9775362f5768f1fcbd1580b5475e74c8297b2e3cdbd7ceb98a91d258e5fc401&ipo=images"}
                roundedCircle
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
                alt="Profile"
              />
            </Col>
            <Col xs={12} sm={8}>
              <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                {user.first_name} {user.last_name}
              </Card.Title>
              <Card.Text style={{ color: "gray", fontSize: "1rem" }}>
                {user.email}
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* User Orders */}
      <div className="mt-5 w-100">
        <h3>Your Orders</h3>
        <OrderList orders={userOrders} />
      </div>
    </Container>
  );
}

export default MyAccount;

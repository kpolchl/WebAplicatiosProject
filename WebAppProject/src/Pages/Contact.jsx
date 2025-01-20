import ContactComponent from "../Components/ContactComponent";

function Contact() {
  const handleSubmit = () => {
    alert("Wiadomość została wysłana!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#add8e6",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px",
          width: "100%",
          padding: "20px",
          boxSizing: "border-box",
          margin: "0px 30px"
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Skontaktuj się z nami
        </h1>
        <ContactComponent />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            type="button"
            onClick={handleSubmit}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              width: "100%", 
              maxWidth: "200px", 
              margin: "0 auto",
            }}
          >
            Wyślij
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;

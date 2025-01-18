import ContactComponent from "../Components/ContactComponent";

function Contact() {
  // Funkcja obsługująca kliknięcie przycisku
  const handleSubmit = () => {
    alert("Wiadomość została wysłana!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Pełna wysokość widoku
        backgroundColor: "#add8e6",
        padding: "10px", // Dodanie paddingu dla wąskich ekranów
        boxSizing: "border-box", // Uwzględnia padding w szerokości
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px",
          width: "100%", // Elastyczna szerokość dla responsywności
          padding: "20px",
          boxSizing: "border-box", // Zapobiega obcinaniu krawędzi
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Skontaktuj się z nami
        </h1>
        <ContactComponent />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            type="button"
            onClick={handleSubmit} // Wywołanie funkcji obsługującej kliknięcie
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              width: "100%", // Przycisk zajmuje pełną szerokość
              maxWidth: "200px", // Maksymalna szerokość dla estetyki
              margin: "0 auto", // Wyśrodkowanie przycisku
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

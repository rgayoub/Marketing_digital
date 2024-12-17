import React, { useState } from 'react';

const inputStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#fff",  // Fond blanc pour les champs
  border: "1px solid #444",
  borderRadius: "4px",
  color: "#000",  // Texte en noir
  fontSize: "1rem",
  outline: "none"
};

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const phoneNumber = '+212684397121';  // Remplacez par votre numéro de WhatsApp
    const text = `Nom: ${name}\nMessage: ${message}`;
    
    // Créez le lien WhatsApp avec le texte pré-rempli
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    // Ouvrir le lien WhatsApp dans un nouvel onglet
    window.open(url, '_blank');
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "90px", backgroundColor: "", color: "#fff" }}>
      <div style={{ maxWidth: "600px", width: "100%", display: "flex", flexDirection: "column", gap: "50px" }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "20px", color: "rgba(113, 107, 53, 0.77)" }}>Contactez notre équipe</h1>
          <p style={{ color: "#999" }}>Parlons de la façon dont nous pouvons vous aider.</p>
        </div>

        {/* Formulaire de contact */}
        <form style={{
          backgroundColor: "#fff",  // Fond blanc pour le formulaire
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.5)"
        }} onSubmit={(e) => e.preventDefault()}>
          
          {/* Nom */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "rgb(0, 0, 0)" }}>Nom *</label>
            <input
              type="text"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Message */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "rgb(0, 0, 0)" }}>Message *</label>
            <textarea
              placeholder="Votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ ...inputStyle, height: "100px" }}
            />
          </div>

          {/* Bouton d'envoi */}
          <button
            type="button"
            onClick={handleSubmit}
            style={{
              padding: "10px",
              width: "100%",
              backgroundColor: "rgba(153, 102, 0, 0.57)",  // Couleur de bouton
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem"
            }}
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

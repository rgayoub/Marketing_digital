// Style commun pour les champs de formulaire
const inputStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#222",
  border: "1px solid #444",
  borderRadius: "4px",
  color: "#fff",
  fontSize: "1rem",
  outline: "none"
};

const Contact = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "90px", backgroundColor: "#000", color: "#fff" }}>
      <div style={{ maxWidth: "600px", width: "100%", display: "flex", flexDirection: "column", gap: "50px" }}>
        {/* Section Gauche */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "20px", color: "rgb(144,195,141)" }}>Contactez notre équipe</h1>
          <p style={{ color: "#999" }}>
            Parlons de la façon dont Bird peut aider votre équipe à mieux travailler.
          </p>
          <div style={{ marginTop: "20px" }}>
            <p>Une agence flexible pour toute votre entreprise afin de partager des connaissances, livrer des projets et collaborer.</p>
            <p>Des fonctionnalités d'entreprise pour gérer en toute sécurité l'accès des utilisateurs et la sécurité.</p>
            <p>Un support dédié pour vous aider à élaborer le meilleur plan pour votre entreprise.</p>
          </div>
        </div>

        {/* Section Droite : Formulaire */}
        <form style={{
          backgroundColor: "#111",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.5)"
        }}>
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: "block", marginBottom: "5px", color: "rgb(144,195,141)" }}>Prénom *</label>
              <input type="text" placeholder="Prénom" style={inputStyle} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: "block", marginBottom: "5px", color: "rgb(144,195,141)" }}>Nom *</label>
              <input type="text" placeholder="Nom" style={inputStyle} />
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "rgb(144,195,141)" }}>Email professionnel *</label>
            <input type="email" placeholder="Email professionnel" style={inputStyle} />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "rgb(144,195,141)" }}>Nom de l'entreprise *</label>
            <input type="text" placeholder="Nom de l'entreprise" style={inputStyle} />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "rgb(144,195,141)" }}>
              Services qui vous intéressent *
            </label>
            <select style={inputStyle}>
              <option>Sélectionner une option</option>
              <option>Développement Web</option>
              <option>Développement d'applications mobiles</option>
              <option>Services Cloud</option>
              <option>Marketing numérique</option>
              <option>Conception UI/UX</option>
              <option>Consulting</option>
            </select>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "rgb(144,195,141)" }}>
              Comment pouvons-nous vous aider ?
            </label>
            <select style={inputStyle}>
              <option>Sélectionner une option</option>
              <option>Évaluer l'application pour mon entreprise</option>
              <option>En savoir plus</option>
              <option>Obtenir un devis</option>
              <option>Comment l'utiliser</option>
              <option>Autre</option>
            </select>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "rgb(144,195,141)" }}>Autre chose ?</label>
            <textarea placeholder="Votre message" style={{ ...inputStyle, height: "100px" }} />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "flex", alignItems: "center", color: "#ccc" }}>
              <input type="checkbox" style={{ marginRight: "10px" }} />
              J'accepte que Bird envoie des communications marketing liées à Bird
            </label>
          </div>

          <button type="submit" style={{
            padding: "10px",
            width: "100%",
            backgroundColor: "rgb(214,164,94)",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem"
          }}>
            Soumettre
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

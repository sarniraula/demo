export default function Terms({ translations }) {
  // Collect all keys that start with "terms_paragraph_"
  const paragraphs = Object.keys(translations)
    .filter(key => key.startsWith("terms_paragraph_"))
    .sort((a, b) => {
      // Sort numerically by paragraph number
      const numA = parseInt(a.split("_").pop(), 10);
      const numB = parseInt(b.split("_").pop(), 10);
      return numA - numB;
    });

  return (
    <main className="terms-container">
      <div className="terms-heading">
        <h1>{translations.terms}</h1>
      </div>
      <div>
        <button className="close-button">{translations.close_button}</button>
      </div>
      <div className="terms-content">
        {paragraphs.map((key) => (
          <p key={key}>{translations[key]}</p>
        ))}
      </div>
      <div>
        <button className="close-button">{translations.close_button}</button>
      </div>
    </main>
  );
}

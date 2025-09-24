export default function Card({ title, description, buttonText }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  )
}

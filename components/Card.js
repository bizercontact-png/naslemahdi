export default function Card({ title, description, buttonText }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      width: '300px',
      margin: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ marginBottom: '10px' }}>{title}</h3>
      <p style={{ marginBottom: '20px' }}>{description}</p>
      <button style={{
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#0070f3',
        color: '#fff',
        cursor: 'pointer'
      }}>
        {buttonText}
      </button>
    </div>
  )
}


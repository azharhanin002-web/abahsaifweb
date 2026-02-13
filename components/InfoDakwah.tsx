// components/InfoDakwah.tsx
export default function InfoDakwah() {
  return (
    <div style={{ 
      backgroundColor: '#f8f9fa', 
      border: '1px solid #eee', 
      borderRadius: '12px', 
      padding: '25px', 
      textAlign: 'center' 
    }}>
      <h3 style={{ 
        fontSize: '14px', 
        fontWeight: 'bold', 
        color: '#004a8e', 
        marginBottom: '10px',
        textTransform: 'uppercase'
      }}>
        INFO DAKWAH
      </h3>
      <p style={{ 
        fontSize: '13px', 
        color: '#666', 
        lineHeight: '1.6',
        margin: 0
      }}>
        Dukung operasional dakwah digital ABAHSAIF dengan menjadi donatur atau mitra kerjasama.
      </p>
    </div>
  );
}
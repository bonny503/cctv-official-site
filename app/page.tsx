export default function Home() {
  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontFamily: 'sans-serif', padding: '20px' }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>SECURE<span style={{ color: '#10b981' }}>LINK</span></h1>
      <h2 style={{ fontSize: '1.2rem', fontWeight: '400', color: '#94a3b8', letterSpacing: '1px' }}>CCTV & INTERNET INSTALLATION</h2>
      <p style={{ maxWidth: '500px', margin: '20px 0', color: '#cbd5e1' }}>High-definition surveillance and ultra-fast WiFi networking for your home or business.</p>
      <button style={{ padding: '15px 30px', backgroundColor: '#10b981', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>Get a Free Quote</button>
    </div>
  )
}

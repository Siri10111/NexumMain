export default function Home() {
  return (
    <main style={{fontFamily:'system-ui', padding:'3rem', lineHeight:1.5}}>
      <h1>🔭 Nexum Lab</h1>
      <p>Builds, tools, and cloud compute by Nexum.</p>
      <ul style={{marginTop:'1rem'}}>
        <li><a href="https://cloud.nexumserver.com">☁️ Nexum Cloud (DevBoxes)</a></li>
        <li><a href="https://docs.nexumserver.com">📚 Docs</a></li>
        <li><a href="https://status.nexumserver.com">📈 Status</a></li>
      </ul>
    </main>
  );
}

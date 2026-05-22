import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null } }
  static getDerivedStateFromError(e) { return { error: e } }
  componentDidCatch(e, info) { console.error('App crash:', e, info) }
  render() {
    if (this.state.error) return (
      <div style={{ color:'#f0c060', fontFamily:'Cinzel,serif', padding:'40px', textAlign:'center', background:'#0a0500', minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'20px' }}>
        <div style={{ fontSize:'3rem' }}>⚠️</div>
        <div style={{ fontSize:'1.2rem', letterSpacing:'3px' }}>El oráculo encontró un error</div>
        <div style={{ fontSize:'0.75rem', color:'#ff6b35', letterSpacing:'2px', maxWidth:'500px', wordBreak:'break-all' }}>{String(this.state.error)}</div>
        <button onClick={() => window.location.reload()} style={{ background:'transparent', border:'1px solid #c9922a', color:'#c9922a', fontFamily:'Cinzel,serif', padding:'10px 24px', cursor:'pointer', letterSpacing:'3px', fontSize:'12px' }}>↻ Recargar</button>
      </div>
    )
    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary><App /></ErrorBoundary>
)

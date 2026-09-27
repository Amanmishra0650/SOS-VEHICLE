import React from 'react';
import { createRoot } from 'react-dom/client';
import { Activity, ArrowUpRight, Bell, Bike, CircleHelp, Clock3, LayoutDashboard, MapPin, Menu, ShieldCheck, Users, Wrench, X } from 'lucide-react';
import './style.css';

const navigation = [
  { name: 'Overview', icon: LayoutDashboard },
  { name: 'Live rescues', icon: Activity },
  { name: 'Mechanics', icon: Wrench },
  { name: 'Riders', icon: Users },
  { name: 'Service areas', icon: MapPin },
];
const stats = [
  { name: 'Active rescues', value: '0', icon: Activity, color: 'orange' },
  { name: 'Online mechanics', value: '0', icon: Wrench, color: 'teal' },
  { name: 'Pending verifications', value: '0', icon: ShieldCheck, color: 'blue' },
];
function App() {
  const [active, setActive] = React.useState('Overview');
  const [menuOpen, setMenuOpen] = React.useState(false);
  return <div className="shell">
    <aside className={menuOpen ? 'sidebar open' : 'sidebar'}>
      <div className="brand"><div className="brand-icon"><Bike size={25} strokeWidth={2.2}/></div><div><strong>bike rescue<span className="brand-dot">.</span></strong><small>OPERATIONS CENTER</small></div><button className="close-menu" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X size={19}/></button></div>
      <div className="workspace-label">WORKSPACE</div><nav aria-label="Main navigation">{navigation.map(({name,icon:Icon}) => <button key={name} className={active === name ? 'nav-item selected' : 'nav-item'} onClick={() => {setActive(name);setMenuOpen(false);}}><Icon size={19}/>{name}{name === 'Live rescues' && <span className="nav-count">0</span>}</button>)}</nav>
      <div className="sidebar-bottom"><div className="help-icon"><CircleHelp size={21}/></div><div><strong>Need a hand?</strong><p>Read the setup guide to get started.</p><a href="https://github.com/Amanmishra0650/SOS-VEHICLE#readme">View documentation <ArrowUpRight size={13}/></a></div></div>
      <div className="sidebar-footer"><div className="avatar">BR</div><div><strong>Bike Rescue</strong><span>Development workspace</span></div><span className="footer-dots">•••</span></div>
    </aside>
    <main className="main"><header className="topbar"><button className="menu-button" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={21}/></button><div className="breadcrumb">Workspace <span>/</span> <strong>{active}</strong></div><div className="topbar-right"><span className="environment"><span/> DEVELOPMENT</span><button className="notification" aria-label="Notifications"><Bell size={20}/></button><div className="avatar tiny">BR</div></div></header>
      <div className="content"><div className="page-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> YOUR COMMAND CENTER</div><h1>{active === 'Overview' ? 'Good to have you here.' : active}</h1><p>{active === 'Overview' ? 'A clear view of every rescue, mechanic, and moment that matters.' : 'This workspace will become available in a later development phase.'}</p></div><span className="date-pill"><Clock3 size={16}/> Phase 1 · Foundation</span></div>
      {active === 'Overview' ? <><div className="notice"><div className="notice-icon"><Activity size={21}/></div><div><strong>Everything starts here</strong><p>This is a Phase 1 interface. Live data and operational tools will arrive in future phases; numbers below are placeholders.</p></div><span className="notice-tag">SETUP MODE</span></div>
      <div className="section-head"><h2>At a glance</h2><span>Development placeholders</span></div><div className="stats">{stats.map(({name,value,icon:Icon,color})=><div className="stat-card" key={name}><div className={`stat-icon ${color}`}><Icon size={21}/></div><span className="stat-name">{name}</span><strong className="stat-value">{value}<span className="stat-placeholder">PLACEHOLDER</span></strong><div className="stat-foot">Live metrics coming soon <ArrowUpRight size={15}/></div></div>)}</div>
      <div className="lower-grid"><div className="panel activity-panel"><div className="panel-title"><div><h2>Rescue activity</h2><p>See what is happening across your service areas.</p></div><span className="live-label"><span/> LIVE SOON</span></div><div className="empty-state"><div className="empty-illustration"><div className="empty-ring ring-one"/><div className="empty-ring ring-two"/><div className="empty-center"><Bike size={32}/></div><span className="empty-ping ping-one"/><span className="empty-ping ping-two"/></div><h3>No rescues to show yet</h3><p>Once the rescue workflow is connected, active requests will appear here in real time.</p></div></div><div className="panel steps-panel"><div className="panel-title"><div><h2>Getting started</h2><p>Your path to the first rescue.</p></div></div><div className="step"><span className="step-number done">01</span><div><strong>Project foundation</strong><p>Apps, API, and shared packages</p></div><span className="step-status">IN PROGRESS</span></div><div className="step"><span className="step-number">02</span><div><strong>Connect your database</strong><p>PostgreSQL and PostGIS setup</p></div></div><div className="step"><span className="step-number">03</span><div><strong>Onboard mechanics</strong><p>Profiles and verification</p></div></div><div className="step"><span className="step-number">04</span><div><strong>Enable live rescues</strong><p>Matching, offers, and tracking</p></div></div></div></div>
      <footer>Bike Rescue · Built for the moments that matter <span>Phase 1 / Development</span></footer></> : <div className="panel coming-soon"><div className="stat-icon blue"><ShieldCheck size={25}/></div><h2>{active} is coming soon</h2><p>Phase 1 sets up the application foundation. This section will be connected as the rescue workflow is built.</p><button onClick={() => setActive('Overview')}>Back to overview <ArrowUpRight size={16}/></button></div>}</div></main>
  </div>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);

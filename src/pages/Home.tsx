import { useState } from 'react';

export default function Home() {
  // Hover states for professional interactive feel
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);

  // SVG Icons Matrix
  const icons = {
    Linux: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 9h16M9 4v16" />
      </svg>
    ),
    Docker: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119v-2.13h-2.119zm2.756 0h2.117v-2.13h-2.117zm-5.51 0h2.119v-2.13h-2.119zm-2.758 0h2.119v-2.13H8.471zm2.758-2.405h2.119v-2.13h-2.119zm0-2.404h2.119v-2.13h-2.119zm2.754 4.809h2.119v-2.13h-2.119zm-8.267 2.405h2.117v-2.13H5.758zm.92 5.562c-3.1 0-5.758-2.13-6.678-5.022a6.37 6.37 0 0 0 4.195.922c.324.471.84.773 1.417.773.995 0 1.802-.853 1.802-1.904 0-.17-.023-.334-.067-.49a8.6 8.6 0 0 0 5.438.254c.264-.407.712-.676 1.222-.676.812 0 1.472.697 1.472 1.554 0 .546-.268 1.023-.681 1.309a6.837 6.837 0 0 1-8.12 3.312z"/>
      </svg>
    ),
    Kubernetes: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    Terraform: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 10v4h4v-4H7zM13 6v4h4V6h-4zM7 4v4h4V4H7zM13 12v4h4v-4h-4z" />
      </svg>
    ),
    AWS: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M7.5 13.5c1.5 2 4.5 2 6 0" />
      </svg>
    ),
    "GitHub Actions": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    Jenkins: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    ArgoCD: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6l4 6H8l4-6z" />
      </svg>
    ),
    Prometheus: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    Grafana: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    ),
    React: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
    "Next.js": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16V8l4 8V8" />
      </svg>
    ),
  };

  const styles = {
    main: {
      backgroundColor: '#09090b',
      color: '#e4e4e7',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      minHeight: '100vh',
      padding: 0,
      margin: 0,
      boxSizing: 'border-box' as const,
    },
    nav: {
      position: 'sticky' as const,
      top: 0,
      zIndex: 50,
      borderBottom: '1px solid rgba(39, 39, 42, 0.7)',
      backgroundColor: 'rgba(9, 9, 11, 0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      padding: '16px 24px',
    },
    navContainer: {
      display: 'flex',
      width: '100%',
      maxWidth: '1100px',
      margin: '0 auto',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: '16px',
      fontWeight: 'bold',
      letterSpacing: '1.5px',
      background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    navLinks: {
      display: 'flex',
      gap: '24px',
      fontSize: '14px',
    },
    link: (isHovered: boolean) => ({
      color: isHovered ? '#ffffff' : '#a1a1aa',
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'color 0.2s ease',
    }),
    hero: {
      position: 'relative' as const,
      display: 'flex',
      minHeight: '85vh',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 24px',
      textAlign: 'center' as const,
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      borderRadius: '9999px',
      border: '1px solid #27272a',
      backgroundColor: 'rgba(39, 39, 42, 0.4)',
      padding: '6px 16px',
      fontSize: '12px',
      color: '#a1a1aa',
      marginBottom: '28px',
    },
    dot: {
      height: '8px',
      width: '8px',
      borderRadius: '50%',
      backgroundColor: '#10b981',
      boxShadow: '0 0 8px #10b981',
    },
    h1: {
      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
      fontWeight: '800',
      letterSpacing: '-1.5px',
      margin: '0 0 16px 0',
      color: '#ffffff',
      lineHeight: 1.1,
    },
    gradientText: {
      background: 'linear-gradient(135deg, #60a5fa, #22d3ee)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    heroSubtitle: {
      fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
      color: '#d4d4d8',
      margin: '0 0 20px 0',
      fontWeight: '500',
      letterSpacing: '0.5px',
    },
    heroDesc: {
      fontSize: '15px',
      color: '#888893',
      maxWidth: '680px',
      lineHeight: '1.6',
      margin: '0 0 40px 0',
    },
    btnContainer: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      flexWrap: 'wrap' as const,
    },
    primaryBtn: (isHovered: boolean) => ({
      backgroundColor: isHovered ? '#ffffff' : '#f4f4f5',
      color: '#09090b',
      padding: '14px 28px',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: '14px',
      textDecoration: 'none',
      boxShadow: isHovered ? '0 0 25px rgba(255,255,255,0.15)' : 'none',
      transition: 'all 0.2s ease',
    }),
    secondaryBtn: (isHovered: boolean) => ({
      border: isHovered ? '1px solid #444449' : '1px solid #27272a',
      backgroundColor: isHovered ? 'rgba(39, 39, 42, 0.6)' : 'rgba(24, 24, 27, 0.4)',
      color: '#ffffff',
      padding: '14px 28px',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: '14px',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
    }),
    section: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '90px 24px',
      borderTop: '1px solid #18181b',
    },
    sectionHeader: {
      marginBottom: '48px',
    },
    sectionTitle: {
      fontSize: '2.25rem',
      fontWeight: '700',
      color: '#ffffff',
      margin: '0 0 10px 0',
      letterSpacing: '-0.5px',
    },
    sectionSub: {
      fontSize: '14px',
      color: '#71717a',
      margin: 0,
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
      gap: '14px',
    },
    skillCard: (isHovered: boolean) => ({
      border: isHovered ? '1px solid #3f3f46' : '1px solid rgba(39, 39, 42, 0.6)',
      backgroundColor: isHovered ? 'rgba(39, 39, 42, 0.2)' : 'rgba(24, 24, 27, 0.3)',
      padding: '20px 16px',
      borderRadius: '14px',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      textAlign: 'center' as const,
      transform: isHovered ? 'translateY(-4px)' : 'none',
      transition: 'all 0.2s ease',
    }),
    iconWrapper: (isHovered: boolean) => ({
      color: isHovered ? '#60a5fa' : '#a1a1aa',
      marginBottom: '12px',
      transition: 'color 0.2s ease',
    }),
    skillName: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#e4e4e7',
    },
    skillCat: {
      fontSize: '10px',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.5px',
      color: '#52525b',
      marginTop: '6px',
      fontWeight: '500',
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '24px',
    },
    projectCard: (isHovered: boolean) => ({
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'space-between',
      border: isHovered ? '1px solid #3f3f46' : '1px solid rgba(39, 39, 42, 0.7)',
      backgroundColor: isHovered ? 'rgba(24, 24, 27, 0.4)' : 'rgba(24, 24, 27, 0.15)',
      padding: '28px',
      borderRadius: '16px',
      transform: isHovered ? 'translateY(-4px)' : 'none',
      transition: 'all 0.2s ease',
    }),
    projMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    projTag: {
      fontSize: '11px',
      fontWeight: '600',
      textTransform: 'uppercase' as const,
      letterSpacing: '1px',
    },
    projBadge: {
      fontSize: '11px',
      color: '#71717a',
      border: '1px solid #27272a',
      borderRadius: '9999px',
      padding: '2px 10px',
    },
    projTitle: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#ffffff',
      margin: '18px 0 10px 0',
    },
    projDesc: {
      fontSize: '14px',
      color: '#a1a1aa',
      lineHeight: '1.6',
      margin: 0,
    },
    techStackContainer: {
      display: 'flex',
      gap: '6px',
      flexWrap: 'wrap' as const,
      marginTop: '28px',
    },
    techBadge: {
      fontSize: '11px',
      fontFamily: 'monospace',
      backgroundColor: '#18181b',
      color: '#a1a1aa',
      padding: '4px 10px',
      borderRadius: '6px',
      border: '1px solid #27272a',
    },
    contactSection: {
      maxWidth: '850px',
      margin: '0 auto',
      padding: '110px 24px',
      textAlign: 'center' as const,
    },
    contactGrid: {
      display: 'flex',
      flexDirection: 'row' as const,
      justifyContent: 'center',
      gap: '14px',
      flexWrap: 'wrap' as const,
      marginTop: '44px',
    },
    contactItem: (isHovered: boolean) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      border: isHovered ? '1px solid #3f3f46' : '1px solid #27272a',
      backgroundColor: isHovered ? 'rgba(39, 39, 42, 0.3)' : 'rgba(24, 24, 27, 0.4)',
      padding: '12px 20px',
      borderRadius: '14px',
      fontSize: '14px',
      color: isHovered ? '#ffffff' : '#d4d4d8',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
    }),
    footer: {
      borderTop: '1px solid #18181b',
      padding: '36px 0',
      textAlign: 'center' as const,
      fontSize: '12px',
      color: '#52525b',
      letterSpacing: '0.5px',
    }
  };

  return (
    <main style={styles.main}>
      
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <span style={styles.logo}>FARHAN.LABS</span>
          <div style={styles.navLinks}>
            {['about', 'skills', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                style={styles.link(hoveredNav === item)}
                onMouseEnter={() => setHoveredNav(item)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" style={styles.hero}>
        <div style={styles.badge}>
          <span style={styles.dot} />
          Available for Production Deployments
        </div>

        <h1 style={styles.h1}>
          Hi, I'm <span style={styles.gradientText}>Farhan Raza</span>
        </h1>

        <p style={styles.heroSubtitle}>
          DevOps Engineer • Cloud Enthusiast • Full Stack Developer
        </p>

        <p style={styles.heroDesc}>
          I architect secure high-availability cloud infrastructure, automate production deployments 
          with rigid DevSecOps pipelines, and build optimized modern full-stack web applications.
        </p>

        <div style={styles.btnContainer}>
          <a 
            href="https://github.com/farhanlabs" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.primaryBtn(hoveredBtn === 'git')}
            onMouseEnter={() => setHoveredBtn('git')}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            GitHub Profile
          </a>
          <a 
            href="#contact" 
            style={styles.secondaryBtn(hoveredBtn === 'contact')}
            onMouseEnter={() => setHoveredBtn('contact')}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            Let's Talk Architecture
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Technical Arsenal</h2>
          <p style={styles.sectionSub}>Standard systems, platforms, and cloud tools I command.</p>
        </div>

        <div style={styles.skillsGrid}>
          {[
            { name: "Linux", cat: "Core OS" },
            { name: "Docker", cat: "Containers" },
            { name: "Kubernetes", cat: "Orchestration" },
            { name: "Terraform", cat: "Infrastructure" },
            { name: "AWS", cat: "Cloud Native" },
            { name: "GitHub Actions", cat: "CI/CD Gate" },
            { name: "Jenkins", cat: "Automation" },
            { name: "ArgoCD", cat: "GitOps Execution" },
            { name: "Prometheus", cat: "Observability" },
            { name: "Grafana", cat: "Telemetry" },
            { name: "React", cat: "UI Interface" },
            { name: "Next.js", cat: "Web Engine" },
          ].map((skill) => (
            <div 
              key={skill.name} 
              style={styles.skillCard(hoveredSkill === skill.name)}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div style={styles.iconWrapper(hoveredSkill === skill.name)}>
                {icons[skill.name as keyof typeof icons]}
              </div>
              <div style={styles.skillName}>{skill.name}</div>
              <div style={styles.skillCat}>{skill.cat}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Featured Architecture</h2>
          <p style={styles.sectionSub}>Live production configurations and enterprise deployments.</p>
        </div>

        <div style={styles.projectsGrid}>
          {/* Project 1 */}
          <div 
            style={styles.projectCard(hoveredProject === 'p1')}
            onMouseEnter={() => setHoveredProject('p1')}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div>
              <div style={styles.projMeta}>
                <span style={{ ...styles.projTag, color: '#60a5fa' }}>DevOps Hub</span>
                <span style={styles.projBadge}>Open Source</span>
              </div>
              <h3 style={styles.projTitle}>BharatOps</h3>
              <p style={styles.projDesc}>
                An architectural open-source knowledge repository curated to streamline automated system 
                deployment, robust pipeline creation, and infrastructure as code methodologies.
              </p>
            </div>
            <div style={styles.techStackContainer}>
              <span style={styles.techBadge}>Kubernetes</span>
              <span style={styles.techBadge}>GitOps</span>
              <span style={styles.techBadge}>Linux Architecture</span>
            </div>
          </div>

          {/* Project 2 */}
          <div 
            style={styles.projectCard(hoveredProject === 'p2')}
            onMouseEnter={() => setHoveredProject('p2')}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div>
              <div style={styles.projMeta}>
                <span style={{ ...styles.projTag, color: '#22d3ee' }}>SecOps Pipeline</span>
                <span style={styles.projBadge}>Automated</span>
              </div>
              <h3 style={styles.projTitle}>SecureCart</h3>
              <p style={styles.projDesc}>
                A complete production-grade DevSecOps pipeline automating strict security scanning via Trivy, 
                static code coverage using SonarQube, and immutable multi-stage image delivery.
              </p>
            </div>
            <div style={styles.techStackContainer}>
              <span style={styles.techBadge}>Terraform</span>
              <span style={styles.techBadge}>AWS EKS</span>
              <span style={styles.techBadge}>SonarQube</span>
              <span style={styles.techBadge}>Trivy</span>
            </div>
          </div>

          {/* Project 3 */}
          <div 
            style={styles.projectCard(hoveredProject === 'p3')}
            onMouseEnter={() => setHoveredProject('p3')}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div>
              <div style={styles.projMeta}>
                <span style={{ ...styles.projTag, color: '#c084fc' }}>Venture Architecture</span>
                <span style={styles.projBadge}>Active</span>
              </div>
              <h3 style={styles.projTitle}>ZevixDigital</h3>
              <p style={styles.projDesc}>
                A technical agency scaling complex full-stack builds, continuous integration steps, 
                high-efficiency local SEO optimizations, and zero-downtime microservice orchestration.
              </p>
            </div>
            <div style={styles.techStackContainer}>
              <span style={styles.techBadge}>Next.js Framework</span>
              <span style={styles.techBadge}>Cloud Native</span>
              <span style={styles.techBadge}>SEO Systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contactSection}>
        <h2 style={{ ...styles.sectionTitle, fontSize: '2.5rem' }}>Let's Build Something Resilient</h2>
        <p style={{ ...styles.sectionSub, fontSize: '15px', maxWidth: '520px', margin: '8px auto 0 auto' }}>
          Available for technical interviews, infrastructure consulting, and active cloud engineering positions.
        </p>

        <div style={styles.contactGrid}>
          <a 
            href="mailto:mdfarhanraza001@gmail.com" 
            style={styles.contactItem(hoveredContact === 'mail')}
            onMouseEnter={() => setHoveredContact('mail')}
            onMouseLeave={() => setHoveredContact(null)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            mdfarhanraza001@gmail.com
          </a>

          <a 
            href="tel:+917050068050" 
            style={styles.contactItem(hoveredContact === 'phone')}
            onMouseEnter={() => setHoveredContact('phone')}
            onMouseLeave={() => setHoveredContact(null)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +91 7050068050
          </a>

          <a 
            href="https://github.com/farhanlabs" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.contactItem(hoveredContact === 'git')}
            onMouseEnter={() => setHoveredContact('git')}
            onMouseLeave={() => setHoveredContact(null)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            github.com/farhanlabs
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        &copy; 2026 Farhan Raza. Engineered with zero external styles.
      </footer>
    </main>
  );
}
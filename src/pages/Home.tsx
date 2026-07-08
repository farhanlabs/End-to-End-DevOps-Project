export default function Home() {
  // Pure Inline Premium Dark Theme Design Styles
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
      borderBottom: '1px solid rgba(39, 39, 42, 0.8)',
      backgroundColor: 'rgba(9, 9, 11, 0.8)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'between',
      alignItems: 'center',
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
      fontSize: '18px',
      fontWeight: 'bold',
      letterSpacing: '1px',
      background: 'linear-gradient(to right, #60a5fa, #22d3ee)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    navLinks: {
      display: 'flex',
      gap: '24px',
      fontSize: '14px',
    },
    link: {
      color: '#a1a1aa',
      textDecoration: 'none',
      fontWeight: 500,
    },
    hero: {
      position: 'relative' as const,
      display: 'flex',
      minHeight: '80vh',
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
      marginBottom: '24px',
    },
    dot: {
      height: '8px',
      width: '8px',
      borderRadius: '50%',
      backgroundColor: '#10b981',
    },
    h1: {
      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
      fontWeight: '800',
      letterSpacing: '-1px',
      margin: '0 0 16px 0',
      color: '#ffffff',
      lineHeight: 1.1,
    },
    gradientText: {
      background: 'linear-gradient(to right, #60a5fa, #22d3ee)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    heroSubtitle: {
      fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
      color: '#a1a1aa',
      margin: '0 0 16px 0',
      fontWeight: '500',
    },
    heroDesc: {
      fontSize: '15px',
      color: '#71717a',
      maxWidth: '640px',
      lineHeight: '1.6',
      margin: '0 0 36px 0',
    },
    btnContainer: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      flexWrap: 'wrap' as const,
    },
    primaryBtn: {
      backgroundColor: '#f4f4f5',
      color: '#09090b',
      padding: '14px 28px',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: '14px',
      textDecoration: 'none',
    },
    secondaryBtn: {
      border: '1px solid #27272a',
      backgroundColor: 'rgba(24, 24, 27, 0.4)',
      color: '#d4d4d8',
      padding: '14px 28px',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: '14px',
      textDecoration: 'none',
    },
    section: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '80px 24px',
      borderTop: '1px solid #18181b',
    },
    sectionHeader: {
      marginBottom: '40px',
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#ffffff',
      margin: '0 0 8px 0',
    },
    sectionSub: {
      fontSize: '14px',
      color: '#71717a',
      margin: 0,
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
      gap: '12px',
    },
    skillCard: {
      border: '1px solid rgba(39, 39, 42, 0.6)',
      backgroundColor: 'rgba(24, 24, 27, 0.3)',
      padding: '16px',
      borderRadius: '12px',
    },
    skillName: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#e4e4e7',
    },
    skillCat: {
      fontSize: '10px',
      textTransform: 'uppercase' as const,
      letterSpacing: '1px',
      color: '#52525b',
      marginTop: '6px',
      fontWeight: '500',
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
    },
    projectCard: {
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'space-between',
      border: '1px solid rgba(39, 39, 42, 0.7)',
      backgroundColor: 'rgba(24, 24, 27, 0.2)',
      padding: '24px',
      borderRadius: '16px',
    },
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
      margin: '16px 0 8px 0',
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
      marginTop: '24px',
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
      maxWidth: '800px',
      margin: '0 auto',
      padding: '100px 24px',
      textAlign: 'center' as const,
    },
    contactGrid: {
      display: 'flex',
      flexDirection: 'row' as const,
      justifyContent: 'center',
      gap: '12px',
      flexWrap: 'wrap' as const,
      marginTop: '40px',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      border: '1px solid #27272a',
      backgroundColor: 'rgba(24, 24, 27, 0.4)',
      padding: '10px 18px',
      borderRadius: '12px',
      fontSize: '14px',
      color: '#d4d4d8',
      textDecoration: 'none',
    },
    footer: {
      borderTop: '1px solid #18181b',
      padding: '32px 0',
      textAlign: 'center' as const,
      fontSize: '12px',
      color: '#52525b',
    }
  };

  return (
    <main style={styles.main}>
      
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <span style={styles.logo}>FARHAN.LABS</span>
          <div style={styles.navLinks}>
            <a href="#about" style={styles.link}>About</a>
            <a href="#skills" style={styles.link}>Skills</a>
            <a href="#projects" style={styles.link}>Projects</a>
            <a href="#contact" style={styles.link}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" style={styles.hero}>
        <div style={styles.badge}>
          <span style={styles.dot} />
          Available for Production Roles
        </div>

        <h1 style={styles.h1}>
          Hi, I'm <span style={styles.gradientText}>Farhan Raza</span>
        </h1>

        <p style={styles.heroSubtitle}>
          DevOps Engineer • Cloud Enthusiast • Full Stack Developer
        </p>

        <p style={styles.heroDesc}>
          I build robust, scalable cloud infrastructure, automate production deployments 
          with reliable CI/CD architectures, and write performance-critical web applications.
        </p>

        <div style={styles.btnContainer}>
          <a href="https://github.com/farhanlabs" target="_blank" rel="noopener noreferrer" style={styles.primaryBtn}>
            GitHub Profile
          </a>
          <a href="#contact" style={styles.secondaryBtn}>
            Let's Connect
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Technical Arsenal</h2>
          <p style={styles.sectionSub}>Tools, architectures, and platforms I work with.</p>
        </div>

        <div style={styles.skillsGrid}>
          {[
            { name: "Linux", cat: "Core" },
            { name: "Docker", cat: "Containers" },
            { name: "Kubernetes", cat: "Orchestration" },
            { name: "Terraform", cat: "IaC" },
            { name: "AWS", cat: "Cloud" },
            { name: "GitHub Actions", cat: "CI/CD" },
            { name: "Jenkins", cat: "CI/CD" },
            { name: "ArgoCD", cat: "GitOps" },
            { name: "Prometheus", cat: "Monitoring" },
            { name: "Grafana", cat: "Metrics" },
            { name: "React", cat: "Frontend" },
            { name: "Next.js", cat: "Frontend" },
          ].map((skill) => (
            <div key={skill.name} style={styles.skillCard}>
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
          <p style={styles.sectionSub}>Production deployments, configurations, and open-source contributions.</p>
        </div>

        <div style={styles.projectsGrid}>
          {/* Project 1 */}
          <div style={styles.projectCard}>
            <div>
              <div style={styles.projMeta}>
                <span style={{ ...styles.projTag, color: '#60a5fa' }}>DevOps Hub</span>
                <span style={styles.projBadge}>Community</span>
              </div>
              <h3 style={styles.projTitle}>BharatOps</h3>
              <p style={styles.projDesc}>
                An architectural and community knowledge initiative aiming to simplify advanced enterprise 
                cloud practices, infrastructure automation, and reliable GitOps methodologies.
              </p>
            </div>
            <div style={styles.techStackContainer}>
              <span style={styles.techBadge}>Kubernetes</span>
              <span style={styles.techBadge}>GitOps</span>
              <span style={styles.techBadge}>Linux</span>
            </div>
          </div>

          {/* Project 2 */}
          <div style={styles.projectCard}>
            <div>
              <div style={styles.projMeta}>
                <span style={{ ...styles.projTag, color: '#22d3ee' }}>SecOps Pipeline</span>
                <span style={styles.projBadge}>Automated</span>
              </div>
              <h3 style={styles.projTitle}>SecureCart</h3>
              <p style={styles.projDesc}>
                End-to-end robust DevSecOps workflow integrating vulnerability scanning via Trivy, 
                code analysis through SonarQube, and infrastructure setup using Terraform directly onto AWS.
              </p>
            </div>
            <div style={styles.techStackContainer}>
              <span style={styles.techBadge}>AWS</span>
              <span style={styles.techBadge}>Trivy</span>
              <span style={styles.techBadge}>SonarQube</span>
              <span style={styles.techBadge}>Terraform</span>
            </div>
          </div>

          {/* Project 3 */}
          <div style={styles.projectCard}>
            <div>
              <div style={styles.projMeta}>
                <span style={{ ...styles.projTag, color: '#c084fc' }}>Venture</span>
                <span style={styles.projBadge}>Production</span>
              </div>
              <h3 style={styles.projTitle}>ZevixDigital</h3>
              <p style={styles.projDesc}>
                A professional development venture engineering exceptional web tools, deploying applications 
                using ultra-fast cloud services, local SEO management, and server setups.
              </p>
            </div>
            <div style={styles.techStackContainer}>
              <span style={styles.techBadge}>Next.js</span>
              <span style={styles.techBadge}>Tailwind</span>
              <span style={styles.techBadge}>SEO</span>
              <span style={styles.techBadge}>Vercel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contactSection}>
        <h2 style={{ ...styles.sectionTitle, fontSize: '2.5rem' }}>Let's Build Something Resilient</h2>
        <p style={{ ...styles.sectionSub, fontSize: '15px', maxWidth: '500px', margin: '8px auto 0 auto' }}>
          Open to core DevOps engineering, cloud optimization consulting, and modern full-stack application development.
        </p>

        <div style={styles.contactGrid}>
          <a href="mailto:your-email@example.com" style={styles.contactItem}>
            <span>✉️</span> your-email@example.com
          </a>
          <a href="https://github.com/farhanlabs" target="_blank" rel="noopener noreferrer" style={styles.contactItem}>
            <span>💻</span> github.com/farhanlabs
          </a>
          <div style={styles.contactItem}>
            <span>📍</span> Bihar, India
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        &copy; 2026 Farhan Raza. Engineered for ultimate uptime.
      </footer>
    </main>
  );
}
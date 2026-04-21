'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Cloud, Server, Code, Layers, Mail, Github, Linkedin, ChevronDown, Rocket, ExternalLink, ShieldCheck, Terminal } from 'lucide-react'

// Animation Variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      {/* Background Orbs */}
      <div className="glow-pulsing" style={{ 
        position: 'fixed', top: '-10%', left: '-10%', width: '40vw', height: '40vw', 
        background: 'radial-gradient(circle, rgba(0, 210, 255, 0.15) 0%, transparent 70%)', 
        zIndex: -1, borderRadius: '50%', pointerEvents: 'none' 
      }} />
      <div className="glow-pulsing" style={{ 
        position: 'fixed', bottom: '-10%', right: '-10%', width: '50vw', height: '50vw', 
        background: 'radial-gradient(circle, rgba(157, 80, 187, 0.15) 0%, transparent 70%)', 
        zIndex: -1, borderRadius: '50%', pointerEvents: 'none', animationDelay: '-3s' 
      }} />

      {/* Hero Section */}
      <section className="hero container" style={{ padding: '0 4rem' }}>
        <motion.div 
          className="hero-content"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeIn} style={{ marginBottom: '3rem', position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: '250px', height: '250px', background: 'var(--primary)', filter: 'blur(80px)', opacity: 0.2
            }} />
            <div className="glass" style={{ 
              width: '200px', height: '200px', borderRadius: '50%', padding: '4px', background: 'var(--glass-border)'
            }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#111' }}>
                <img 
                  src="profile.png" 
                  alt="Saksham Vaishnav" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '30% 5%' }}
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/200' }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} style={{ marginBottom: '1.5rem' }}>
            <span className="mono gradient-text" style={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
              &lt; Cloud Architect & DevOps /&gt;
            </span>
          </motion.div>

          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(3.5rem, 12vw, 6.5rem)', lineHeight: 1, marginBottom: '2rem' }}>
            Transforming Infrastructure <br /> 
            <span className="gradient-text">Into Innovation.</span>
          </motion.h1>

          <motion.p variants={fadeIn} style={{ fontSize: '1.25rem', color: '#888', maxWidth: '650px', margin: '0 auto 3.5rem', fontWeight: 400 }}>
            Hi, I am <strong style={{ color: '#fff' }}>Saksham Vaishnav</strong>. Specialist in EKS, 
            GitOps automation, and production-grade observability.
          </motion.p>

          <motion.div variants={fadeIn} style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <a href="#projects" className="btn btn-primary">Download Resume</a>
            <a href="#contact" className="btn btn-outline">Let's Talk</a>
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Grid Stats */}
      <section id="about" className="container" style={{ paddingTop: '5rem' }}>
        <motion.div 
          className="bento-grid"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeIn} className="glass" style={{ gridColumn: 'span 4', padding: '2.5rem' }}>
            <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}><Rocket size={32} /></div>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>3+ Years</h3>
            <p style={{ color: '#888' }}>Of engineering mission-critical cloud solutions on AWS & GCP.</p>
          </motion.div>
          <motion.div variants={fadeIn} className="glass" style={{ gridColumn: 'span 8', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }} className="gradient-text">Cloud-Native Focus</h3>
            <p style={{ color: '#888', fontSize: '1.1rem' }}>
              I specialize in orchestrating complex microservices using Kubernetes (EKS/GKE), 
              ensuring high availability through immutable infrastructure and automated remediation.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container" style={{ paddingTop: '6rem' }}>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '6rem' }}
        >
          <h2 style={{ fontSize: '3.5rem' }} className="gradient-text">The Professional Journey</h2>
          <p style={{ color: '#888', marginTop: '1rem' }}>A timeline of scaling systems and teams.</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {[
            {
              company: "Softinator Techlabs",
              role: "Senior DevOps Engineer",
              period: "May 2025 – Present",
              desc: "Engineering the future of FinStack, migrating legacy ECS to EKS with Zero-Downtime strategies.",
              tags: ["AWS EKS", "Terraform", "Prometheus"]
            },
            {
              company: "InfoKoders",
              role: "DevOps Engineer",
              period: "Sept 2023 – Apr 2025",
              desc: "Automated 80% of deployments using Jenkins/GitHub Actions pipelines and Dockerized services.",
              tags: ["Docker", "Jenkins", "ELK Stack"]
            }
          ].map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass"
              style={{ padding: '3rem', borderLeft: '4px solid var(--primary)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.8rem' }}>{exp.company}</h3>
                  <p className="mono gradient-text" style={{ fontWeight: 500 }}>{exp.role}</p>
                </div>
                <p className="mono" style={{ color: '#555' }}>{exp.period}</p>
              </div>
              <p style={{ color: '#aaa', fontSize: '1.1rem', marginBottom: '2rem' }}>{exp.desc}</p>
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                {exp.tags.map(tag => (
                  <span key={tag} className="mono" style={{ background: '#111', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.8rem', color: 'var(--primary)', border: '1px solid #222' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills 2.0 */}
      <section id="skills" className="container" style={{ paddingTop: '6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { icon: <ShieldCheck />, title: "Infrastructure", skills: "Terraform, Ansible, CloudFormation, AWS CloudWatch" },
            { icon: <Terminal />, title: "Orchestration", skills: "Kubernetes (EKS/GKE), Helm, ArgoCD, Docker" },
            { icon: <Code />, title: "Automation", skills: "GitHub Actions, Jenkins, Bash, Python, Git" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="glass" 
              style={{ padding: '3rem' }}
            >
              <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>{React.cloneElement(item.icon, { size: 40 })}</div>
              <h3 style={{ marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ color: '#888', lineHeight: '1.8' }}>{item.skills}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modern Contact */}
      <section id="contact" className="container" style={{ textAlign: 'center', paddingTop: '6rem' }}>
        <motion.div 
          className="glass" 
          style={{ padding: '6rem 2rem', background: 'radial-gradient(circle at bottom right, rgba(0, 210, 255, 0.05), transparent)' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Let's Build Something <br /> <span className="gradient-text">Reliable.</span></h2>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '4rem' }}>
            <a href="mailto:vaishnavsaksham20021218@gmail.com" className="btn btn-primary" style={{ minWidth: '180px' }}><Mail size={20} /> Email Me</a>
            <a href="https://www.linkedin.com/in/saksham-vaishnav/" target="_blank" className="btn btn-outline" style={{ minWidth: '180px' }}><Linkedin size={20} /> LinkedIn</a>
            <a href="https://github.com/saksham-this-side/" target="_blank" className="btn btn-outline" style={{ minWidth: '180px' }}><Github size={20} /> GitHub</a>
          </div>
        </motion.div>
        
        <footer style={{ marginTop: '8rem', opacity: 0.4, fontSize: '0.9rem' }} className="mono">
          <p>DESIGNED & ENGINEERED BY SAKSHAM VAISHNAV — 2026</p>
        </footer>
      </section>
    </main>
  )
}

'use client'

import React from 'react'
import { Cloud, Server, Code, Layers, Mail, Github, Linkedin, ExternalLink, ChevronDown } from 'lucide-react'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-content">
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
            <div className="glass float" style={{ 
              width: '180px', 
              height: '180px', 
              borderRadius: '50%', 
              overflow: 'hidden', 
              border: '4px solid var(--glass-border)',
              boxShadow: '0 0 30px rgba(0, 210, 255, 0.2)'
            }}>
              <img 
                src="profile.png" 
                alt="Saksham Vaishnav" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '30% 5%' }}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/180?text=Saksham' }}
              />
            </div>
          </div>
          <div className="float" style={{ marginBottom: '1.5rem' }}>
            <span className="mono gradient-text" style={{ fontSize: '1.2rem', fontWeight: 500 }}>
              &lt; Namaste, world /&gt;
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', marginBottom: '1rem' }}>
            I am <span className="gradient-text">Saksham Vaishnav</span>
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#ccc', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            Cloud-native engineer focused on <span style={{ color: 'var(--primary)' }}>Kubernetes</span> orchestration and 
            scale-ready <span style={{ color: 'var(--secondary)' }}>DevOps</span> automation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn glass" style={{ color: 'white' }}>Get in Touch</a>
          </div>
          <div style={{ marginTop: '5rem', opacity: 0.5 }}>
            <ChevronDown size={32} className="float" />
          </div>
        </div>
      </section>

      {/* About / Stats */}
      <section id="about" className="container">
        <div className="glass" style={{ padding: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <h2 style={{ marginBottom: '1rem' }}>3+ Years</h2>
            <p style={{ color: '#aaa' }}>Of hands-on experience in cloud infrastructure and CI/CD automation.</p>
          </div>
          <div>
            <h2 style={{ marginBottom: '1rem' }}>EKS / GKE</h2>
            <p style={{ color: '#aaa' }}>Specialized in production-grade Kubernetes clusters and managed node groups.</p>
          </div>
          <div>
            <h2 style={{ marginBottom: '1rem' }}>IaC Pro</h2>
            <p style={{ color: '#aaa' }}>Architecting infrastructure using Terraform, Helm, and GitOps workflows.</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container" style={{ paddingTop: '10rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '4rem' }} className="gradient-text">Professional Journey</h2>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="glass" style={{ padding: '2rem' }}>
              <h3 className="gradient-text">Softinator Techlabs</h3>
              <p className="mono" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>May 2025 – Present | DevOps Engineer</p>
              <ul style={{ color: '#ccc', paddingLeft: '1.2rem', fontSize: '0.95rem' }}>
                <li>Led migration of FinStack from AWS ECS to EKS with Managed Node Groups.</li>
                <li>Authored Terraform modules for VPC, NAT Gateway, and DynamoDB.</li>
                <li>Deployed Prometheus/Grafana stack on EKS using Amazon EFS.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="glass" style={{ padding: '2rem' }}>
              <h3 className="gradient-text">InfoKoders</h3>
              <p className="mono" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Sept 2023 – Apr 2025 | DevOps Engineer</p>
              <ul style={{ color: '#ccc', paddingLeft: '1.2rem', fontSize: '0.95rem' }}>
                <li>Designed multi-stage CI/CD pipelines with Jenkins and GitHub Actions.</li>
                <li>Containerized microservices using Docker on AWS EC2.</li>
                <li>Configured Monitoring and Alerting with Prometheus and Grafana.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Secton */}
      <section id="skills" className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem' }}>The Tech Stack</h2>
          <p style={{ color: '#aaa' }}>Infrastructure as code, orchestration, and beyond.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          {[
            { icon: <Cloud />, title: "Cloud", list: "AWS (EKS, EC2, S3, VPC, ALB)" },
            { icon: <Server />, title: "Containers", list: "Docker, Kubernetes, Helm" },
            { icon: <Code />, title: "IaC & CI/CD", list: "Terraform, Jenkins, ArgoCD" },
            { icon: <Layers />, title: "Monitoring", list: "Prometheus, Grafana, CloudWatch" }
          ].map((skill, idx) => (
            <div key={idx} className="glass" style={{ padding: '2rem', textAlign: 'center', transition: 'all 0.3s ease' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                {React.cloneElement(skill.icon, { size: 40 })}
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>{skill.title}</h3>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>{skill.list}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container" style={{ textAlign: 'center' }}>
        <div className="glass" style={{ padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }} className="gradient-text">Let's Connect</h2>
          <p style={{ color: '#aaa', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Interested in scaling your infrastructure or automating your workflows? Let's talk about it.
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:vaishnavsaksham20021218@gmail.com" className="btn glass" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
              <Mail size={20} /> Email
            </a>
            <a href="https://github.com" target="_blank" className="btn glass" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
              <Github size={20} /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" className="btn glass" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
        <footer style={{ marginTop: '6rem', color: '#555', fontSize: '0.9rem' }}>
          <p>© 2026 Saksham Vaishnav. Built with Next.js and Cloud Vibe.</p>
        </footer>
      </section>
    </main>
  )
}

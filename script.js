const profile = {
  github: "https://github.com/ItsPiyushVishwakarma",
  linkedin: "https://www.linkedin.com/in/itspiyushkarma-cybersecurity",
  instagram: "https://www.instagram.com/itspiyushkarma",
};

const tracks = {
  blue: {
    accent: "blue-accent",
    title: "Blue Team Career",
    summary:
      "Current focus: SOC analyst skills, Python security tooling, digital forensics basics, cloud security fundamentals, network monitoring, and practical investigation workflows.",
    bullets: [
      "File integrity monitoring, log analysis, packet sniffing, vulnerability scanning, and cloud fundamentals are already visible in your work.",
      "Next strong additions: Wazuh or Splunk lab, phishing investigation report, Windows event log analysis, and incident response playbook.",
      "Keep every project proof-driven with screenshots, commands, detection logic, findings, and lessons learned.",
    ],
    stack: ["Wireshark", "Wazuh", "Splunk", "Windows Logs", "Linux", "Nmap", "MITRE ATT&CK"],
  },
  red: {
    accent: "red-accent",
    title: "Red Team Career",
    summary:
      "Future focus: ethical, lab-based offensive security work that supports stronger defensive thinking. This section is ready for CTFs, web labs, Active Directory labs, and writeups.",
    bullets: [
      "Your hash cracker, port scanner, and vulnerability scanner can sit here as ethical learning projects.",
      "Add future TryHackMe or Hack The Box writeups, vulnerable web app testing, Active Directory lab work, or privilege escalation notes.",
      "Document scope, methodology, findings, impact, and fixes. Never publish real target details without permission.",
      "Connect offensive learning back to defensive improvement whenever possible.",
    ],
    stack: ["Burp Suite", "Kali Linux", "Metasploit", "Gobuster", "OWASP Top 10", "Privilege Escalation"],
  },
  career: {
    accent: "blue-accent",
    title: "Career Profile",
    summary:
      "Career profile: MCA Cybersecurity student and aspiring SOC Analyst with practical projects in Python, digital forensics, network security, AWS cloud, and security documentation.",
    bullets: [
      "Add a short professional summary from your resume.",
      "Keep your availability, target role, location or remote preference, and strongest tools updated.",
      "Link GitHub, LinkedIn, resume, and top projects clearly.",
    ],
    stack: ["Security Analyst", "SOC Analyst", "Cybersecurity Intern", "Technical Writing", "GitHub Portfolio"],
  },
};

const projects = [
  {
    title: "Keylogger Email Alert",
    track: "Red Team / Malware Awareness",
    description:
      "Educational keylogger with automated email alerts, built to understand malware exfiltration techniques and improve defensive awareness.",
    tools: ["Python", "Email Alerts", "Malware Concepts", "Ethical Lab"],
    link: "https://github.com/ItsPiyushVishwakarma/Keylogger-Email-Alert",
  },
  {
    title: "Network Vulnerability Scanner",
    track: "Blue Team / Vulnerability Management",
    description:
      "Professional network vulnerability scanner using Nmap and Python with CVE lookup for security assessment and remediation practice.",
    tools: ["Python", "Nmap", "CVE Lookup", "HTML"],
    link: "https://github.com/ItsPiyushVishwakarma/Network-Vulnerability-Scanner",
  },
  {
    title: "Python Log Analyzer",
    track: "Blue Team",
    description:
      "Simple Python log analyzer for detecting suspicious events and practicing SOC-style log review.",
    tools: ["Python", "Logs", "Detection", "SOC"],
    link: "https://github.com/ItsPiyushVishwakarma/Python-Log-Analyzer",
  },
  {
    title: "Password Strength Checker",
    track: "Security Tooling",
    description:
      "Python password strength checker that scores password security and identifies missing security requirements.",
    tools: ["Python", "Password Policy", "Security Checks"],
    link: "https://github.com/ItsPiyushVishwakarma/Password-Strength-Checker",
  },
  {
    title: "Python Port Scanner",
    track: "Network Security",
    description:
      "TCP port scanner built with Python sockets to understand service discovery and basic network reconnaissance.",
    tools: ["Python", "Sockets", "TCP", "Networking"],
    link: "https://github.com/ItsPiyushVishwakarma/Python-Port-Scanner",
  },
  {
    title: "Password Hash Cracker",
    track: "Red Team / Cryptography Lab",
    description:
      "Educational password hash cracker demonstrating dictionary attacks, password security, and cryptographic hash analysis.",
    tools: ["Python", "Hashing", "Dictionary Attack", "Security Education"],
    link: "https://github.com/ItsPiyushVishwakarma/Password-Hash-Cracker",
  },
  {
    title: "Python Network Packet Sniffer",
    track: "Blue Team",
    description:
      "Python packet sniffer using Scapy to capture and analyze live network traffic including IPs, protocols, timestamps, and packet sizes.",
    tools: ["Python", "Scapy", "Packets", "Network Monitoring"],
    link: "https://github.com/ItsPiyushVishwakarma/Python-Network-Packet-Sniffer",
  },
  {
    title: "Python File Integrity Checker",
    track: "Blue Team / Detection",
    description:
      "File Integrity Monitoring tool using SHA256 hashing to detect unauthorized file modifications.",
    tools: ["Python", "SHA256", "FIM", "Integrity Monitoring"],
    link: "https://github.com/ItsPiyushVishwakarma/Python-File-Integrity-Checker",
  },
];

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Completed",
    description: "Cloud fundamentals, AWS services, shared responsibility, pricing, support, and cloud security basics.",
    file: "assets/certificates/aws-certified-cloud-practitioner.pdf",
  },
  {
    title: "Career Essentials in System Administration",
    issuer: "Microsoft and LinkedIn",
    date: "Completed",
    description: "System administration foundations useful for SOC operations, endpoint understanding, and IT infrastructure support.",
    file: "assets/certificates/career-essentials-system-administration-microsoft-linkedin.pdf",
  },
  {
    title: "Deloitte Cyber Job Simulation",
    issuer: "Deloitte",
    date: "Completed",
    description: "Practical cyber job simulation experience focused on workplace-style cybersecurity tasks.",
    file: "assets/certificates/deloitte-cyber-job-simulation.pdf",
  },
  {
    title: "Connect and Protect: Networks and Network Security",
    issuer: "Google",
    date: "Completed",
    description: "Networking and network security fundamentals from the Google Cybersecurity learning path.",
    file: "assets/certificates/google-connect-protect-network-security.pdf",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    date: "Completed",
    description: "Cybersecurity foundations, security domains, risk, roles, and beginner SOC concepts.",
    file: "assets/certificates/google-foundations-of-cybersecurity.pdf",
  },
  {
    title: "Play It Safe: Manage Security Risks",
    issuer: "Google",
    date: "Completed",
    description: "Security risk management, frameworks, controls, and practical defensive security concepts.",
    file: "assets/certificates/google-play-it-safe-manage-security-risks.pdf",
  },
  {
    title: "LinkedIn Learning Certificate",
    issuer: "LinkedIn Learning",
    date: "Completed",
    description: "Professional learning milestone supporting cybersecurity and IT career development.",
    file: "assets/certificates/linkedin-learning-certificate.pdf",
  },
  {
    title: "NASBA Certificate",
    issuer: "National Association of State Boards of Accountancy",
    date: "Completed",
    description: "Continuing professional education certificate from a NASBA-recognized learning program.",
    file: "assets/certificates/nasba-certificate.pdf",
  },
];

const themeToggle = document.querySelector("#themeToggle");
const trackDetails = document.querySelector("#trackDetails");
const projectGrid = document.querySelector("#projectGrid");
const certificationList = document.querySelector("#certificationList");

function setTheme(theme) {
  document.documentElement.classList.toggle("light", theme === "light");
  localStorage.setItem("theme", theme);
}

function renderTrack(trackKey) {
  const track = tracks[trackKey];
  trackDetails.innerHTML = `
    <div class="track-layout">
      <article class="track-card ${track.accent}">
        <p class="eyebrow">Selected Path</p>
        <h2>${track.title}</h2>
        <p>${track.summary}</p>
      </article>
      <article class="track-card">
        <h3>What to add here</h3>
        <ul>
          ${track.bullets.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <div class="tag-row">
          ${track.stack.map((item) => `<span class="tag">${item}</span>`).join("")}
        </div>
      </article>
    </div>
  `;
}

function renderProjects() {
  projectGrid.innerHTML = projects
    .map((project, index) => `
        <article class="project-card reveal" style="--delay: ${index * 70}ms">
          <div class="project-orb">${String(index + 1).padStart(2, "0")}</div>
          <p class="eyebrow">${project.track}</p>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tag-row">
            ${project.tools.map((tool) => `<span class="tag">${tool}</span>`).join("")}
          </div>
          <a class="card-link" href="${project.link}" target="_blank" rel="noreferrer">Open proof</a>
        </article>
      `)
    .join("");
}

function renderCertifications() {
  certificationList.innerHTML = certifications
    .map((cert, index) => `
        <article class="timeline-item reveal" style="--delay: ${index * 55}ms">
          <p class="eyebrow">${cert.issuer} / ${cert.date}</p>
          <h3>${cert.title}</h3>
          <p>${cert.description}</p>
          <a class="card-link" href="${cert.file}" target="_blank" rel="noreferrer">View certificate</a>
        </article>
      `)
    .join("");
}

function bootCursor() {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  document.querySelectorAll("a, button").forEach((item) => {
    item.addEventListener("mouseenter", () => document.body.classList.add("cursor-active"));
    item.addEventListener("mouseleave", () => document.body.classList.remove("cursor-active"));
  });

  function animateCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(animateCursor);
  }

  animateCursor();
}

function bootReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll(".reveal, .content-section, .switch-panel").forEach((item) => observer.observe(item));
}

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.classList.contains("light") ? "dark" : "light";
  setTheme(nextTheme);
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    renderTrack(button.dataset.track);
  });
});

setTheme(localStorage.getItem("theme") || "dark");
renderTrack("blue");
renderProjects();
renderCertifications();
bootCursor();
bootReveal();
document.querySelector("#year").textContent = new Date().getFullYear();

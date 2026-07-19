# Piyush Vishwakarma Cybersecurity Portfolio

This is a clean, static, GitHub Pages-ready cybersecurity portfolio.

## Files

- `index.html` - page structure and contact links
- `styles.css` - cyber blue/red theme, responsive layout, dark/light mode
- `script.js` - editable projects, certifications, and career switch content
- `assets/images/security-dashboard.svg` - hero visual
- `assets/resume/README.md` - resume placement instructions

## What to customize first

1. Replace `your.email@example.com` in `index.html`.
2. Put your real resume PDF in `assets/resume/` and name it `Piyush_Vishwakarma_Resume.pdf`.
3. Edit the `projects` array in `script.js`.
4. Edit the `certifications` array in `script.js`.
5. Update the hero summary in `index.html` with your real profile.

## Add a new project

Copy this inside the `projects` array in `script.js`:

```js
{
  title: "My New Project",
  track: "Blue Team",
  description: "What you built, what tools you used, and what security problem it solves.",
  tools: ["Tool 1", "Tool 2"],
  link: "https://github.com/ItsPiyushVishwakarma/repository-name",
}
```

## Add a certification

Copy this inside the `certifications` array in `script.js`:

```js
{
  title: "Certification Name",
  issuer: "Issuer",
  date: "Issued Month Year",
  description: "What it proves and any verification link details.",
}
```

## Deploy on GitHub Pages

1. Create a public GitHub repository named `cybersecurity-portfolio`.
2. Upload everything inside this folder.
3. Make sure `index.html` is in the root of the repository.
4. Go to `Settings` > `Pages`.
5. Under `Build and deployment`, choose `Deploy from a branch`.
6. Select branch `main` and folder `/root`.
7. Your public site should become:

```text
https://ItsPiyushVishwakarma.github.io/cybersecurity-portfolio/
```

## Strong project ideas to add later

- Wazuh or Splunk SOC lab with screenshots and alert investigation.
- Wireshark PCAP investigation writeup.
- Phishing email analysis report.
- Vulnerability scanning lab with remediation notes.
- TryHackMe or Hack The Box writeups for red team practice.
- Active Directory attack-and-detect lab.
- Incident response playbook mapped to MITRE ATT&CK.

## Portfolio references used for direction

- GitHub security analyst topic pages show that SOC notes, incident response, threat hunting, and automation are strong proof-of-work categories.
- Current cybersecurity portfolio advice recommends showing practical work, not only certificates.
- Red team project collections are useful for future lab ideas, but publish only ethical lab work or authorized testing.

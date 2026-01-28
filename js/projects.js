const projects = {
  threatintel_pcap_threathunt: {
  title: "PCAPThreatHunter",
  tags: ["Network Security", "Threat Intelligence", "IOC Analysis", "Blue Team"],
  language: "Python",
  description:
    "A Python-based tool that analyzes PCAP files using Zeek, extracts Indicators of Compromise, and enriches them with threat intelligence data.",
  summary: `
    <ul>
      <li>Processed PCAP files with Zeek to generate detailed network logs</li>
      <li>Converted Zeek JSON logs into CSV format for structured analysis</li>
      <li>Extracted IOCs such as IPs, domains, URLs, and hashes from network traffic</li>
      <li>Enriched extracted IOCs using multiple threat intelligence APIs</li>
      <li>Cached IOC lookups in Redis to improve performance and reduce API usage</li>
      <li>Designed the tool with a modular architecture for maintainability</li>
    </ul>
  `,
  github: "https://github.com/cyber-pands/PCAP-Threat-Hunter"
},

  siem_wazuh: {
  title: "Wazuh Home Security Lab",
  tags: ["SOC", "SIEM", "Monitoring", "Blue Team"],
  language: "Wazuh / Linux / Windows",
  description:
    "A hands-on security monitoring lab built using Wazuh to understand real-world log ingestion, alerting, and investigation across Windows and Linux systems.",
  summary: `
    <ul>
      <li>Designed a hybrid lab with a Wazuh server hosted on AWS EC2</li>
      <li>Integrated Windows 11 and Ubuntu endpoints for cross-platform monitoring</li>
      <li>Implemented File Integrity Monitoring with aggressive check intervals for near real-time visibility</li>
      <li>Monitored authentication events to detect failed logins and suspicious access attempts</li>
      <li>Tracked system services and processes to identify unauthorized changes</li>
      <li>Gained practical experience balancing cloud infrastructure with local testing environments</li>
    </ul>
  `,
  github: "https://pands.notion.site/Building-a-Wazuh-SIEM-Lab-on-Mac-From-Setup-to-Security-Monitoring-1e5f18c9293a802584fbd4978c846eaa#1e5f18c9293a80898f64e65722057416"
},
endps_secureguard: {
  title: "SecureGuard",
  tags: ["Endpoint Security", "Linux Security", "Blue Team", "Automation"],
  language: "Python",
  description:
    "A command-line security tool for Linux systems that integrates multiple open-source security tools into a single, unified workflow.",
  summary: `
    <ul>
      <li>Built a Python-based CLI tool to orchestrate multiple Linux security utilities</li>
      <li>Integrated OSSEC for host-based intrusion detection and log monitoring</li>
      <li>Performed vulnerability scanning using OpenVAS</li>
      <li>Implemented endpoint malware scanning with ClamAV</li>
      <li>Enabled file encryption and decryption using GnuPG</li>
      <li>Executed system auditing and compliance checks using Lynis</li>
      <li>Designed the tool with modular functions for maintainability and extensibility</li>
    </ul>
  `,
  github: "https://github.com/cyber-pands/Secure_Guard"
},
nts_recon: {
  title: "Simple Auto Recon",
  tags: ["Network Security", "Reconnaissance", "Automation"],
  language: "Python",
  description:
    "A Python-based automation tool that performs common reconnaissance tasks by chaining multiple network enumeration commands into a single workflow.",
  summary: `
    <ul>
      <li>Automated basic host reconnaissance using commonly used Linux networking tools</li>
      <li>Performed host availability checks using ping</li>
      <li>Collected domain and ownership information using whois</li>
      <li>Queried DNS records using dig for domain analysis</li>
      <li>Mapped network paths using traceroute</li>
      <li>Executed aggressive Nmap scans including vulnerability scripts</li>
      <li>Simplified repetitive reconnaissance steps into a single command-line execution</li>
    </ul>
  `,
  github: "https://github.com/cyber-pands/Simple_Auto_Recon_Tool-main"
}
};

/* Load project into main area */
function loadProject(key) {
  const project = projects[key];
  const container = document.getElementById("projects-content");

  const tagsHTML = project.tags
    .map(tag => `<span class="tag">${tag}</span>`)
    .join("");

  container.innerHTML = `
  <div class="project-detail">

    <h1 class="project-title">${project.title}</h1>

    <div class="project-tags">
      ${tagsHTML}
    </div>

    <div class="project-lang">
      <span>Language:</span> ${project.language}
    </div>

    <p class="project-description">
      ${project.description}
    </p>

    <div class="project-summary">
      <h3>Summary</h3>
      ${project.summary}
    </div>

    <a
      class="project-link"
      href="${project.github}"
      target="_blank"
      rel="noopener"
    >
      View Project →
    </a>

  </div>
`;
}

/* Toggle folders */
function toggleFolder(el) {
  const items = el.nextElementSibling;
  items.style.display = items.style.display === "block" ? "none" : "block";
}
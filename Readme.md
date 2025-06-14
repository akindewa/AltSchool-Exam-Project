# Cloud-Based Web Server Deployment | AltSchool Semester Project
## Deploying a Secure Nginx Web Server with Node.js Proxy on AWS EC2
## Project Overview: 
 This project involved provisioning an AWS EC2 instance, setting up Nginx as a web server, creating a dynamic landing page, and configuring a reverse proxy for a Node.js application. The system was secured with Let’s Encrypt SSL (HTTPS) and tested for production readiness.

 ### Technologies Used:
 - **Cloud Provider:** AWS EC2 (Ubuntu 24.04 LTS)
 - **Web Server:** Nginx
 - **Backend:** Node.js (for reverse proxy demo)
 - **Security:** Let’s Encrypt (Certbot), UFW firewall
 - **Domain:** `https://34.255.207.159.nip.io/` (temporary SSL domain for IP)

 ##  Step-by-Step Implementation
 ### 1. Provisioning the Server (AWS EC2)
    Launched an Ubuntu 24.04 LTS instance on AWS EC2.


 ####   Security Group Rules:
 - SSH (Port 22)  
- HTTP (Port 80)  
- HTTPS (Port 443)

**Connecting via SSH:**
- ** Navigate to the downloaded key pair location 

```bash
ssh -i "key.pem" ubuntu@ec2-34-255-207-159.eu-west-1.compute.amazonaws.com
```

---

## 2. Web Server Setup (Nginx)
**Install Nginx:**

```bash
sudo apt update && sudo apt install nginx -y
```

**Start and Enable Nginx:**
```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```
**Verifying  Installation:**
```bash
curl http://localhost
```

---





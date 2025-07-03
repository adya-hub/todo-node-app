# TODO Application on AWS ECS with ALB

This project is a simple Node.js TODO application deployed using Docker containers on **AWS ECS (Fargate)** behind an **Application Load Balancer (ALB)**. It demonstrates modern container orchestration and CI/CD deployment pipelines.

---

## 🚀 Features

✅ Node.js app with HTTP server  
✅ Dockerized for easy containerization  
✅ Deployed on AWS ECS (Fargate)  
✅ Integrated with AWS Application Load Balancer  
✅ Infrastructure-as-Code with ECS Task Definition JSON  
✅ Automated deployment using GitHub Actions

---

## 📁 Project Structure

todo-app/
|-- app.js
|-- index.html
|-- Dockerfile
|-- package.json
|-- .github/
|-- workflows/
|-- main.yml
|-- ecs-task-definition.json


---

## 🖼️ Architecture Diagram

```plaintext
┌──────────────────────────────────────────────────────────────┐
│                          Users                               │
│                        (Browser)                             │
└──────────────────────────────────────────────────────────────┘
                │
                ▼
┌──────────────────────────────────────────────────────────────┐
│              AWS Application Load Balancer (ALB)             │
│                 (listens on port 80/443)                     │
└──────────────────────────────────────────────────────────────┘
                │
                ▼
┌──────────────────────────────────────────────────────────────┐
│                  AWS ECS (Fargate) Cluster                   │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │                   ECS Service                          │  │
│  │                                                        │  │
│  │  ┌──────────────────────────────────────────────────┐  │  │
│  │  │              ECS Task (container)                │  │  │
│  │  │     (Node.js app running on port 3000)           │  │  │
│  │  └──────────────────────────────────────────────────┘  │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘

⚙️ How it works
Users make HTTP requests to the ALB.

The ALB forwards requests to the ECS service target group.

ECS runs your Node.js app in a Fargate container, exposing port 3000 internally.

The ALB listens on port 80 and forwards traffic to the ECS task’s port 3000.

Health checks monitor the container’s health to keep the service highly available.

🌐 Application Endpoints
/ → loads the HTML todo page

/add → POST endpoint to add a new task

🛠️ Tech Stack
Node.js

Docker

AWS ECS (Fargate)

AWS ALB

GitHub Actions

🚦 CI/CD
This repo uses GitHub Actions to automate the following:

build the Docker image

push to Amazon ECR

update the ECS service with a new task definition

The workflow file is in:

bash
Copy
Edit
.github/workflows/main.yml
📝 Deployment Instructions (high-level)
Push your code to GitHub

GitHub Actions builds and pushes the Docker image to ECR

ECS service is updated with a new task definition

ALB routes external traffic to the ECS container

💡 Future Improvements
Add DynamoDB for task persistence

Use environment variables for secrets

Add HTTPS with ACM certificates

Implement frontend framework like React

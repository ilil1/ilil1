![Ai Engineer · Backend / Infra](https://raw.githubusercontent.com/ilil1/ilil1/8d6ca304581456e3e131da4c8e512ed3e519d9ce/assets/ai-engineer-banner.svg)

#  Kim geon woo

4년 차 소프트웨어 엔지니어로서 다양한 Ai Agent 설계·구현부터 LLMOps 까지 Ai 서비스의 통합 시스템을 구축했습니다.  
Evals로 LLM의 응답 품질 평가, Observability 로써 Tracing 및 Monitoring을 하는 LLMOps를 설계 및 구현했습니다.  
ML·DL 알고리즘과 모델 학습 원리를 익히고, LoRA 기반 파인튜닝을 개인 프로젝트로 Ai 에 대한 개발 역량을 넓히고 있습니다.  
데이터 특성에 맞는 DB 선정·스키마 설계, 확장 가능한 프론트·백엔드 어플리케이션 아키텍처 설계 역량을 갖추고 있습니다.
서비스를 AWS EKS 기반 Kubernetes 환경에 배포하고, Helm·Argo CD를 활용한 GitOps 배포 자동화를 초기부터 구축한 경험이 있습니다.  
회사의 앱 서비스의 개발·배포를 담당하고, 기존 네이티브 앱의 Flutter 전환을 초기 설계부터 마이그레이션까지 수행했습니다.  
최근에는 개인 프로젝트에서 MLOps를 학습하며 ML·DL 서비스의 배포·운영 인프라를 구축하고 있습니다.   
또한 개발자로써 기술적 역할에만 국한하지 않으며 제품의 문제를 해결하는 팀원으로써 가능한 모든 부분에 적극적으로 참여합니다.  

# Project

### 1. Ai Agent 를 활용한 **정부지원사업 탐색·신청 관리 플랫폼 고도화**

(2026.9.20 ~ 2026.10.15)

- **프로젝트 원본 링크 :** [https://github.com/ilil1/SKN34-4th-1Team](https://github.com/ilil1/SKN34-4th-1Team)
- 사용자 의도에 따라 업무별 기능을 연결하는 LLM 기반 슈퍼바이저 에이전트 설계 및 구현.
- Ops-service 운영 API와 Langfuse·Prefect를 연동해 LLM 응답 품질 평가·추적·실행 관리 체계인 LLMOps를 구축.
- 서비스를 AWS EKS 기반 Kubernetes 환경에 배포하고, Helm·Argo CD를 활용한 GitOps 배포 자동화를 초기부터 구축.
- Core·Catalog·AI·Ops로 책임을 분리한 마이크로서비스 아키텍처 설계.
- React 웹과 React Native 앱이 도메인·API 클라이언트·응답 검증을 공유하고, 플랫폼별 인증·전송 처리는 분리 설계.

#### 사용 기술

- **Ai 에이전트:** LangChain, LangGraph, MCP-Server, OpenAI API
- **검색:** Elasticsearch(Nori/BM25), Qdrant
- **LLMOps:** Langfuse, Prefect, Evidently
- **Infra & Cloud:** AWS (EKS, ECR, EC2, EBS), Docker, Kubernetes, Helm

<details>
<summary>전체 사용 기술 보기</summary>

| 영역 | 적용 기술 |
|---|---|
| Ai 에이전트 | LangChain, LangGraph, MCP-Server, OpenAI API |
| LLMOps | Langfuse, Prefect, Evidently |
| Infra & Cloud | AWS (EKS, ECR, EC2, EBS), Docker, Kubernetes, Helm |
| CI/CD | GitHub Actions, Argo CD, AWS (CodeBuild) |
| 백엔드 | FastAPI, Django, Spring Boot, Mybatis, Flyway |
| 데이터 저장·검색 | MySQL, Elasticsearch(Nori/BM25), Qdrant |
| 캐시·비동기 처리 | Redis, RabbitMQ |
| 프론트엔드 | React, Redux, React Hooks, Zod, Tailwind, React Router |
| 모바일 | React Native, Firebase App Distribution |

</details>

### 2. Ai Agent 를 활용한 **정부지원사업 탐색·신청 관리 플랫폼**

(2026.9.2 ~ 2026.9.17)

- **프로젝트 원본 링크 :** [https://github.com/ilil1/SKN34-3rd-1Team](https://github.com/ilil1/SKN34-3rd-1Team)
- Elasticsearch(Nori·BM25)와 Qdrant hybrid 검색에 RRF·LLM 재순위화를 적용, 원문의 인용을 검증하는 RAG 응답 기능 구현.
- Core API(Spring Boot)·Ai Service(FastAPI)의 책임 분리 및 서비스 간 API 통신·데이터 흐름 설계.
- 백엔드의 레이어드 아키텍처와 프론트엔드의 클린아키텍처 및 MVVM / Flux 패턴 설계.
- Vercel 기반 프론트엔드 및 AWS CodeBuild·ECR·SSM 기반 백엔드 CD 파이프라인 구축.
- AWS EC2·RDS의 프라이빗 서브넷 배치 및 CloudFront·Nginx 라우팅·NAT Gateway 외부 통신 구성.

#### 사용 기술

- **Ai 에이전트:** LangChain, LangGraph, MCP-Server, OpenAI API
- **검색:** Elasticsearch(Nori/BM25), Qdrant
- **Infra & Cloud:** AWS (EC2, RDS, ECR), Docker, Docker Compose

<details>
<summary>전체 사용 기술 보기</summary>

| 영역 | 적용 기술 |
|---|---|
| Ai 에이전트 | LangChain, LangGraph, MCP-Server, OpenAI API |
| Infra & Cloud | AWS (EC2, RDS, ECR), Docker, Docker Compose |
| CI/CD | GitHub Actions, AWS (CodeBuild) |
| 백엔드 | FastAPI, Spring Boot, Mybatis, Flyway |
| 데이터 저장·검색 | MySQL, Elasticsearch(Nori/BM25), Qdrant |
| 캐시·비동기 처리 | Redis, RabbitMQ |
| 프론트엔드 | React, Redux, React Hooks, Zod, Tailwind, React Router |

</details>

# Tech Stack

| 영역 | 적용 기술 |
|---|---|
| Language | Python, Kotlin, Java, Dart, Swift, JavaScript  |
| Ai 에이전트 | LangChain, LangGraph, MCP-Server |
| Ai 평가·모니터링 | Langfuse, Langsmith, MLflow, Evidently |
| 워크플로 오케스트레이션 | Apache Airflow, Prefect |
| ML/DL 및 Model | Scikit_Learn, PyTorch, Fine-tuning |
| 백엔드 | FastAPI, Django, Spring Boot, Laravel |
| Infra & Cloud | AWS (EKS, Lambda, S3, RDS), Docker, Docker-Compose, Kubernetes, Helm|
| CI/CD | Argo CD, GitHub Actions, Fastlane, CircleCI|
| 데이터 저장·검색 | MySQL, Elasticsearch(Nori/BM25), Qdrant, neo4j, BigQuery |
| 캐시·비동기 처리 | Redis, RabbitMQ |
| 프론트엔드 | React, Vue.js |
| 모바일 | Android, iOS, Flutter |
| Firebase Service | Firebase App Distribution, Firebase Cloud Messaging (FCM), Firebase Analytics, Firebase Crashlytics |




# SNS

<a href="https://velog.io/@ilil1"><img src="https://img.shields.io/badge/Tech%20Blog-11B48A?style=flat-square&logo=Vimeo&logoColor=white&link=https://velog.io/@ilil1"/></a>

<!--
**ilil1/ilil1** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->

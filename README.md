<div align="center">

# Inki-Bot-Backend

</div>

## Overview
This repository contains the backend implementation of Inki-Bot, an AI-powered chatbot application designed for internal use by the INKI team.

## Architecture

The system is built using a modern, scalable tech stack with the following components:

### Frontend: Retool
- **Why Retool?** 
  - Rapid development of internal tools
  - Built-in authentication and authorization
  - Native database integration
  - Drag-and-drop UI components for quick iterations
  - Easy API integration capabilities

### Backend: Trigger.dev
- **Why Trigger.dev?**
  - Serverless architecture for better scalability
  - Built-in job scheduling and queuing
  - Easy integration with OpenAI and other APIs
  - Automatic retries and error handling
  - Cost-effective for variable workloads

### Database: Retool Native POSTGRESdb
- **Why Retool's POSTGRESdb?**
  - Seamless integration with Retool frontend
  - Built-in backup and security features
  - No additional database setup required
  - ACID compliance for data integrity
  - SQL querying capabilities

### AI Integration: OpenAI API
- **Why OpenAI API?**
  - State-of-the-art language models
  - Robust API documentation and support
  - Flexible model selection based on needs
  - High reliability and uptime
  - Continuous model improvements

## Setup Instructions

### Backend Setup

1. Create and navigate to the project directory:
   ```sh
   mkdir inkibot
   cd inkibot
   ```

2. Initialize Trigger.dev
   - Follow the setup instructions at: [Trigger.dev Quick Start](https://trigger.dev/docs/quick-start)
   - Test with the provided test task

3. Clone the repository:
   ```sh
   git clone https://github.com/moldovanvictor/inki-bot-backend
   ```
   > **Note:** If you encounter merging issues, ensure that `response-generator.ts` files are present in the `trigger` folder within the `src` directory.

4. Configure environment variables:
   - Create a `.env` file in the root directory
   - Add your OpenAI API key:
     ```env
     OPENAI_SECRET_KEY="<YOUR_OPENAIAPI_SECRET_KEY>"
     ```

5. Start the Trigger.dev backend:
   ```sh
   npx trigger.dev@latest dev
   ```

### Frontend Setup

The Retool frontend requires configuration of two REST API queries:
1. `sendtoAI`
2. `getResponseFromAI`

#### API Configuration
Both queries require authentication headers:
| Header Name | Value |
|------------|-------|
| `Authorization` | Your Trigger.dev API key |

> Find your API key in the Trigger.dev API keys section

## Usage
Once both frontend and backend are properly configured and running, you can start interacting with INKI Bot by asking questions through the interface.

## System Requirements
- Node.js (version specified in the project)
- NPM or Yarn
- Access to Retool
- OpenAI API key
- Trigger.dev account and API key

## Contributing
Please refer to the project's contributing guidelines for information on how to contribute to this repository.

## Support
For any issues or questions, please open an issue in the GitHub repository.

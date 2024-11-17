# Inki-Bot-Backend

## Overview
This repository contains the backend implementation of Inki-Bot, an AI-powered chatbot application designed for internal use by the INKI team. The system architecture includes:

- Frontend: Built with Retool
- Backend: Powered by Trigger.dev
- Database: Retool native POSTGRESdb wrapper
- AI Integration: OpenAI API

## Setup Instructions

### Backend Setup

1. Create and navigate to the project directory:
```bash
mkdir inkibot
cd inkibot
```

2. Initialize Trigger.dev
- Follow the setup instructions at: https://trigger.dev/docs/quick-start
- Test with the provided test task

3. Clone the repository:
```bash
git clone https://github.com/moldovanvictor/inki-bot-backend
```
**Note:** If you encounter merging issues, ensure that `response-generator.ts` files are present in the `trigger` folder within the `src` directory.

4. Configure environment variables:
- Create a `.env` file in the root directory
- Add your OpenAI API key:
```
OPENAI_SECRET_KEY="<YOUR_OPENAIAPI_SECRET_KEY>"
```

5. Start the Trigger.dev backend:
```bash
npx trigger.dev@latest dev
```

### Frontend Setup

The Retool frontend requires configuration of two REST API queries:
1. `sendtoAI`
2. `getResponseFromAI`

#### API Configuration
Both queries require authentication headers:
- Header Name: `Authorization`
- Value: Your Trigger.dev API key (found in the Trigger.dev API keys section)

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

# An AI-Powered Banking Assistant Using RAG and Vector Database with Voice & Text Interface

## Image1 : A simple Gen AI Banking Chatbot with both Text and Speech Input

<img width="960" height="540" alt="1" src="https://github.com/user-attachments/assets/1787a14a-be75-4518-9152-987e5a519316" />

## Image2 : A simple Gen AI Banking Chatbot with both Text and Speech Input

<img width="960" height="540" alt="2" src="https://github.com/user-attachments/assets/92bb2cad-808b-49a1-998f-b8a2fc553475" />

## Image3 : A simple Gen AI Banking Chatbot with both Text and Speech Input

<img width="960" height="540" alt="3" src="https://github.com/user-attachments/assets/38807749-f18c-455f-87f5-03721abee065" />

## Image4 : A simple Gen AI Banking Chatbot with both Text and Speech Input

<img width="960" height="540" alt="4" src="https://github.com/user-attachments/assets/2c2507e2-11b1-4c5f-9263-3f2b3e4b943d" />

## Project Description

This project develops an AI-powered banking chatbot that leverages Retrieval-Augmented Generation (RAG) with a vector database (Pinecone) to provide accurate, context-aware responses to customer queries. The chatbot is designed to handle interactions via both text and voice input, making it accessible and user-friendly.

A dataset of banking queries and responses is ingested, converted into document embeddings using HuggingFace sentence transformers, and stored in Pinecone for fast similarity search. When a user submits a query (via text or speech), the system retrieves the most relevant responses from the vector database and passes them to the Groq-powered LLaMA-3.3 model to generate a natural, conversational reply.

The application is deployed using FastAPI, with endpoints supporting both text-based chat and voice-based chat. The voice input is processed through speech recognition (Google Speech API) after conversion from audio to WAV format. The system returns both the interpreted query and the generated response.

## Key Features

LlamaIndex → as the orchestration framework (to create VectorStoreIndex, documents, query engine).

RAG-based Banking Chatbot: Combines LLM reasoning with vector DB retrieval for precise answers.

Voice & Text Input Support: Users can interact using speech or typing.

Vector Database Integration (Pinecone): Enables fast and scalable semantic search.

Embeddings with HuggingFace Models: Efficient document vectorization.

LLM-powered Responses (Groq + LLaMA-3.3): Generates natural and context-aware replies.

FastAPI Backend: Provides REST endpoints for seamless integration with web/mobile apps.

## Tech Stack

Python (Core development)

FastAPI (Backend API framework)

Pinecone (Vector database for semantic search)

LLaMA-3.3 (via Groq API) (LLM for response generation)

HuggingFace MiniLM-L6-v2 (Embeddings)

SpeechRecognition + Pydub (Voice input processing)

Pandas (Dataset handling)

## To run the FastAPI app using Anaconda Prompt, follow these steps:

## ✅ Step-by-Step Instructions
**🔹 1. Open Anaconda Prompt**
Launch Anaconda Prompt from your Start Menu (not Jupyter or Python console).

**🔹 2. Navigate to the Project Folder**
Unzip the file you downloaded (neo_fastapi_app.zip), then use cd to move into that folder:
cd path\to\Banking_Chatbot
Example (if you unzipped on Desktop):
cd C:\Users\YourName\Desktop\Banking_Chatbot

**🔹 3. Create and Activate a New Conda Environment (optional but recommended)**
conda create -n Banking_Chatbot python=3.10 -y
conda activate Banking_Chatbot

**🔹 4. Install the Requirements**
pip install -r requirements.txt

**🔹 5. Run the FastAPI App**
uvicorn app:app --reload
You should see output like:
    Uvicorn running on http://127.0.0.1:8000

**🔹 6. Open in Browser**
Visit:
http://127.0.0.1:8000
You’ll see your Banking Chatbot interface.



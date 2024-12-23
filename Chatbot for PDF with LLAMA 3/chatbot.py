from botocore.exceptions import ClientError
from PyPDF2 import PdfReader
import boto3
import gradio as gr


client = boto3.client("bedrock-runtime", region_name="us-east-1")


model_id = "us.meta.llama3-2-11b-instruct-v1:0"


def extract_text_from_pdf(pdf_path):
    """
    Extract text from a PDF file.
    :param pdf_path: Path to the PDF file.
    :return: Extracted text as a string.
    """
    reader = PdfReader(pdf_path)
    text = "".join([page.extract_text() for page in reader.pages])
    return text


def chatbot_conversation(pdf_path, user_message):
    """
    Handles the chatbot conversation using AWS Bedrock LLaMA 3.
    :param pdf_path: Path to the uploaded PDF file.
    :param user_message: User's message to the chatbot.
    :return: Model's response to the user's message.
    """
  
    pdf_text = extract_text_from_pdf(pdf_path.name)


    truncated_text = pdf_text[:4000]  


    conversation = [
        {
            "role": "user",
            "content": [{"text": user_message}]  
        },
        {
            "role": "assistant",
            "content": [{"text": f"The document says: {truncated_text}. Please ask your specific question."}]  
        },
        {
            "role": "user",
            "content": [{"text": user_message}]  
        }
    ]

    try:
 
        response = client.converse(
            modelId=model_id,
            messages=conversation,
            inferenceConfig={"maxTokens": 512, "temperature": 0.5, "topP": 0.9},
            additionalModelRequestFields={}
        )


        response_text = response["output"]["message"]["content"][0]["text"]
        return response_text

    except (ClientError, Exception) as e:
        return f"ERROR: Can't invoke '{model_id}'. Reason: {e}"


with gr.Blocks() as interface:
    gr.Markdown("## PDF Reader Chatbot with LLaMA 3")
    gr.Markdown("Upload a PDF and ask questions about its content. Powered by AWS Bedrock LLaMA 3.")
    
    with gr.Row():
        pdf_file = gr.File(label="Upload PDF")
        user_message = gr.Textbox(label="Ask a Question", placeholder="Type your question here...")
    
    response = gr.Textbox(label="Response", interactive=False)
    submit_button = gr.Button("Submit")

   
    submit_button.click(
        fn=chatbot_conversation,
        inputs=[pdf_file, user_message],
        outputs=response
    )


if __name__ == "__main__":
    interface.launch()

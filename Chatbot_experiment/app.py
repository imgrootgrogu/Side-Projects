from flask import Flask, render_template, request, jsonify
from transformers import BloomTokenizerFast, BloomForCausalLM

app = Flask(__name__)

# Load the model and tokenizer
try:
    model = BloomForCausalLM.from_pretrained("bigscience/bloom-560m")
    tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom-560m")
except Exception as e:
    print("Error loading model or tokenizer:", e)
    raise

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get_response", methods=["POST"])
def get_response():
    try:
        user_input = request.json.get("message")
        
        # Generate a response using Bloom
        input_ids = tokenizer.encode(user_input, return_tensors="pt")
        output = model.generate(input_ids, max_length=50)
        response = tokenizer.decode(output[0], skip_special_tokens=True)
        
        return jsonify({"response": response})
    except Exception as e:
        print("Error during response generation:", e)
        return jsonify({"response": "Sorry, I couldn't process your request."})

if __name__ == "__main__":
    app.run(debug=True)

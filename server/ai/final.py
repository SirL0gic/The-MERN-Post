import onnxruntime as ort
from transformers import AutoTokenizer
import numpy as np
import sys

def softmax(logits):
    exps = np.exp(logits - np.max(logits))
    return exps / np.sum(exps, axis=1, keepdims=True)

def get_sentiment(text):
    # Load ONNX model
    session = ort.InferenceSession("/Users/abis/Desktop/ai/onnx_models/distilbert-sst2.onnx")


    # Convert text to model input using tokenizer
    tokenizer = AutoTokenizer.from_pretrained('distilbert-base-uncased-finetuned-sst-2-english')
    inputs = tokenizer(text, return_tensors="np")
    onnx_inputs = {name: np.array(inputs[name]) for name in inputs}

    # Run model
    logits = session.run(None, onnx_inputs)[0]
    probs = softmax(logits)[0]

    # Decode model output to sentiment
    sentiment = "positive" if logits[0][1] > logits[0][0] else "negative"

    return {
        "sentiment": sentiment,
        "positive_probability": probs[1],
        "negative_probability": probs[0]
    }

sample_text = sys.argv[1]  # get text from command-line argument
result = get_sentiment(sample_text)
print(f"Sentiment: {result['sentiment']}")
print(f"Positive Probability: {result['positive_probability']:.2%}")
print(f"Negative Probability: {result['negative_probability']:.2%}")


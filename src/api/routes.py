"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from api.send_email import send_email


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

# Define your routes here

@api.route("/contactUs", methods=["POST"])
def contactUs():
    data = request.json
    email = data.get("email")
    comment = data.get("comment")

    if not email:
        return jsonify({"message": "Email is required"}), 400    
    if not comment:
        return jsonify({"message": "Please give us your comment."}), 400 
    
    email_value = email + "\n\n" + comment
    send_email("miami612023@gmail.com", email_value, "Comment from the user")
    return jsonify({"message": "Thank you for your comment."}), 200



@api.route("/sendEmail", methods=["POST"])
def handle_send_email():
    data = request.json
    recipient = data.get("recipient")
    body = data.get("body")
    subject = data.get("subject", "No Subject Provided")

    # Check for missing recipient or body
    if not recipient or not body:
        return jsonify({"error": "Recipient and body are required"}), 400

    try:
        send_email(recipient, body, subject)
        return jsonify({"message": "Email sent successfully"}), 200
    except Exception as e:
        print(f"Error sending email: {str(e)}")  # Log the error
        return jsonify({"error": str(e)}), 500

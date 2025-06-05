import smtplib
from email.message import EmailMessage
import os 

MAIL_SERVER = 'smtp.gmail.com'  # Replace with your email provider's SMTP server
MAIL_PORT = 465                 # TLS port
MAIL_USE_TLS = True
MAIL_USERNAME = 'dshustin@gmail.com'  # Your email address
MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')  # Your email password

def send_email(recipient, body, subject, sender_email=None):
    try:
        with smtplib.SMTP_SSL(MAIL_SERVER, MAIL_PORT) as server:
            server.login(MAIL_USERNAME, MAIL_PASSWORD)
            msg = EmailMessage()
            msg['Subject'] = subject
            msg['From'] = MAIL_USERNAME  # Must be your Gmail
            msg['To'] = recipient
            if sender_email:
                msg['Reply-To'] = sender_email  # Allow replying directly to user
            msg.set_content(body)  # Only include the actual message
            server.send_message(msg)
    except smtplib.SMTPException as e:
        raise Exception(f"Failed to send email: {str(e)}")

# When calling the function, pass your email as the recipient
# send_email('dshustin@gmail.com', email_body, subject)
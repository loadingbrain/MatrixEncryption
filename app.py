from flask import Flask, render_template, request

app = Flask(__name__)

def caesar_cipher_encrypt(message, shift):
    encrypted_message = ""
    for char in message:
        if char.isalpha():
            is_upper = char.isupper()
            char_index = ord(char.lower()) - ord('a')
            char_index = (char_index + shift) % 26
            encrypted_char = chr(char_index + ord('a'))
            if is_upper:
                encrypted_char = encrypted_char.upper()
            encrypted_message += encrypted_char
        else:
            encrypted_message += char
    return encrypted_message

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        message = request.form['message']
        shift = int(request.form['shift'])
        encrypted_message = caesar_cipher_encrypt(message, shift)
        return render_template('index.html', encrypted_message=encrypted_message)
    return render_template('index.html', encrypted_message=None)

if __name__ == '__main__':
    app.run(debug=True)

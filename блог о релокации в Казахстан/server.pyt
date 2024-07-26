import requests

def send_message_to_telegram(article_title, article_url, bot_token, chat_id):
    message = f"Новая статья: {article_title}\n{article_url}"
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = {
        'chat_id': chat_id,
        'text': message,
        'parse_mode': 'HTML'
    }
    response = requests.post(url, data=payload)
    return response.json()

# Пример использования
bot_token = '7323314919:AAHykINTcIHx2Y16AnhHKuOtCkVXDFMWEaI'
chat_id = '@Nomad Kazakh'
article_title = "Пример статьи"
article_url = "https://yourwebsite.com/articles/example"

send_message_to_telegram(article_title, article_url, bot_token, chat_id)
from flask import Flask, request, redirect, url_for
import requests

app = Flask(__name__)

bot_token = 'YOUR_BOT_TOKEN'
chat_id = '@yourchannel'

def send_message_to_telegram(article_title, article_url):
    message = f"Новая статья: {article_title}\n{article_url}"
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = {
        'chat_id': chat_id,
        'text': message,
        'parse_mode': 'HTML'
    }
    response = requests.post(url, data=payload)
    return response.json()

@app.route('/add_article', methods=['POST'])
def add_article():
    title = request.form['title']
    content = request.form['content']
    # Сохраните статью в базе данных
    # article_url = URL новой статьи
    article_url = 'https://yourwebsite.com/articles/example'
    
    # Отправьте сообщение в Telegram
    send_message_to_telegram(title, article_url)
    
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)


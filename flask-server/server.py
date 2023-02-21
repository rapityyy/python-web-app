from flask import Flask, request, jsonify
from bot import bot

app = Flask(__name__)

@app.route('/send-message', methods=['POST'])
def send_message():
    message = request.json.get('message')
    channel_id = request.json.get('channel_id')
    bot.bot.loop.create_task(
        bot.bot.get_channel(channel_id).send(message)
    )
    return jsonify({'success': True})

@app.route('/bot-status')
def get_bot_status():
    
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run()

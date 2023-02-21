


# import discord
from discord.ext import commands

class DiscordBot:
    def __init__(self, token):
        self.bot = commands.Bot(command_prefix='!')
        self.token = token

    def start(self):
        @self.bot.event
        async def on_ready():
            print(f'Logged in as {self.bot.user.name} ({self.bot.user.id})')

        self.bot.run(self.token)

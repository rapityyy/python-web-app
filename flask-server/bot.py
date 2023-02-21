


from discord_bot import DiscordBot

TOKEN = 'MTA3NzQyNDQ5NzQ4MjgwMTE1Mg.G2SF5Q.JhhLA9Z4q0vdgbSbDUfzPrd_YjfknHLOA8mIc4'

bot = DiscordBot(TOKEN)

@bot.bot.command()
async def hello(ctx):
    await ctx.send('Hello, world!')

bot.start()

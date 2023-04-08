from yahoofinancials import YahooFinancials
def price(code):
    coin=YahooFinancials(code)
    return ("$" + str(coin.get_current_price()))
if __name__=='__main__':
    code=str(input('Please enter code of the cryptocurrency: '))
    currency=str(input('INR or USD: '))
    print(price(code+'-'+currency))
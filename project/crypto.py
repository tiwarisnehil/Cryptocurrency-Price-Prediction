import requests
import pandas as pd
import datetime
from bs4 import BeautifulSoup


def real_time_predict(crypto_code):
    url = ('https://in.finance.yahoo.com/quote/') + \
        crypto_code + ('-INR?p=') + crypto_code + ('-INR')
    r = requests.get(url)
    web_content = BeautifulSoup(r.text, 'html.parser')
    web_content = web_content.find('div',
                                   {'class': "D(ib) smartphone_Mb(10px) W(70%) W(100%)--mobp smartphone_Mt(6px)"})
    web_content = web_content.find('span')
    if web_content == []:
        web_content = '999999'
    return (web_content.text + " " + 'RS')
def get_codes():
    return HSI

if __name__ == '__main__':
    HSI = ['ETH', 'BTC', 'XRP', 'DOGE', 'ADA', 'USDT', 'DOT2', 'D0T1', 'XRP', 'LTC', 'LINK', 'BCH', 'XLM', 'USDC',
               'XEM', 'SOL2', 'ATOM2', 'ATOM1', 'SOL1', 'EOS', 'XMR', 'BSV', 'TRX', 'MIOTA', 'THETA']
    print('PLEASE SEE THE FOLLOWING CODES AND ENTER THE ONE WHOS REAL TIME DATA YOU WANT TO KNOW')
    for i in HSI:
        print(i)
    code = str(input('ENTER CODE HERE:'))
    print(real_time_predict(code))

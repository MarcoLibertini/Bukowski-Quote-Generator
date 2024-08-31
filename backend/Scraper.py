import requests
from bs4 import BeautifulSoup
import json
import os
import re

def scrape_quotes():
    url = 'https://psicologiaymente.com/reflexiones/frases-charles-bukowski'
    response = requests.get(url)
    response.raise_for_status()  # Asegura que la solicitud se realizó correctamente
    
    soup = BeautifulSoup(response.text, 'html.parser')

    # Encuentra el contenedor con las frases
    container = soup.find('div', id='article-content-container')
    
    if not container:
        raise ValueError('Contenedor con ID "article-content-container" no encontrado.')

    def clean_text(text):
    # Elimina números y punto al comienzo de la frase, y cualquier otro espacio después
        return re.sub(r'^\d+\.\s*', '', text)

    # Extrae todas las frases dentro de los h3
    quotes = [clean_text(h3.get_text(strip=True)) for h3 in container.find_all('h3')]

    return quotes

def save_quotes(quotes):
    os.makedirs('data', exist_ok=True)
    with open('data/quotes.json', 'w', encoding='utf-8') as f:
        json.dump(quotes, f, ensure_ascii=False, indent=4)  # Usa ensure_ascii=False para mantener caracteres especiales

    
if __name__ == '__main__':
    try:
        quotes = scrape_quotes()
        save_quotes(quotes)
        print(f'Se han guardado {len(quotes)} frases en data/quotes.json')
    except Exception as e:
        print(f'Ocurrió un error: {e}')
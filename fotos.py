import os
import csv
import requests

def download_plant_images_from_csv(csv_file):
    base_dir = "static/images"

    # Cria a pasta "static/images" se ela não existir
    if not os.path.exists(base_dir):
        os.makedirs(base_dir)

    with open(csv_file, "r", encoding="utf-8") as file:
        reader = csv.DictReader(file)
        for row in reader:
            image_url = row["image_url"]
            image_name = row["name"].strip().lower().replace(" ", "_") + ".jpg"
            image_path = os.path.join(base_dir, image_name)

            # Faz o download da imagem
            response = requests.get(image_url, stream=True)
            if response.status_code == 200:
                with open(image_path, "wb") as image_file:
                    for chunk in response.iter_content(1024):
                        image_file.write(chunk)
                print(f"Imagem {image_name} baixada e salva com sucesso.")
            else:
                print(f"Erro ao baixar a imagem {image_name}.")

# Exemplo de uso
csv_file = "static/js/data/plantas_medicinais.csv"  # Substitua pelo caminho real do arquivo CSV
download_plant_images_from_csv(csv_file)

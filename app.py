from flask import Flask, render_template,send_from_directory, request
import os
import json
import csv

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# Rota para servir arquivos estáticos (CSS, JS, imagens)
@app.route('/static/<path:filename>')
def serve_static(filename):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, 'static'), filename)

# Rota para servir arquivos da pasta "templates"
@app.route('/templates/<path:filename>')
def serve_templates(filename):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, 'templates'), filename)

@app.route('/plants/<int:id>')
def plant_details(id):
    return render_template(f'plants/plant_details{id}.html')

@app.route('/templates/plants/plant_details.html')
def plant_details1():
    return render_template('plants/plant_details.html')

@app.route('/templates/contato.html')
def contato():
    if request.referrer == request.host_url + '/templates/contato.html':
        # O usuário já está na página "/templates/contato.html", não é necessário redirecionar novamente
        return render_template('contato.html')
    else:
        # Redirecionar para a página "/templates/contato.html"
        return render_template('contato.html')

@app.route('/templates/sobre.html')
def sobre():
    if request.referrer == request.host_url + '/templates/sobre.html':
        # O usuário já está na página "/templates/sobre.html", não é necessário redirecionar novamente
        return render_template('sobre.html')
    else:
        # Redirecionar para a página "/templates/sobre.html"
        return render_template('sobre.html')

@app.route('/templates/vendedores.html')
def vendedores():
    if request.referrer == request.host_url + '/templates/vendedores.html':
        # O usuário já está na página "/templates/vendedores.html", não é necessário redirecionar novamente
        return render_template('vendedores.html')
    else:
        # Redirecionar para a página "/templates/vendedores.html"
        return render_template('vendedores.html')

@app.route('/plants-data')
def plants_data():
    # Ler os dados do CSV e gerar os modelos de plantas
    plants = []
    csv_path = os.path.join(os.path.dirname(os.getcwd()), 'static', 'js', 'data', 'plantas_medicinais.csv')
    with open(csv_path, 'r') as file:
        csv_data = csv.reader(file)
        next(csv_data)  # Ignorar o cabeçalho do CSV
        for row in csv_data:
            plant = {
                'id': row[0],
                'name': row[1],
                'image': row[2],
                'description': row[3],
                'details_link': row[4]
            }
            plants.append(plant)

    # Retornar os dados das plantas em formato JSON
    return json.dumps({'plants': plants})

if __name__ == '__main__':
    app.run(debug=True)

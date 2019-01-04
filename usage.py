import dash
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html
import os

from dash_sunburst import Sunburst

app = dash.Dash('')

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

sunburst_data = {
    'name': 'Plateforme Auto',
    'children': [
        {
            'name': 'Panne',
            'children': [
                {
                    'name': 'Remorquage', 'size': 20,
                    'children': [
                        {
                            'name': 'Rép Atelier', 'size': 10,
                            'children': [
                                {'name': 'Suivi R', 'size': 5},
                                {'name': 'Diag C', 'size': 5},
                            ]
                        }, 
                        {'name': 'Epave', 'size': 10},
                    ]
                }, 
                {
                    'name': 'Dépannage', 'size': 20,
                    'children': [
                        {
                            'name': 'Dépannage sur place', 'size': 20,
                            'children': [
                                {'name': 'Suivi Dépanneur', 'size': 5},
                                {'name': 'Conseil et Orientation NI', 'size': 5},
                                {'name': 'Indem. engagement de service', 'size': 5},
                            ]
                            },
                    ]
                    },
                {'name': 'Gar. Méca', 'size': 10,
                'children': [
                    {'name': 'Tranqui qualité réparation', 'size': 10}
                ]
                },
            ]
        },
        {
            'name': 'Entretien',
            'children': [
                {'name': 'Intervetion', 'size': 5,
                'children': [
                    {'name': 'Garantie. Ent', 'size': 5,
                    'children': [
                        {'name': 'Tranqui. Qualité Entretien', 'size': 5},
                    ]
                    },
                    {'name': 'Ent. Garage', 'size': 5,
                     'children': [
                        {'name': 'Self Garage', 'size': 5},
                    ]},
                    {'name': 'Ent. Site', 'size': 5},
                ]
                },
                {'name': 'Acc Auto', 'size': 7,
                'children': [
                    {'name': 'Vente', 'size': 7}
                ]
                }
            ]
        },
        {'name': 'Pneu', 'size': 5,
        'children': [
            {'name': 'changement', 'size': 9,
            'children': [
                {'name': 'Gar. Pneu', 'size': 9,
                'children': [
                {'name': 'Tranquilité réparation', 'size': 9},
            ]
                },
                {'name': 'Location Pneu', 'size': 3.2},
                {'name': 'Achat Pneu', 'size': 4.7, 
                'children': [
                {'name': 'Pneu Connecté', 'size': 5},
                {'name': 'Livraison Domicile', 'size': 5},
            ]
                },
                {'name': 'Monte sur site', 'size': 7},
                {'name': 'Monte Garage', 'size': 7}
            ]
            }
        ]
        },
        {'name': 'Batterie', 'size': 10,
        'children': [
                {'name': 'Changement Batterie', 'size': 9,
                'children': [
                {'name': 'Montage sur site', 'size': 5},
                {'name': 'Montage garage', 'size': 5},
                {'name': 'Achat', 'size': 5},
                {'name': 'Garantie Batterie', 'size': 5},
                {'name': 'Location', 'size': 5}
            ]},
            ]
        },
        {'name': 'Controle tech', 'size': 7.5,
        'children': [
                {'name': 'Prepa', 'size': 5},
                {'name': 'Decrypt', 'size': 5},
            ]},
        {
            'name': 'Conciergerie',
            'children': [
                {'name': 'Mob. Clt', 'size': 9,
                'children': [
                    {'name': 'Taxi', 'size': 5},
                    {'name': 'Train', 'size': 5},
                    {'name': 'Co-Voit', 'size': 5},
                    {'name': 'Location', 'size': 5, 
                    'children': [
                        {'name': 'Rachat franchise', 'size': 5}
                    ] 
                    },
                    {'name': 'Autopartage', 'size': 5}
                ]
                },
                {'name': 'Hébergement', 'size': 5},
                {'name': 'Véhicule', 'size': 5, 
                'children': [
                    {'name': 'Carburant', 'size': 5},
                    {'name': 'Livraison', 'size': 5},
                    {'name': 'Parking', 'size': 5},
                    {'name': 'Nettoyage', 'size': 5},
                ]
                },
                {'name': 'Toutes Demandes', 'size': 5}
            ]
        },
        {
            'name': 'Changement de veh',
            'children': [
                {'name': 'Conseil', 'size': 5},
                {'name': 'Prise en main', 'size': 5},
                {'name': 'Liv. Veh', 'size': 5},
                {'name': 'Carte Grise', 'size': 5},
                {'name': 'Vision F', 'size': 5,
                'children': [
                    {'name':'Cote argus', 'size': 5},
                    {'name':'Expert Auto', 'size': 5},
                    {'name':'Gar. 3 mois', 'size': 5},
                ]},
                {'name': 'Ann. Veh. occ', 'size': 5, 
                'children': [
                    {'name': 'Paiement', 'size': 5}
                ]
                },
            ]
        },
        {'name': 'Permis', 'size': 5, 
        'children': [
            {'name': 'Indemnitaire permis', 'size': 5},
            {'name': 'Stage Récup points', 'size': 5},
            {'name': 'Form. Continue', 'size': 5, 
            'children': [
                {'name': 'Stage sur piste', 'size': 5},
                {'name': 'Coaching éco-conduite', 'size': 5},
                {'name': 'Coaching conduite', 'size': 5},
            ]},
            {'name': 'Form. Initiale', 'size': 5, 
            'children': [
                {'name': 'Coaching conduite accompagnée', 'size': 5},
                {'name': 'Annuaire auto-école', 'size': 5},
                {'name': 'Préparation code et Permis', 'size': 5},
            ]},
        ]
        },
        {'name': 'Voyage', 'size': 10, 
        'children': [
            {'name': 'Assurance voyage', 'size': 5},
            {'name': 'Préparation voyage', 'size': 5},
            {'name': 'Points intérêts', 'size': 5},
        ]},
        {'name': 'Services connectés', 'size': 10, 
        'children': [
            {'name': 'Mise en avant partenaires IMA', 'size': 5},
            {'name': 'Ecall', 'size': 5},
            {'name': 'Ass. Géoloc. Autoroute', 'size': 5},
        ]},
        {'name': 'Info Conseils', 'size': 10, 
        'children': [
            {'name': 'SOS Fourrière', 'size': 5},
            {'name': 'Appel Post accident', 'size': 5},
            {'name': 'Accrochage et déclaration', 'size': 5},
            {'name': 'Protection juridique', 'size': 5, 
            'children': [
                {'name': 'Médiation/conciliation', 'size': 5},
                {'name': 'Accompagnement procés', 'size': 5},
                {'name': 'Usurpation de plaque', 'size': 5},
            ]},
            {'name': 'Info juridique', 'size': 5},
        ]},
        {'name': 'Relationnel', 'size': 10, 
        'children': [
            {'name': 'Contenu/Actu', 'size': 5, 
            'children': [
                {'name': 'Actualités Auto', 'size': 5},
            ]},
            {'name': 'Prog Fidélisation', 'size': 5, 
            'children' : [
                {'name': 'Bons Plans généralistes', 'size': 5},
                {'name': 'Bons Plans cibles', 'size': 5,
                'children': [
                    {'name': 'Accessoires', 'size': 5},
                ]},
            ]},
            {'name': 'Mon compte plateforme', 'size': 5, 
            'children': [
                {'name': 'Suivi des réparations', 'size': 5},
                {'name': 'Gestion Budget', 'size': 5, 
                'children': [
                    {'name': 'Coach Budget', 'size': 5},
                ]},
                {'name': 'Carnet de Bord et Prédictif', 'size': 5},
            ]},
            {'name': 'Communauté', 'size': 5, 
            'children': [
                {'name': 'Mon assistant auto', 'size': 5},
                {'name': 'Forum expert auto', 'size': 5},
            ]},
        ]},
        {'name': 'Services Transverses', 'size': 10, 
        'children': [
            {'name': 'Transverses', 'size': 5,
            'children': [
                {'name': 'Check veh primaire', 'size': 5},
                {'name': 'Check veh secondaire', 'size': 5},
                {'name': 'relais souscription d\'assurance', 'size': 5},
            ]},
        ]}
    ]
}

app.layout = html.Div([
    html.Div('Catalogue de services IMA : Plateforme Auto', style={'color': 'blue', 'fontSize': 24}),
    html.Div('Dernière MAJ 04/01/19'),
    html.Div(
        [Sunburst(id='sun', data=sunburst_data)],
        style={'width': '100%',  'margin-left': '150px'}),
    dcc.Graph(
        id='graph',
        style={'width': '1%', 'float': 'left', 'visibility':'hidden'}
        ),
    html.Div(id='output', style={'clear': 'both'})
])

@app.callback(Output('output', 'children'), [Input('sun', 'selectedPath')])
def display_selected(selected_path):
    return 'Catalogue de services IMA: {}'.format('->'.join(selected_path or []) or 'root')

@app.callback(Output('graph', 'figure'), [Input('sun', 'data'), Input('sun', 'selectedPath')])
def display_graph(data, selected_path):
    x = []
    y = []
    text = []
    color = []
    joined_selected = '->'.join(selected_path or [])

    SELECTED_COLOR = '#03c'
    SELECTED_CHILDREN_COLOR = '#8cf'
    SELECTED_PARENTS_COLOR = '#f80'
    DESELECTED_COLOR = '#ccc'

    def node_color(node_path):
        joined_node = '->'.join(node_path)
        if joined_node == joined_selected:
            return SELECTED_COLOR
        if joined_node.startswith(joined_selected):
            return SELECTED_CHILDREN_COLOR
        if joined_selected.startswith(joined_node):
            return SELECTED_PARENTS_COLOR
        return DESELECTED_COLOR

    def append_point(child_count, size, node, node_path):
        x.append(child_count)
        y.append(size)
        text.append(node['name'])
        color.append(node_color(node_path))

    def crawl(node, node_path):
        if 'size' in node:
            append_point(1, node['size'], node, node_path)
            return (1, node['size'])
        else:
            node_count, node_size = 1, 0
            for child in node['children']:
                this_count, this_size = crawl(child, node_path + [child['name']])
                node_count += this_count
                node_size += this_size
            append_point(node_count, node_size, node, node_path)
            return (node_count, node_size)

    crawl(data, [])

    layout = {
        'width': 800,
        'height': 800,
        'xaxis': {'title': 'Total Nodes', 'type': 'log'},
        'yaxis': {'title': 'Total Size', 'type': 'log'},
        'hovermode': 'closest'
    }

    return {
        'data': [{
            'x': x,
            'y': y,
            'text': text,
            'textposition': 'middle right',
            'marker': {
                'color': color,
                'size': [(v*v + 100)**0.5 for v in y],
                'opacity': 0.5
            },
            'mode': 'markers+text',
            'cliponaxis': False
        }],
        'layout': layout
    }

if __name__ == '__main__':
    #Ligne pour déployer sur héroku
    port = int(os.getenv('PORT', 5000))
    print("Starting app on port %d" %port)
    app.run_server(debug=True, port=port, host='0.0.0.0')
    # Ligne pour déployer en local
    # app.run_server(debug=True)

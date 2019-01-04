import dash
from dash.dependencies import Input, Output
import dash_sunburst
import dash_core_components as dcc
import dash_html_components as html


N_CHILDREN = 3

def node_name(level_index, node_index):
    return 'Level {}, Node {}'.format(level_index, node_index)

def create_data(start_level_index, node_index):
    data = {
            'name':'Plateforme Auto',
            'children':[
                {
                    'name':'Panne',
                    'children':[
                        {
                            'name':'Remorquage',
                            'size':20,
                            'children':[
                                {
                                    'name':'Rép Atelier',
                                    'size':10,
                                    'children':[
                                        {
                                            'name':'Suivi R',
                                            'size':5
                                        },
                                        {
                                            'name':'Diag C',
                                            'size':5
                                        },

                                    ]
                                },
                                {
                                    'name':'Epave',
                                    'size':10
                                },

                            ]
                        },
                        {
                            'name':'Dépannage',
                            'size':20,
                            'children':[
                                {
                                    'name':'Dépannage sur place',
                                    'size':20,
                                    'children':[
                                        {
                                            'name':'Suivi Dépanneur',
                                            'size':5
                                        },
                                        {
                                            'name':'Conseil et Orientation NI',
                                            'size':5
                                        },
                                        {
                                            'name':'Indem. engagement de service',
                                            'size':5
                                        },

                                    ]
                                },

                            ]
                        },
                        {
                            'name':'Gar. Méca',
                            'size':10,
                            'children':[
                                {
                                    'name':'Tranqui qualité réparation',
                                    'size':10
                                }
                            ]
                        },

                    ]
                },
                {
                    'name':'Entretien',
                    'children':[
                        {
                            'name':'Intervetion',
                            'size':5,
                            'children':[
                                {
                                    'name':'Garantie. Ent',
                                    'size':5,
                                    'children':[
                                        {
                                            'name':'Tranqui. Qualité Entretien',
                                            'size':5
                                        },

                                    ]
                                },
                                {
                                    'name':'Ent. Garage',
                                    'size':5,
                                    'children':[
                                        {
                                            'name':'Self Garage',
                                            'size':5
                                        },

                                    ]
                                },
                                {
                                    'name':'Ent. Site',
                                    'size':5
                                },

                            ]
                        },
                        {
                            'name':'Acc Auto',
                            'size':7,
                            'children':[
                                {
                                    'name':'Vente',
                                    'size':7
                                }
                            ]
                        }
                    ]
                },
                {
                    'name':'Pneu',
                    'size':5,
                    'children':[
                        {
                            'name':'changement',
                            'size':9,
                            'children':[
                                {
                                    'name':'Gar. Pneu',
                                    'size':9,
                                    'children':[
                                        {
                                            'name':'Tranquilité réparation',
                                            'size':9
                                        },

                                    ]
                                },
                                {
                                    'name':'Location Pneu',
                                    'size':3.2
                                },
                                {
                                    'name':'Achat Pneu',
                                    'size':4.7,
                                    'children':[
                                        {
                                            'name':'Pneu Connecté',
                                            'size':5
                                        },
                                        {
                                            'name':'Livraison Domicile',
                                            'size':5
                                        },

                                    ]
                                },
                                {
                                    'name':'Monte sur site',
                                    'size':7
                                },
                                {
                                    'name':'Monte Garage',
                                    'size':7
                                }
                            ]
                        }
                    ]
                },
                {
                    'name':'Batterie',
                    'size':10,
                    'children':[
                        {
                            'name':'Changement Batterie',
                            'size':9,
                            'children':[
                                {
                                    'name':'Montage sur site',
                                    'size':5
                                },
                                {
                                    'name':'Montage garage',
                                    'size':5
                                },
                                {
                                    'name':'Achat',
                                    'size':5
                                },
                                {
                                    'name':'Garantie Batterie',
                                    'size':5
                                },
                                {
                                    'name':'Location',
                                    'size':5
                                }
                            ]
                        },

                    ]
                },
                {
                    'name':'Controle tech',
                    'size':7.5,
                    'children':[
                        {
                            'name':'Prepa',
                            'size':5
                        },
                        {
                            'name':'Decrypt',
                            'size':5
                        },

                    ]
                },
                {
                    'name':'Conciergerie',
                    'children':[
                        {
                            'name':'Mob. Clt',
                            'size':9,
                            'children':[
                                {
                                    'name':'Taxi',
                                    'size':5
                                },
                                {
                                    'name':'Train',
                                    'size':5
                                },
                                {
                                    'name':'Co-Voit',
                                    'size':5
                                },
                                {
                                    'name':'Location',
                                    'size':5,
                                    'children':[
                                        {
                                            'name':'Rachat franchise',
                                            'size':5
                                        }
                                    ]
                                },
                                {
                                    'name':'Autopartage',
                                    'size':5
                                }
                            ]
                        },
                        {
                            'name':'Hébergement',
                            'size':5
                        },
                        {
                            'name':'Véhicule',
                            'size':5,
                            'children':[
                                {
                                    'name':'Carburant',
                                    'size':5
                                },
                                {
                                    'name':'Livraison',
                                    'size':5
                                },
                                {
                                    'name':'Parking',
                                    'size':5
                                },
                                {
                                    'name':'Nettoyage',
                                    'size':5
                                },

                            ]
                        },
                        {
                            'name':'Toutes Demandes',
                            'size':5
                        }
                    ]
                },
                {
                    'name':'Changement de veh',
                    'children':[
                        {
                            'name':'Conseil',
                            'size':5
                        },
                        {
                            'name':'Prise en main',
                            'size':5
                        },
                        {
                            'name':'Liv. Veh',
                            'size':5
                        },
                        {
                            'name':'Carte Grise',
                            'size':5
                        },
                        {
                            'name':'Vision F',
                            'size':5,
                            'children':[
                                {
                                    'name':'Cote argus',
                                    'size':5
                                },
                                {
                                    'name':'Expert Auto',
                                    'size':5
                                },
                                {
                                    'name':'Gar. 3 mois',
                                    'size':5
                                },

                            ]
                        },
                        {
                            'name':'Ann. Veh. occ',
                            'size':5,
                            'children':[
                                {
                                    'name':'Paiement',
                                    'size':5
                                }
                            ]
                        },

                    ]
                },
                {
                    'name':'Permis',
                    'size':5,
                    'children':[
                        {
                            'name':'Indemnitaire permis',
                            'size':5
                        },
                        {
                            'name':'Stage Récup points',
                            'size':5
                        },
                        {
                            'name':'Form. Continue',
                            'size':5,
                            'children':[
                                {
                                    'name':'Stage sur piste',
                                    'size':5
                                },
                                {
                                    'name':'Coaching éco-conduite',
                                    'size':5
                                },
                                {
                                    'name':'Coaching conduite',
                                    'size':5
                                },

                            ]
                        },
                        {
                            'name':'Form. Initiale',
                            'size':5,
                            'children':[
                                {
                                    'name':'Coaching conduite accompagnée',
                                    'size':5
                                },
                                {
                                    'name':'Annuaire auto-école',
                                    'size':5
                                },
                                {
                                    'name':'Préparation code et Permis',
                                    'size':5
                                },

                            ]
                        },

                    ]
                },
                {
                    'name':'Voyage',
                    'size':10,
                    'children':[
                        {
                            'name':'Assurance voyage',
                            'size':5
                        },
                        {
                            'name':'Préparation voyage',
                            'size':5
                        },
                        {
                            'name':'Points intérêts',
                            'size':5
                        },

                    ]
                },
                {
                    'name':'Services connectés',
                    'size':10,
                    'children':[
                        {
                            'name':'Mise en avant partenaires IMA',
                            'size':5
                        },
                        {
                            'name':'Ecall',
                            'size':5
                        },
                        {
                            'name':'Ass. Géoloc. Autoroute',
                            'size':5
                        },

                    ]
                },
                {
                    'name':'Info Conseils',
                    'size':10,
                    'children':[
                        {
                            'name':'SOS Fourrière',
                            'size':5
                        },
                        {
                            'name':'Appel Post accident',
                            'size':5
                        },
                        {
                            'name':'Accrochage et déclaration',
                            'size':5
                        },
                        {
                            'name':'Protection juridique',
                            'size':5,
                            'children':[
                                {
                                    'name':'Médiation/conciliation',
                                    'size':5
                                },
                                {
                                    'name':'Accompagnement procés',
                                    'size':5
                                },
                                {
                                    'name':'Usurpation de plaque',
                                    'size':5
                                },

                            ]
                        },
                        {
                            'name':'Info juridique',
                            'size':5
                        },

                    ]
                },
                {
                    'name':'Relationnel',
                    'size':10,
                    'children':[
                        {
                            'name':'Contenu/Actu',
                            'size':5,
                            'children':[
                                {
                                    'name':'Actualités Auto',
                                    'size':5
                                },

                            ]
                        },
                        {
                            'name':'Prog Fidélisation',
                            'size':5,
                            'children':[
                                {
                                    'name':'Bons Plans généralistes',
                                    'size':5
                                },
                                {
                                    'name':'Bons Plans cibles',
                                    'size':5,
                                    'children':[
                                        {
                                            'name':'Accessoires',
                                            'size':5
                                        },

                                    ]
                                },

                            ]
                        },
                        {
                            'name':'Mon compte plateforme',
                            'size':5,
                            'children':[
                                {
                                    'name':'Suivi des réparations',
                                    'size':5
                                },
                                {
                                    'name':'Gestion Budget',
                                    'size':5,
                                    'children':[
                                        {
                                            'name':'Coach Budget',
                                            'size':5
                                        },

                                    ]
                                },
                                {
                                    'name':'Carnet de Bord et Prédictif',
                                    'size':5
                                },

                            ]
                        },
                        {
                            'name':'Communauté',
                            'size':5,
                            'children':[
                                {
                                    'name':'Mon assistant auto',
                                    'size':5
                                },
                                {
                                    'name':'Forum expert auto',
                                    'size':5
                                },

                            ]
                        },

                    ]
                },
                {
                    'name':'Services Transverses',
                    'size':10,
                    'children':[
                        {
                            'name':'Transverses',
                            'size':5,
                            'children':[
                                {
                                    'name':'Check veh primaire',
                                    'size':5
                                },
                                {
                                    'name':'Check veh secondaire',
                                    'size':5
                                },
                                {
                                    'name':'relais souscription d\'assurance',
                                    'size':5
                                },

                            ]
                        },

                    ]
                }
            ]
        }
    


    # wrap back down to level 1
    for i in range(start_level_index - 1, 0, -1):
        data = {
            'name': node_name(i, 1),
            'children': [data]
        }
    return data

def extract_level_and_node_from_name(name):
    level = int(name.split(', ')[0].replace('Level ', ''))
    node = int(name.split(', ')[1].replace('Node ', ''))
    return (level, node)


app = dash.Dash(__name__)
app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div([
    html.Label('Catalogue de services IMA'),
    html.Div('Dernières MAJ 04/01/19'),
    dcc.Dropdown(
        id='level',
        options=[{
            'label': 'Univers ',
            'value': 'truc'
        },{
            'label': 'Gamme ',
            'value': 'Panne'
        }, {
            'label': 'Offres ',
            'value': 'chose'
        }, {
            'label': 'Services ',
            'value': 'bidule'
        }],
        value=1
    ),
    html.Label('Display node within level'),
    dcc.Dropdown(id='node'),

    dash_sunburst.Sunburst(
        id='sun',
        data=create_data(1, 1),
        interactive=True # disable clicking nodes
    )
])


@app.callback(Output('node', 'options'), [Input('level', 'value')])
def update_node_options(level):
    # first level only has one node
    level_nodes = N_CHILDREN if level > 1 else 1
    return [{
        'label': 'Level {}, Node {}'.format(level, i),
        'value': i
    } for i in range(1, level_nodes + 1)]


@app.callback(Output('node', 'value'), [Input('node', 'options')])
def update_node_value(options):
    return options[0]['value']

# Originally I had both sun.selectedPath and sun.data depend on
# level.value and node.value. But the two callbacks would fire separately and
# in random order, which confused the receiving component.
#
# In order to ensure a consistent order of operations, I have selectedPath
# depend on level and node, and then data depends on selectedPath.
@app.callback(Output('sun', 'selectedPath'), [
    Input('level', 'value'),
    Input('node', 'value')])
def update_selected_path(level, node):
    path = [node_name(i, node if i == level else 1) for i in range(2, level + 1)]
    return path


@app.callback(Output('sun', 'data'), [Input('sun', 'selectedPath')])
def update_sun(selectedPath):
    if(len(selectedPath)):
        (level, node) = extract_level_and_node_from_name(selectedPath[-1])
    else:
        (level, node) = (1, 1)
    return create_data(level, node)


if __name__ == '__main__':
    app.run_server(debug=True)

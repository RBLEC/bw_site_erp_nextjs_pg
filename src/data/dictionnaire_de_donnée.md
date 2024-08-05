# Dictionnaire de Données

## Table: indexes
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de l'index.                   |
| table_name | VARCHAR  | Nom de la table où l'index est créé.             |
| column_name| VARCHAR  | Nom de la colonne sur laquelle l'index est créé. |
| index_name | VARCHAR  | Nom de l'index.                                  |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |

## Table: images
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de l'image.                   |
| user_id    | UUID     | Identifiant de l'utilisateur lié (FK).           |
| client_id  | UUID     | Identifiant du client lié (FK).                  |
| product_id | UUID     | Identifiant du produit lié (FK).                 |
| company_id | UUID     | Identifiant de l'entreprise liée (FK).           |
| document_id| UUID     | Identifiant du document lié (FK).                |
| image_type | VARCHAR  | Type d'image ('user', 'client', 'product', etc.).|
| image_path | VARCHAR  | Chemin vers le fichier image.                    |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: users
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de l'utilisateur.             |
| first_name | VARCHAR  | Prénom de l'utilisateur.                         |
| last_name  | VARCHAR  | Nom de l'utilisateur.                            |
| email      | VARCHAR  | Email de l'utilisateur.                          |
| password   | VARCHAR  | Mot de passe de l'utilisateur.                   |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: companies
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de l'entreprise.              |
| name       | VARCHAR  | Nom de l'entreprise.                             |
| address1   | VARCHAR  | Adresse ligne 1 de l'entreprise.                 |
| address2   | VARCHAR  | Adresse ligne 2 de l'entreprise.                 |
| city       | VARCHAR  | Ville de l'entreprise.                           |
| state      | VARCHAR  | État ou région de l'entreprise.                  |
| postal_code| VARCHAR  | Code postal de l'entreprise.                     |
| country_id | INT      | Identifiant du pays (référence à une autre table)|
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: clients
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique du client.                    |
| user_id    | UUID     | Identifiant de l'utilisateur lié (FK).           |
| company_id | UUID     | Identifiant de l'entreprise liée (FK).           |
| name       | VARCHAR  | Nom du client.                                   |
| address1   | VARCHAR  | Adresse ligne 1 du client.                       |
| address2   | VARCHAR  | Adresse ligne 2 du client.                       |
| city       | VARCHAR  | Ville du client.                                 |
| state      | VARCHAR  | État ou région du client.                        |
| postal_code| VARCHAR  | Code postal du client.                           |
| country_id | INT      | Identifiant du pays (référence à une autre table)|
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: invoices
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de la facture.                |
| user_id    | UUID     | Identifiant de l'utilisateur lié (FK).           |
| client_id  | UUID     | Identifiant du client lié (FK).                  |
| invoice_number| VARCHAR| Numéro de la facture.                           |
| invoice_date | DATE   | Date de la facture.                              |
| due_date   | DATE     | Date d'échéance de la facture.                   |
| amount     | DECIMAL  | Montant total de la facture.                     |
| balance    | DECIMAL  | Solde restant de la facture.                     |
| status     | VARCHAR  | Statut de la facture.                            |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: payments
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique du paiement.                  |
| invoice_id | UUID     | Identifiant de la facture liée (FK).             |
| amount     | DECIMAL  | Montant du paiement.                             |
| payment_date| DATE    | Date du paiement.                                |
| payment_type_id| INT  | Type de paiement (référence à une autre table).  |
| transaction_reference| VARCHAR | Référence de la transaction.            |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: products
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique du produit.                   |
| user_id    | UUID     | Identifiant de l'utilisateur lié (FK).           |
| product_key| VARCHAR  | Clé du produit.                                  |
| notes      | TEXT     | Notes sur le produit.                            |
| cost       | DECIMAL  | Coût du produit.                                 |
| coef       | DECIMAL  | Coefficient basé sur le SMIC.                    |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: expenses
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de la dépense.                |
| user_id    | UUID     | Identifiant de l'utilisateur lié (FK).           |
| client_id  | UUID     | Identifiant du client lié (FK).                  |
| amount     | DECIMAL  | Montant de la dépense.                           |
| expense_date| DATE    | Date de la dépense.                              |
| category_id| INT      | Catégorie de la dépense (référence à une autre table).|
| notes      | TEXT     | Notes sur la dépense.                            |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: recurring_invoices
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de la facture récurrente.     |
| user_id    | UUID     | Identifiant de l'utilisateur lié (FK).           |
| client_id  | UUID     | Identifiant du client lié (FK).                  |
| start_date | DATE     | Date de début de la récurrence.                  |
| end_date   | DATE     | Date de fin de la récurrence.                    |
| frequency_id| INT     | Fréquence de la récurrence (référence à une autre table).|
| amount     | DECIMAL  | Montant de la facture récurrente.                |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: tasks
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de la tâche.                  |
| user_id    | UUID     | Identifiant de l'utilisateur lié (FK).           |
| client_id  | UUID     | Identifiant du client lié (FK).                  |
| name       | VARCHAR  | Nom de la tâche.                                 |
| description| TEXT     | Description de la tâche.                         |
| start_date | DATE     | Date de début de la tâche.                       |
| due_date   | DATE     | Date d'échéance de la tâche.                     |
| status     | VARCHAR  | Statut de la tâche.                              |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: quotes
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique du devis.                     |
| user_id    | UUID     | Identifiant de l'utilisateur lié (FK).           |
| client_id  | UUID     | Identifiant du client lié (FK).                  |
| quote_number| VARCHAR | Numéro du devis.                                 |
| quote_date | DATE     | Date du devis.                                   |
| amount     | DECIMAL  | Montant du devis.                                |
| status     | VARCHAR  | Statut du devis.                                 |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: credits
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique du crédit.                    |
| user_id    | UUID     | Identifiant de l'utilisateur lié (FK).           |
| client_id  | UUID     | Identifiant du client lié (FK).                  |
| amount     | DECIMAL  | Montant du crédit.                               |
| balance    | DECIMAL  | Solde du crédit.                                 |
| credit_date| DATE     | Date du crédit.                                  |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: documents
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique du document.                  |
| user_id    | UUID     | Identifiant de l'utilisateur lié (FK).           |
| client_id  | UUID     | Identifiant du client lié (FK).                  |
| invoice_id | UUID     | Identifiant de la facture liée (FK).             |
| document_name| VARCHAR| Nom du document.                                 |
| file_path  | VARCHAR  | Chemin vers le fichier document.                 |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: taxes
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de la taxe.                   |
| name       | VARCHAR  | Nom de la taxe.                                  |
| rate       | DECIMAL  | Taux de la taxe.                                 |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |


## Table: smic_h_b
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de l'entrée.                  |
| date       | DATE     | Date de la valeur du SMIC horaire brut.          |
| value      | DECIMAL  | Valeur du SMIC horaire brut.                     |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |


## Table: product_categories
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de la catégorie de produit.   |
| name       | VARCHAR  | Nom de la catégorie de produit.                  |
| description| TEXT     | Description de la catégorie de produit.          |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: product_category_mappings
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique du mapping.                   |
| product_id | UUID     | Identifiant du produit (FK).                     |
| category_id| UUID     | Identifiant de la catégorie de produit (FK).     |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |

## Table: roles
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique du rôle.                      |
| name       | VARCHAR  | Nom du rôle.                                     |
| description| TEXT     | Description du rôle.                             |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: user_roles
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique du mapping utilisateur-rôle.  |
| user_id    | UUID     | Identifiant de l'utilisateur (FK).               |
| role_id    | UUID     | Identifiant du rôle (FK).                        |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |

## Table: currencies
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de la devise.                 |
| code       | VARCHAR  | Code de la devise (ex: USD, EUR).                |
| name       | VARCHAR  | Nom de la devise.                                |
| symbol     | VARCHAR  | Symbole de la devise.                            |
| exchange_rate| DECIMAL| Taux de change de la devise.                     |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: addresses
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de l'adresse.                 |
| user_id    | UUID     | Identifiant de l'utilisateur (FK).               |
| client_id  | UUID     | Identifiant du client (FK).                      |
| address1   | VARCHAR  | Adresse ligne 1.                                 |
| address2   | VARCHAR  | Adresse ligne 2.                                 |
| city       | VARCHAR  | Ville.                                           |
| state      | VARCHAR  | État ou région.                                  |
| postal_code| VARCHAR  | Code postal.                                     |
| country_id | INT      | Identifiant du pays (référence à une autre table)|
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: notifications
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de la notification.           |
| user_id    | UUID     | Identifiant de l'utilisateur (FK).               |
| message    | TEXT     | Message de la notification.                      |
| is_read    | BOOLEAN  | Statut de lecture de la notification.            |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |

## Table: recurring_invoices
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de la facture récurrente.     |
| user_id    | UUID     | Identifiant de l'utilisateur lié (FK).           |
| client_id  | UUID     | Identifiant du client lié (FK).                  |
| start_date | DATE     | Date de début de la récurrence.                  |
| end_date   | DATE     | Date de fin de la récurrence.                    |
| frequency_id| INT     | Fréquence de la récurrence (référence à une autre table).|
| amount     | DECIMAL  | Montant de la facture récurrente.                |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: subscriptions
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de l'abonnement.              |
| client_id  | UUID     | Identifiant du client lié (FK).                  |
| product_id | UUID     | Identifiant du produit lié (FK).                 |
| start_date | DATE     | Date de début de l'abonnement.                   |
| end_date   | DATE     | Date de fin de l'abonnement.                     |
| status     | VARCHAR  | Statut de l'abonnement.                          |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: activity_logs
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique du journal d'activité.        |
| user_id    | UUID     | Identifiant de l'utilisateur lié (FK).           |
| activity   | VARCHAR  | Description de l'activité.                       |
| timestamp  | TIMESTAMP| Date et heure de l'activité.                     |

## Table: user_preferences
| Colonne           | Type     | Description                                      |
|-------------------|----------|--------------------------------------------------|
| id                | UUID     | Identifiant unique de la préférence utilisateur. |
| user_id           | UUID     | Identifiant de l'utilisateur lié (FK).           |
| preference_key    | VARCHAR  | Clé de la préférence.                            |
| preference_value  | TEXT     | Valeur de la préférence.                         |
| created_at        | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at        | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: sub_tasks
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de la sous-tâche.             |
| task_id    | UUID     | Identifiant de la tâche principale (FK).         |
| name       | VARCHAR  | Nom de la sous-tâche.                            |
| description| TEXT     | Description de la sous-tâche.                    |
| start_date | DATE     | Date de début de la sous-tâche.                  |
| due_date   | DATE     | Date d'échéance de la sous-tâche.                |
| status     | VARCHAR  | Statut de la sous-tâche.                         |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |


## Table: data_dictionary
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de l'entrée du dictionnaire.  |
| table_name | VARCHAR  | Nom de la table.                                 |
| column_name| VARCHAR  | Nom de la colonne.                               |
| data_type  | VARCHAR  | Type de données de la colonne.                   |
| description| TEXT     | Description de la colonne.                       |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: projects
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique du projet.                    |
| name       | VARCHAR  | Nom du projet.                                   |
| description| TEXT     | Description du projet.                           |
| start_date | DATE     | Date de début du projet.                         |
| end_date   | DATE     | Date de fin du projet.                           |
| client_id  | UUID     | Identifiant du client lié (FK).                  |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: timesheets
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de la feuille de temps.       |
| user_id    | UUID     | Identifiant de l'utilisateur lié (FK).           |
| project_id | UUID     | Identifiant du projet lié (FK).                  |
| task_id    | UUID     | Identifiant de la tâche liée (FK).               |
| hours_worked| DECIMAL | Nombre d'heures travaillées.                     |
| work_date  | DATE     | Date du travail effectué.                        |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: comments
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique du commentaire.               |
| user_id    | UUID     | Identifiant de l'utilisateur lié (FK).           |
| project_id | UUID     | Identifiant du projet lié (FK).                  |
| task_id    | UUID     | Identifiant de la tâche liée (FK).               |
| document_id| UUID     | Identifiant du document lié (FK).                |
| comment    | TEXT     | Texte du commentaire.                            |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: files
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique du fichier.                   |
| project_id | UUID     | Identifiant du projet lié (FK).                  |
| task_id    | UUID     | Identifiant de la tâche liée (FK).               |
| client_id  | UUID     | Identifiant du client lié (FK).                  |
| file_name  | VARCHAR  | Nom du fichier.                                  |
| file_path  | VARCHAR  | Chemin vers le fichier.                          |
| uploaded_by| UUID     | Identifiant de l'utilisateur ayant uploadé le fichier (FK).|
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: events
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de l'événement.               |
| name       | VARCHAR  | Nom de l'événement.                              |
| description| TEXT     | Description de l'événement.                      |
| event_date | TIMESTAMP| Date et heure de l'événement.                    |
| user_id    | UUID     | Identifiant de l'utilisateur lié (FK).           |
| client_id  | UUID     | Identifiant du client lié (FK).                  |
| project_id | UUID     | Identifiant du projet lié (FK).                  |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: contacts
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique du contact.                   |
| client_id  | UUID     | Identifiant du client lié (FK).                  |
| name       | VARCHAR  | Nom du contact.                                  |
| email      | VARCHAR  | Email du contact.                                |
| phone      | VARCHAR  | Numéro de téléphone du contact.                  |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: settings
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de la configuration.          |
| setting_key| VARCHAR  | Clé de la configuration.                         |
| setting_value| TEXT   | Valeur de la configuration.                      |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: blog_posts
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de l'article de blog.         |
| title      | VARCHAR  | Titre de l'article de blog.                      |
| content    | TEXT     | Contenu de l'article de blog.                    |
| author_id  | UUID     | Identifiant de l'auteur (FK).                    |
| category_id| UUID     | Identifiant de la catégorie (FK).                |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: blog_categories
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique de la catégorie de blog.      |
| name       | VARCHAR  | Nom de la catégorie de blog.                     |
| description| TEXT     | Description de la catégorie de blog.             |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: blog_tags
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique du tag de blog.               |
| name       | VARCHAR  | Nom du tag de blog.                              |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

## Table: blog_post_tags
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| post_id    | UUID     | Identifiant de l'article de blog (FK).           |
| tag_id     | UUID     | Identifiant du tag de blog (FK).                 |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |

## Table: blog_comments
| Colonne    | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| id         | UUID     | Identifiant unique du commentaire de blog.       |
| post_id    | UUID     | Identifiant de l'article de blog (FK).           |
| user_id    | UUID     | Identifiant de l'utilisateur (FK).               |
| comment    | TEXT     | Texte du commentaire.                            |
| created_at | TIMESTAMP| Date de création de l'entrée.                    |
| updated_at | TIMESTAMP| Date de mise à jour de l'entrée.                 |

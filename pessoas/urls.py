from django.urls import path
from .views import home, list_pessoas, create_pessoa, update_pessoa, deletar_pessoa

urlpatterns = [
    path('',home),
    path('pessoas',list_pessoas,name='lista_pessoas'),
    path('form',create_pessoa,name='create_pessoa'),
    path('atualizar/<int:id>/',update_pessoa,name='update_pessoa'),
    path('deletar/<int:id>/',deletar_pessoa,name='deletar_pessoa')

]

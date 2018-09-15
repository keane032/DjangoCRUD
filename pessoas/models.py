from django.db import models

class Pessoa(models.Model):

    nome = models.CharField(max_length=20)
    idade = models.IntegerField();
    cpf = models.CharField(max_length=7)


    def __str__(self):
        return  self.nome

from django.shortcuts import render, redirect
from .models import Pessoa
from .forms import PessoaForm
# Create your views here.

def home(request):
    return render(request,'home.html')


def list_pessoas(request):
    pessoas = Pessoa.objects.all()
    return render(request,'pessoas.html',{'pessoas':pessoas})

def create_pessoa(request):
    form = PessoaForm(request.POST or None)

    if form.is_valid():
        form.save()
        return redirect('lista_pessoas')
    return render(request,'pessoas_form.html',{'form':form})


def update_pessoa(request,id):
    pessoa = Pessoa.objects.get(id=id)
    form = PessoaForm(request.POST or None,instance=pessoa)

    if form.is_valid():
        form.save()
        return redirect('lista_pessoas')
    return render(request, 'pessoas_form.html', {'form': form,'pessoa': pessoa})

def deletar_pessoa(request,id):
    pessoa = Pessoa.objects.get(id=id)

    if request.POST == "POST":
        pessoa.delete()
        return redirect('lista_pessoas')

    return render(request,'prod-delete-confirma.html',{'pessoa':pessoa})



from django.shortcuts import render
from .models import Product

# Create your views here.

def index(request):
    product_objects = Product.objects.all()
    return render(request, 'shop/index.html', {'product_objects': product_objects})


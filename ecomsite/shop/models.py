from django.db import models

# Create your models here.

class Product(models.Model):
    product = models.CharField(max_length = 200)
    price = models.FloatField()
    discount_price = models.FloatField()
    category = models.CharField(max_length = 200)
    description = models.TextField()
    image = models.CharField(max_length=300)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        return self.product
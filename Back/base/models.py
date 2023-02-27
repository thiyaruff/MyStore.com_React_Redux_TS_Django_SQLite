

from datetime import datetime
from django.db import models
from django.contrib.auth.models import AbstractUser



class CustomUser(AbstractUser):
    address = models.CharField(max_length = 150, null = True, blank = True)
    phone_number = models.CharField(max_length = 20, null = True, blank = True)
    age = models.IntegerField(null = True, blank = True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'first_name', 'last_name', 'phone_number']




class Category(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
           return self.name

class Products(models.Model):
    desc = models.CharField(max_length=50,null=True,blank=True)
    price = models.DecimalField(max_digits=5,decimal_places=2)
    image = models.ImageField(null=True,blank=True,default='/placeholder.png')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
 
    def __str__(self):
           return self.desc

class Review(models.Model):
    product = models.ForeignKey(Products, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)

class Order(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True)
    order_date = models.DateTimeField(default=datetime.now)
    address = models.CharField(max_length = 100, null = True, blank = True)
    city = models.CharField(max_length = 100, null = True, blank = True)
    country = models.CharField(max_length = 50, null =True, blank = True)
    total = models.DecimalField(max_digits = 7, decimal_places = 2, null = True)
    def __str__(self):
        return self.user.username
 


class OrderItem(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    desc = models.CharField(max_length=200, null=True, blank=True)
    amount = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    
    def __str__(self):
        return str(self.desc)
    
    
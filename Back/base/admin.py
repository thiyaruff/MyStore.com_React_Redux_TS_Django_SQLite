from django.contrib import admin

from .models import *


admin.site.register(Products)
admin.site.register(CustomUser)
admin.site.register(Category)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Review)

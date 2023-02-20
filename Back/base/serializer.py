from rest_framework import serializers
from .models import Category, CustomUser, Order, OrderItem, Products, Review






class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Review
        fields = '__all__'

    def create(self, validated_data): 
        user = self.context['user']
        return Review.objects.create(**validated_data, user = user)

class ProductSerializer(serializers.ModelSerializer):
    # reviews = ReviewSerializer(many=True, read_only=True)
    # category = CategorySerializer()
    class Meta:
        model = Products
        fields = '__all__'
    # def create(self, validated_data):
    #     category = self.context['category']
    #     print(category)
    #     return Products.objects.create(**validated_data,category=category)

class ReviewSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Review
        fields = '__all__'

    def create(self, validated_data): 
        user = self.context['user']
        return Review.objects.create(**validated_data, user = user)

        
class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'
    
class OrderSerializer(serializers.ModelSerializer):
    orderItems = serializers.SerializerMethodField(read_only=True)
    # shippingAddress = serializers.SerializerMethodField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'
        
    def create(self, validated_data):
        user = self.context['user']
        print(user)
        return Order.objects.create(**validated_data,user=user)

    def get_orderItems(self, obj):
        items = obj.orderitem_set.all()
        serializer = OrderItemSerializer(items, many=True)
        return serializer.data
    

    def get_user(self, obj):
        user = obj.user
        serializer = CustomUserSerializer(user, many=False)
        return serializer.data

class CustomUserSerializer(serializers.ModelSerializer): 
    name = serializers.SerializerMethodField(read_only=True)
    id = serializers.SerializerMethodField(read_only=True)
    admin = serializers.SerializerMethodField(read_only=True)
    class Meta: 
        model = CustomUser
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}

    def get_name(self, object):
        name = object.first_name
        if name == '':
            name = object.email
        return name

    def get_id(self, object):
        return object.id

    def get_admin(self, object):
        return object.is_staff
  
    def create(self, validated_data): 
        user = self.context['user']
        return CustomUser.objects.create(**validated_data, user = user)

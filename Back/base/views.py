
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer,TokenRefreshSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import  Category, CustomUser, Order, OrderItem, Products, Review
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status,generics
from .serializer import  CategorySerializer, CustomUserSerializer, OrderItemSerializer, OrderSerializer, ProductSerializer, ReviewSerializer
from rest_framework.response import Response
from rest_framework import views
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.http import HttpResponse, JsonResponse

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        # ...
        return token
class RefreshTokenView(generics.GenericAPIView):
    serializer_class = TokenRefreshSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.validated_data, status=status.HTTP_200_OK)
 
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def register(request):
    print(request.data)
    user = CustomUser.objects.create_user(
                username=request.data['username'],
                email=request.data['email'],
                password=request.data['password'],
                address=request.data['address'],
                phone_number=request.data['phone_number'],
                age=request.data['age'],
            )
    user.is_active = True
    user.is_staff = True
    user.save()
        # Generate a token for the new user
    token = Token.objects.create(user=user)
    
    # Create a dictionary with the user's username and token
    response_data = {
        'username': user.username,
        'token': token.key
    }
    
    return Response(response_data)
    # print(user.username)
    # return Response("new user born",user.username)

# //////////////END OF LOGIN///////////

def index(req):
    return JsonResponse('hello', safe=False)

# /////// crud admin products with serializer
@api_view(['GET'])
def get1Product(request, pk):
        product = Products.objects.get(id=pk)
        serializer = ProductSerializer(product, many=False)
        return Response(serializer.data)

class APIViews(APIView):
    parser_class=(MultiPartParser,FormParser)
    def post(self,request,*args,**kwargs):
        api_serializer=ProductSerializer(data=request.data)
        print( api_serializer)
        if api_serializer.is_valid():
            api_serializer.save()
            return Response(api_serializer.data,status=status.HTTP_201_CREATED)
        else:
            print('error',api_serializer.errors)
            return Response(api_serializer.errors,status=status.HTTP_400_BAD_REQUEST)


    def get(self, request,  format=None):
        my_model = Products.objects.all()
        serializer = ProductSerializer(my_model, many=True)
        return Response(serializer.data)

    def delete(self, request, id, format=None):
        try:
            my_data =Products.objects.get(id=id)
            my_data.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Products.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    def put(self, request, id, format=None):
        my_model =Products.objects.get(id=id)
        print (request.data)
        serializer = ProductSerializer(my_model, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    # //////////////////end crud adimin///////////////////

#///////////////profile//////////////////////////////

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_user_profile(request):
    user = request.user
    serilaizer = CustomUserSerializer(user, many=False)
    return Response(serilaizer.data)

@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def update_user_profile(request):
    user = request.user
    serializer = CustomUserSerializer(instance=user, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        print(serializer.data)
        return Response(status=status.HTTP_200_OK, data=serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST, data=serializer.errors)

# //////////////// category crud/////////////////////

class CreateCategoryView(APIView):
    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            category = serializer.save()
            return Response({'id': category.id})
        return Response(serializer.errors, status=400)
    def get(self, request,  format=None):
        my_model = Category.objects.all()
        serializer = CategorySerializer(my_model, many=True)
        return Response(serializer.data)

#///////////////////order////////////////////////////////////////

@api_view(['POST'])
def order(request):
    total=request.data['total']
    api_serializer=OrderSerializer(data={'total': total}, context={'user':request.user})
    if api_serializer.is_valid():
            api_serializer.save()
    else:
        print('**************ORDER*******************')
        print('error',api_serializer.errors)
        print('***************ORDER******************')

    order_id = Order.objects.latest('id').id
    print(order_id)
    items=request.data['myCart']
# items
    for i in items:
        product = i['id']
        order=order_id
        desc=i['desc']
        amount=i['amount']
        price=i['price']
        image=i['image']
        item={'product':product,'order':order,'desc':desc,'amount':amount,'price':price,'image':image}
        serializer=OrderItemSerializer(data=item)
        if serializer.is_valid():
            serializer.save()
        else:
            print('**************ORDER-ITEM*******************')
            print('error',serializer.errors)
            print('***************ORDER-ITEM******************')
    
    return HttpResponse (serializer.errors)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyOrders(request):
    user = request.user
    print(user)
    orders =  OrderItem.objects.filter(order__user=user)
    serializer = OrderItemSerializer(orders, many=True)
    return Response(serializer.data)

# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def getAllordersDetails(request):
#     orders = Order.objects.filter(user=request.user)
#     serializer = OrderSerializer(orders, many=True)
#     return Response(serializer.data)
   



# ///////////////////review/////////////////////////////////////

@api_view(["GET"])
def get_reviews_per_product(request, pk):
    print(request.data)
    reviews = Review.objects.filter(product=Products.objects.get(id=pk))
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request, pk):
    user = request.user
    product = Products.objects.get(id=pk)
    data = request.data
    print(data)

    # 1 - Review already exists
    alreadyExists = product.review_set.filter(user=user).exists()
    if alreadyExists:
        content = {'detail': 'Product already reviewed'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # 2 - No Rating or 0
    elif data['rating'] == 0:
        content = {'detail': 'Please select a rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # 3 - Create review
    else:
        review = Review.objects.create(
            user=user,
            product=product,
            name=user.username,
            rating=data['rating'],
            comment=data['comment'],
        )

        reviews = product.review_set.all()
        product.numReviews = len(reviews)

        total = 0
        for i in reviews:
            total += i.rating

        product.rating = total / len(reviews)
        product.save()

        return Response('Review Added')




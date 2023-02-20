from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register', views.register),
    path('', views.index),
    path('get1Product/<int:pk>', views.get1Product),
    path('products/',views.APIViews.as_view()),
    path('products/<int:id>',views.APIViews.as_view()),
    path('addreviews/<str:pk>', views.createProductReview, name="create-review"),
    path('getReviews/<str:pk>', views.get_reviews_per_product),
    path('category/',views.CreateCategoryView.as_view()),
    path('order', views.order),
    path('getOrders/', views.getMyOrders),
    path('refresh',views.RefreshTokenView.as_view(),name='refresh_token'),
    path('profile/', views.get_user_profile),
    path('updProfile/', views.update_user_profile),
]



from django.shortcuts import render, get_object_or_404
from rest_framework import generics
from .models import *
from .serializers import *


# Create your views here.
class DishesAPIList (generics.ListCreateAPIView):
    queryset = Dishes.objects.all()
    serializer_class = DishesSerializer

class CategoryAPIList (generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class IngredientsAPIList (generics.ListCreateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

class ReceiptInstructionAPIList (generics.ListCreateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = ReceiptInstructionSerializer

class CommentListCreateView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self):
        dish_id = self.kwargs.get('dish_id')
        return Comment.objects.filter(dish_id=dish_id)

    def perform_create(self, serializer):
        dish_id = self.kwargs.get('dish_id')
        dish = get_object_or_404(Dishes, dish_id=dish_id)
        if Comment.objects.filter(dish=dish, author=self.request.user).exists():
            raise serializers.ValidationError({'Message':'You have already added comment on this receipt'})
        serializer.save(author=self.request.user, dish=dish)
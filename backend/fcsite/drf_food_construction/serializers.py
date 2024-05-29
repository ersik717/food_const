from rest_framework import serializers
from .models import *
from django.urls import reverse
from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer
from rest_framework import serializers

User = get_user_model()

class CreateUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'password']

class DishesSerializer(serializers.ModelSerializer):
    image_url = serializers.ImageField(required=False)
    comments = serializers.SerializerMethodField()
    class Meta:
        model = Dishes
        fields = '__all__'

    def get_comments(self, obj):
        comments = Comment.objects.filter(dish=obj)[:3]
        request = self.context.get('request')
        return {
            # "comments": CommentSerializer(comments, many=True).data,
            "all_comment_link": request.build_absolute_uri(reverse('comment_list', kwargs={'dish_id': obj.dish_id}))
        }

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'

class IngredientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ingredient
        fields = '__all__'

class ReceiptInstructionSerializer(serializers.ModelSerializer):
    image_url = serializers.ImageField(required=False)

    class Meta:
        model = ReceiptInstruction
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    dish = serializers.StringRelatedField(read_only=True)
    author = serializers.ReadOnlyField(source='author.username')
    class Meta:
        model = Comment
        fields = '__all__'
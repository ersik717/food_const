from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from drf_food_construction.models import User


class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm):
        model = User
        fields = ['email', 'first_name', 'last_name']
        error_class = "error"


class CustomUserChangeForm(UserChangeForm):
    class Meta(UserChangeForm):
        model = User
        fields = ['email', 'first_name', 'last_name']
        error_class = "error"

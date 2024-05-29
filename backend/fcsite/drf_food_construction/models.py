# from django.contrib.auth.models import User
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from .managers import CustomUserManager


# Create your models here.

class User(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(_('first name'), max_length=100)
    last_name = models.CharField(_('last name'), max_length=100)
    email = models.EmailField(_('Email address'), max_length=254, unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = CustomUserManager()

    class Meta:
        verbose_name = _('User')
        verbose_name_plural = _('Users')

    def __str__(self):
        return self.email

    @property
    def get_full_name(self):
        return f'{self.first_name} {self.last_name}'

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Ingredient(models.Model):
    ingredient_name = models.CharField(max_length=255, db_index=True)
    unit = models.IntegerField(db_index=True)
    measurement = models.CharField(max_length=255, db_index=True)

    def __str__(self):
        return self.ingredient_name

class Dishes(models.Model):
    dish_id = models.AutoField(primary_key=True)
    dish_name = models.CharField(max_length=255)
    dish_description = models.TextField(blank=True)
    dish_calories = models.IntegerField()
    dish_proteins = models.IntegerField()
    dish_fats = models.IntegerField()
    dish_carbohydrates = models.IntegerField()
    category = models.ForeignKey('Category', on_delete=models.PROTECT, null=True)
    creator = models.ForeignKey(User, on_delete=models.PROTECT, null=True)
    image_url = models.ImageField(upload_to=upload_to, blank=True, null=True)
    ingredient_id = models.ManyToManyField(Ingredient, null=True, blank=True)
    receipt_advice = models.TextField(blank=True)

    def __str__(self):
        return self.dish_name

class ReceiptInstruction(models.Model):
    dish_id = models.ForeignKey(Dishes, on_delete=models.PROTECT, null=True)
    image_url = models.ImageField(upload_to=upload_to, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    duration = models.DurationField(blank=True, null=True)

    def __str__(self):
        return self.description

class Category(models.Model):
    name = models.CharField(max_length=100, db_index=True)

    def __str__(self):
        return self.name

class Comment(models.Model):
    description = models.TextField(blank=True)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    comment_date = models.DateTimeField(auto_now_add=True)
    dish = models.ForeignKey(Dishes, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return str(self.dish)

# class Author(models.Model):
#     author_id = models.IntegerField
#     author_name = models.CharField(max_length=100, db_index=True)
#
#     def __str__(self):
#         return self.author_name
#

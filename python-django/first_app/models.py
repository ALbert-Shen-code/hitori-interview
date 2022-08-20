from tkinter import CASCADE
from django.db import models

# Create your models here.


class Publisher(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)

    def __str__(self):
        return self.first_name


class Article(models.Model):
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE)
    title = models.CharField(max_length=1000)
    content = models.CharField(max_length=2000)
    pub_date = models.DateTimeField('date published')

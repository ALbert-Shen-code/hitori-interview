from ctypes.wintypes import PUINT
from django.contrib import admin

from .models import Publisher
from .models import Article

admin.site.register(Publisher)
admin.site.register(Article)

# Register your models here.

from dataclasses import field
from rest_framework import serializers
from .models import Publisher
from .models import Article


class PublisherSerializers(serializers.ModelSerializer):
    class Meta:
        model = Publisher
        fields = '__all__'
